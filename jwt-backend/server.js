const express = require('express');
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hacking_tool' // DB 통일
};

// 로그인 엔드포인트
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.execute(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password]
    );
    await conn.end();

    if (rows.length === 0) return res.status(401).json({ message: '잘못된 아이디/비밀번호' });

    const user = rows[0];
    const token = jwt.sign({ username: user.username, role: user.role }, 'secret_key', { algorithm: 'HS256' });

    res.json({ message: '로그인 성공', token });
});

// 회원관리 페이지 접근
app.get('/members', async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({ message: '토큰이 필요합니다.' });

    try {
        const decodedToken = jwt.decode(token, { complete: true });
        const algorithm = decodedToken.header.alg;

        let decoded;
        if (algorithm === 'none') {
            decoded = jwt.verify(token, null, { algorithms: ['none'] });
        } else {
            decoded = jwt.verify(token, 'secret_key', { algorithms: ['HS256'] });
        }

        if (decoded && decoded.role === 'admin') {
            const conn = await mysql.createConnection(dbConfig);
            const [rows] = await conn.execute('SELECT username, role, password FROM users');
            await conn.end();

            res.json({ members: rows, message: '관리자 접근 성공!' });
        } else {
            res.status(403).json({ message: '접근이 거부되었습니다. 관리자 권한이 없습니다.' });
        }
    } catch (err) {
        res.status(403).json({ message: '유효하지 않은 토큰입니다.' });
    }
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
<h1>프로젝트 개요</h1>
<p>
    이 프로젝트는 React 프론트엔드와 Node.js 백엔드를 사용하여 <strong>JWT(JSON Web Token)의 none 알고리즘 취약점</strong>을 시연하고 학습하기 위한 웹 애플리케이션입니다. 또한, SQL 인젝션 방어를 위한 <strong>Prepared Statement</strong> 사용의 중요성을 함께 보여줍니다.
</p>

<p>
    <strong>⚠️ 주의!</strong> 이 코드는 보안 학습 및 교육용으로만 제작되었으며, 실제 서비스에 절대 사용해서는 안 됩니다.
</p>

<hr>

<h2>기술 스택</h2>
<ul>
    <li><strong>프론트엔드</strong>: React.js</li>
    <li><strong>백엔드</strong>: Node.js, Express.js</li>
    <li><strong>데이터베이스</strong>: MySQL</li>
</ul>

<hr>

<h2>설치 및 실행 방법</h2>
<h3>1. 파일 준비</h3>
<p>
    프로젝트 파일을 받으세요. ZIP 파일로 다운로드하거나 Git을 사용해 클론할 수 있습니다. 모든 파일은 <code>jwt/</code> 폴더 아래에 <code>jwt-backend</code>와 <code>jwt-frontend</code> 폴더가 있도록 구성되어야 합니다.
</p>
<pre><code>
/jwt
├── jwt-backend/
└── jwt-frontend/
</code></pre>

<h3>2. 필수 프로그램 설치</h3>
<p>
    아래 프로그램들이 컴퓨터에 설치되어 있어야 합니다.
    <ul>
        <li><strong>Node.js</strong>: <a href="https://nodejs.org/" target="_blank">다운로드 링크</a></li>
        <li><strong>MySQL</strong>: <a href="https://www.mysql.com/" target="_blank">다운로드 링크</a></li>
    </ul>
</p>

<h3>3. 백엔드 세팅 및 실행</h3>
<ol>
    <li>터미널(명령 프롬프트)을 열고 백엔드 폴더로 이동합니다.
    <pre><code>cd jwt/jwt-backend</code></pre>
    </li>
    <li>필요한 라이브러리를 설치합니다.
    <pre><code>npm install express mysql2 jsonwebtoken cors body-parser axios</code></pre>
    </li>
    <li>MySQL에 접속하여 아래 SQL 명령어를 실행해 데이터베이스와 테이블, 테스트용 계정을 생성합니다.
    <pre><code>
create database hacking_tool;

use hacking_tool;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password, role) VALUES ('user1', '1234', 'user');
INSERT INTO users (username, password, role) VALUES ('admin', 'adminpass', 'admin');
    </code></pre>
    <p>
        <strong>💡 참고:</strong> <code>server.js</code> 파일의 데이터베이스 연결 정보(<code>user</code>, <code>password</code>)가 MySQL 설정과 일치하는지 확인해 주세요.
    </p>
    </li>
    <li>서버를 실행합니다.
    <pre><code>node server.js</code></pre>
    <p>터미널에 <strong>"Server running on http://localhost:4000"</strong> 메시지가 뜨면 성공입니다.</p>
    </li>
</ol>

<h3>4. 프론트엔드 세팅 및 실행</h3>
<p>
    <strong>⚠️ 중요!</strong> 백엔드 서버가 먼저 실행되어야 합니다.
</p>
<ol>
    <li>새로운 터미널 창을 열고 프론트엔드 폴더로 이동합니다.
    <pre><code>cd jwt/jwt-frontend</code></pre>
    </li>
    <li>필요한 라이브러리를 설치합니다.
    <pre><code>npm install</code></pre>
    </li>
    <li>React 앱을 실행합니다.
    <pre><code>npm start</code></pre>
    <p>잠시 후 새 브라우저 탭이 자동으로 열리면서 React 애플리케이션이 실행됩니다.</p>
    </li>
</ol>

<hr>

<h2>문의 사항</h2>
<p>
    세팅 중 문제가 발생하거나 궁금한 점이 있으면 언제든지 문의해 주세요.
</p>

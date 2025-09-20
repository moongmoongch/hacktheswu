<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>프로젝트 세팅 가이드</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; padding: 20px; color: #333; }
        h1 { border-bottom: 2px solid #007bff; padding-bottom: 5px; color: #007bff; }
        h2 { margin-top: 30px; color: #0056b3; }
        pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word; }
        code { font-family: 'Courier New', Courier, monospace; background-color: #eee; padding: 2px 5px; border-radius: 3px; }
        strong { color: #0056b3; }
        .note { background-color: #fff3cd; border-left: 5px solid #ffc107; padding: 10px; margin: 20px 0; }
        a { color: #007bff; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>

    <h1>프로젝트 세팅 가이드</h1>
    <p>이 문서는 프로젝트를 로컬 환경에서 실행하기 위한 간단한 세팅 방법을 안내합니다.</p>

    <div class="note">
        <strong>⚠️ 중요!</strong>
        <p>백엔드 서버가 먼저 실행되어야 프론트엔드와 정상적으로 통신할 수 있습니다. 반드시 아래 순서대로 진행해 주세요.</p>
    </div>

    <h2>1. 파일 준비</h2>
    <p>
        프로젝트 파일을 받으세요. ZIP 파일로 다운로드하거나 Git을 사용해 클론할 수 있습니다.
        모든 파일은 <code>jwt/</code> 폴더 아래에 <code>jwt-backend</code>와 <code>jwt-frontend</code> 폴더가 있도록 구성되어야 합니다.
    </p>
    <pre><code>/jwt
├── jwt-backend/
└── jwt-frontend/
</code></pre>

    <h2>2. 필수 프로그램 설치</h2>
    <p>
        아래 프로그램들이 컴퓨터에 설치되어 있어야 합니다.
        <ul>
            <li><strong>Node.js</strong>: <a href="https://nodejs.org/" target="_blank">다운로드 링크</a></li>
            <li><strong>MySQL</strong>: <a href="https://www.mysql.com/" target="_blank">다운로드 링크</a></li>
        </ul>
    </p>

    <h2>3. 백엔드 세팅 및 실행</h2>
    <p>
        1. 터미널(명령 프롬프트)을 열고 백엔드 폴더로 이동합니다.
    </p>
    <pre><code>cd jwt/jwt-backend</code></pre>
    <p>
        2. 필요한 라이브러리를 설치합니다.
    </p>
    <pre><code>npm install express mysql2 jsonwebtoken cors body-parser axios</code></pre>
    <p>
        3. MySQL에 접속하여 아래 SQL 명령어를 실행해 데이터베이스와 테이블, 테스트용 계정을 생성합니다.
    </p>
    <pre><code>CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password, role) VALUES ('user1', '1234', 'user');
INSERT INTO users (username, password, role) VALUES ('admin', 'adminpass', 'admin');</code></pre>
    <p>
        4. 모든 준비가 완료되면 서버를 실행합니다.
    </p>
    <pre><code>node server.js</code></pre>
    <p>
        터미널에 <strong>"Server running on http://localhost:4000"</strong> 메시지가 뜨면 성공입니다.
    </p>

    <h2>4. 프론트엔드 세팅 및 실행</h2>
    <p>
        1. 새로운 터미널 창을 열고 프론트엔드 폴더로 이동합니다.
    </p>
    <pre><code>cd jwt/jwt-frontend</code></pre>
    <p>
        2. React 앱을 실행합니다.
    </p>
    <pre><code>npm start</code></pre>
    <p>
        잠시 후 새 브라우저 탭이 자동으로 열리면서 React 애플리케이션이 실행됩니다.
    </p>

</body>
</html>

// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // CSS 분리

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [members, setMembers] = useState([]);
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('');

  // 계정 발급 함수
  const handleIssueAccount = () => {
    const issuedUsername = 'user';
    const issuedPassword = '1234';
    alert(`ID: ${issuedUsername}\nPASSWORD: ${issuedPassword}`);
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:4000/login', { username, password });
      setToken(res.data.token);

      // JWT decode
      const decoded = JSON.parse(atob(res.data.token.split('.')[1]));
      setRole(decoded.role);

      if (decoded.role === 'admin') {
        setMessage('해킹 성공🎉 이 화면을 스태프에게 보여주세요!');
      } else {
        setMessage(`반갑습니다, ${decoded.username}님!`);
      }

      setMembers([]);
    } catch (err) {
      setMessage(err.response?.data?.message || '로그인 실패');
      setToken('');
      setMembers([]);
      setRole('');
    }
  };

  const handleLogout = () => {
    setToken('');
    setMessage('');
    setMembers([]);
    setUsername('');
    setPassword('');
    setRole('');
  };

  const fetchMembers = async () => {
    if (!token) {
      setMessage('토큰이 없습니다. 로그인 후 시도하세요.');
      return;
    }
    try {
      const res = await axios.get('http://localhost:4000/members', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMembers(res.data.members || []);
      setMessage(res.data.message || '');
    } catch (err) {
      setMembers([]);
      setMessage(err.response?.data?.message || '회원 목록 가져오기 실패');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Login</h1>

      {!token && (
        <div className="login-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className="button-row">
            <button className="btn login-btn" onClick={handleLogin}>로그인</button>
            <button className="btn issue-btn" onClick={handleIssueAccount}>계정 발급</button>
          </div>
        </div>
      )}

      {token && (
        <div className="user-box">
          <p className="message">{message}</p>
          <button className="btn logout" onClick={handleLogout}>로그아웃</button>
          <button className="btn members" onClick={fetchMembers}>회원 목록 조회</button>
        </div>
      )}

      {members && members.length > 0 && (
        <table className="members-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, idx) => (
              <tr key={idx}>
                <td>{m.username}</td>
                <td>{m.role}</td>
                <td>{m.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;

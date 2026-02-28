import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  /**
   * ログインボタンを押した時に呼ばれる関数
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>シンプルSNS</h1>
        <p className="login-subtitle">ようこそ！ログインしてください</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">ユーザー名</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="ユーザー名を入力"
              className="input"
              autoFocus
            />
          </div>
          <button type="submit" className="btn-primary">
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

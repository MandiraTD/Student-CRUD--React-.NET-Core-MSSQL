import React, { useState} from "react";
import axios from "axios";

function Auth({ history }) {
  const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? 'https://localhost:7195/api/auth/login' : 'https://localhost:7195/api/auth/register';
        const data = isLogin ? { username, password } : { username, password, email };

        try {
            const response = await axios.post(url, data);
            if (isLogin) {
                localStorage.setItem('token', response.data.token); // Store token
                history.push('/home'); // Redirect after successful login
            } else {
                alert('Registration successful! Please log in.');
                setIsLogin(true);
            }
        } catch (error) {
            console.error(error);
            alert('Error: ' + error.response.data.title);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {!isLogin && <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />}
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            <button type="button" onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </form>
    );
  
}

export default Auth;

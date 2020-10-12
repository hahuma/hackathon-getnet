import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
        <div className="main-content">
            <form className="login-form">
            <label htmlFor="email">
                    Seu email:
                </label>
                <input type="email" id="email" required>
                <label htmlFor="password">
                    Sua senha:
                </label>
                <input type="password" id="password" required>
                <button href="../Dashboard/index.html" type="submit">Entrar</button>
                <span>
                    Não tem um login ainda?
                    <a to="/signin">Cadastre-se</a>
                </span>
            </form>
        </div>
        </>
    )
}
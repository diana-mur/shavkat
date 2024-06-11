import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { authThunk } from '../redux/authSlice.js'
import { useState } from "react"

function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="ФИО" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" required />
            {
                authState?.error && <p style={{color: 'red'}}>{authState?.error}</p>
            }
            {
                authState?.message && <p style={{color: 'red'}}>{authState?.message}</p>
            }
            <p>Еще нет аккаунта? <Link to={'../registration'}>Зарегистрируйтесь</Link></p>
            <button onClick={() => dispatch(authThunk({ name, password }))}>Войти</button>
        </>
    )
}

export default Login
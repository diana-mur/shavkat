import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { regThunk } from '../redux/regSlice.js'
import { useEffect, useState } from "react"

function Reg() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const regState = useSelector(state => state.reg)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (regState.message == 'Пользователь успешно зарегистрирован.') {
            navigate('../login')
        }
    }, [regState])

    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="ФИО" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" />
            {
                !Array.isArray(regState?.error) && regState?.error && <p style={{color: 'red'}}>{regState?.error}</p>
            }
            {
                !Array.isArray(regState?.message) && regState?.message && <p style={{color: 'red'}}>{regState?.message}</p>
            }
            <p>Уже есть аккаунт? <Link to={'../login'}>Войдите</Link></p>
            <button onClick={() => dispatch(regThunk({ name, password }))}>Зарегистрироваться</button>
        </>
    )
}

export default Reg
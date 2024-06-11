import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authThunk, logOut } from "../redux/authSlice"

function Profile() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)

    let jwt
    token ? jwt = jwtDecode(token) : null

    const userId = jwt?.id

    useEffect(() => {
        fetch(`http://localhost:8080/api/application/user/${userId}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(json => setData(json));
        fetch(`http://localhost:8080/api/user/info/${userId}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(json => setName(json.name))
    }, [token])

    return (
        <>
            <button onClick={() => dispatch(logOut())}>выход</button>
            <p>{name}</p>
            {
                data?.map(apl => (
                    <div className="">
                        <p>{apl.statusId}</p>
                        <p>ФИО: {apl.name}</p>
                        <p>Сообщение: {apl.message}</p>
                        <p>Телефон: {apl.tell}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Profile
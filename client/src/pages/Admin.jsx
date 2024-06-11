import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Admin() {
  const [data, setData] = useState([])
  const [applications, setApplications] = useState([])
  const token = useSelector(state => state.auth.token)

  let jwt
  token ? jwt = jwtDecode(token) : null

  const userId = jwt?.id

  useEffect(() => {
    fetch(`http://localhost:8080/api/application/`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
      .then(json => setData(json?.rows?.filter(el => el.statusId !== 'В обработке')));

    fetch(`http://localhost:8080/api/application/`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
      .then(json => {
        console.log(json);
        setApplications(json?.rows?.filter(el => el.statusId == 'В обработке'))
      })
  }, [token])

  const sendStatus = (id, statusId) => {
    fetch(`http://localhost:8080/api/application/`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, statusId })
    })
    setApplications(() => applications.filter(el => el.id !== id))
  }

  return (
    <>
      <h1>В обработке</h1>
      {
        applications?.map(ap => (
          <div className="">
            <p>{ap.name}</p>
            <p>{ap.message}</p>
            <p>{ap.tell}</p>
            <button onClick={() => sendStatus(ap.id, 'Принят')}>Принять</button>
            <button onClick={() => sendStatus(ap.id, 'Отклонен')}>Отклонить</button>
          </div>
        ))
      }
      <h1>Все заявки</h1>
      {
        data?.map(card => (
          <div className="">
            <p>ФИО: {card.name}</p>
            <p>Сообщение: {card.message}</p>
            <p>Телефон: {card.tell}</p>
            <p>{card.statusId}</p>
          </div>
        ))
      }
    </>
  )
}

export default Admin
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function AdminEvent() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [adress, setAdress] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)

    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        fetch(`http://localhost:8080/api/event/`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(data => data.json())
            .then(json => setData(json?.rows));
    }, [token])

    const createEvent = (e) => {
        e.preventDefault()

        const formdata = new FormData()

        formdata.append('name', name)
        formdata.append('img', image)
        formdata.append('description', description)
        formdata.append('adress', adress)
        formdata.append('time', time)
        formdata.append('date', date)
        formdata.append('price', price)

        fetch(`http://localhost:8080/api/event/`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formdata
        })
            .then(data => data.json())
            .then(json => alert(json.message))
            .then(location.reload())
    }

    const deleteEvent = (id) => {
        fetch(`http://localhost:8080/api/event/delete`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then(data => data.json())
            .then(json => alert(json.message))
            .then(location.reload())
    }

    return (
        <>
            <div className="">
                <h1>Создать мероприятие</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Название" required />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание" required />
                <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} placeholder="Адрес" required />
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Время" required />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Дата" required />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена" required />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="Изображение" required />
                <button onClick={createEvent}>создать</button>
            </div>
            <div className="">
                <h1>Все мероприятия</h1>
                {
                    data?.map(event => (
                        <div className="">
                            <p>{event.name}</p>
                            <p>{event.description}</p>
                            <p>{event.adress}</p>
                            <p>{event.time}</p>
                            <p>{event.date}</p>
                            <p>{event.price}</p>
                            <div className="">
                                <img src={`http://localhost:8080/${event.img}`} style={{
                                    height: '100px',
                                    width: '100px'
                                }} alt="" />
                            </div>
                            <button onClick={() => deleteEvent(event.id)}>удалить</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AdminEvent
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function AdminGallery() {
    const [data, setData] = useState([])
    const [image, setImage] = useState(null)

    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        fetch(`http://localhost:8080/api/gallery/`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(data => data.json())
            .then(json => setData(json?.rows));
    }, [token])

    const sendImage = (e) => {
        e.preventDefault()

        const formdata = new FormData()

        formdata.append('img', image)

        fetch(`http://localhost:8080/api/gallery/`, {
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

    const deleteImage = (id) => {
        fetch(`http://localhost:8080/api/gallery/delete`, {
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
                <h1>Загрузить картинку</h1>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="Изображение" required />
                <button onClick={sendImage}>загрузить</button>
            </div>
            <div className="">
                <h1>Вся галерея</h1>
                {
                    data?.map(card => (
                        <div className="">
                            <div className="">
                                <img src={`http://localhost:8080/${card.img}`} style={{
                                    height: '100px',
                                    width: '100px'
                                }} alt="" />
                            </div>
                            <button onClick={() => deleteImage(card.id)}>удалить</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AdminGallery
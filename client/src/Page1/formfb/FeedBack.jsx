import React, { useState } from 'react'
import "./FeedBack.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const FeedBack = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [topic, setTopic] = useState('')

    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)

    let jwt
    token ? jwt = jwtDecode(token) : null
    
    const userId = jwt?.id

    const sendForm = (e) => {
        e.preventDefault();

        if (token) {
            fetch('http://localhost:8080/api/application/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    tell: phone,
                    message: topic,
                    userId
                })
            })
                .then(data => data.json())
                .then(json => {
                    if (json.message) return alert(json.message)
                })
        } else {
            alert('Для отправки формы необходимо авторизоваться в системе')
            navigate('/login')
        }
    }

    return (
        <div className='fb_cont'>
            <div className="fb_item">
                <div className="fb_el">
                    <p className="title_txt fb_txt">Получите больше информации</p>
                    <form className='fb_form_el'>
                        <input className='input_fb' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='фамилия Имя отчество' />
                        <input className='input_fb' value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder='Номер телефона' />
                        <div className='btn_in_'>
                            <input className='input_fb' value={topic} onChange={(e) => setTopic(e.target.value)} type="text" placeholder='Тема заявки' />
                            <button className='btn_fb' onClick={sendForm}></button>
                        </div>
                    </form>
                    <p className="polsogl">* Нажимая кнопку <span>“Отправить”</span>, вы соглашаетесь с нашими условиями и подтверждаете, что ознакомились с нашей <span><a href="#">Политикой</a></span> использования данных.</p>
                </div>
                <img className='fb_img' src="./src/assets/picture/fb_img.png" alt="" />
            </div>
        </div>
    )
}

export default FeedBack
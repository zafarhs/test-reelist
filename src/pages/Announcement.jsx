import React from 'react';
import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft } from "react-icons/md";
import Layout from '../components/Layout'
import { useContext } from 'react';
import { Context } from '../components/BaseContext';
import { useState } from 'react';
import { RxSlash } from "react-icons/rx";
import sold from '../static/img/sold.jpg'
import rent from '../static/img/rent.jpg'

function Announcement() {
    const [hover, setHovered] = useState(false)
    return (
        <Layout>
            <div className="advertising__header">
                <Link to={'/'} className='advertising__header__link'>Asosiy</Link>
                <RxSlash />
                <Link className='advertising__header__link'>Reklama joylashtirish</Link>
            </div>
            <div className='advertising__container'>
                <div className="advertising__box">
                    <img src={sold} alt="" />
                    <h2>SOTMOQCHIMISIZ ?</h2>
                    <p>Siz bizning platformamizda mahsulotlar va xizmatlarni qulay va tez sotishingiz mumkin!</p>
                    <Link to={'/add-post'}><button>E'lon berish</button></Link>
                </div>
                <div className="advertising__box">
                    <img src={rent} alt="" />
                    <h2>IJARAGA QO'YMOQCHIMISIZ ?</h2>
                    <p>Siz bizning platformamizda mahsulotlar va xizmatlarni qulay va tez sotishingiz mumkin!</p>
                    <Link to={'/add-rent'}><button>E'lon berish</button></Link>
                </div>
            </div>
        </Layout>
    );
}

export default Announcement;
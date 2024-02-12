import React, { useState } from 'react';
import { IoHeart } from "react-icons/io5";
import { Link } from 'react-router-dom'

function Post() {
    const [views, setViews] = useState(false)

    return (
        <Link className='link__amateurs' style={{backgroundColor: '#fff', width: '100%', borderRadius: '5px'}}>
        <div className="amateurs__column" style={{backgroundColor: '#fff', width: '100%', borderRadius: '15px'}}>
            <div className="amateurs__column__left">
                <div className="amateurs__column__img">
                    <img src="https://img.dmclk.ru/s1200x800q80/vitrina/d0/e5/d0e5c15937babd5e99ce0245e562769672862506.webp" alt="" />
                </div>
                <div className="amateurs__column__texts">
                    <div className="amateurs__top">
                        <p className="amateurs__price">10 500 000</p>
                        <div className="amateurs__subtitle">
                            <strong>1-комн.кв</strong>
                            <strong>32м</strong>
                            <strong>2/10 эт</strong>
                        </div>
                        <p className="amateurs__adress">
                            Москваб 1-й Новомихаловский прозезд, 8
                        </p>
                    </div>
                    <div className="amateurs__bottom">
                        <button onClick={() => setViews(true)}>{views ? '+998 (33) 299-77-07' : "Telefon raqam"}</button>
                    </div>
                </div>
            </div>
            <div className="amateurs__column__right">
                <button>
                    <IoHeart size={'16px'} />
                </button>
            </div>
        </div>
    </Link>
    );
}

export default Post;
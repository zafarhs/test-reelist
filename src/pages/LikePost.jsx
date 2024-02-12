import React from 'react';
import Layout from '../components/Layout'
import { IoHeart } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { useState } from 'react';

function LikePost() {
    const [views, setViews] = useState(false)
    return (
        <Layout>
            <div className="amateurs__container">
                <h2>Избранное</h2>
                <div className="hr"></div>
                <div className="amateurs__content">
                    <div className="amateurs__content__left">
                        <div className="all__amateurs">
                            <svg className='svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21 8v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2h10a2 2 0 0 0 2-2V6a2 2 0 0 1 2 2zm-4-4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2zm-4 11a1 1 0 0 0-1-1H7a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1zm2-3a1 1 0 0 0-1-1H7a1 1 0 0 0 0 2h7a1 1 0 0 0 1-1zm0-7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V5z"></path>
                            </svg>
                            <div className="amateurs__text">
                                <p>Все объявления</p>
                                <p>2 объявления</p>
                            </div>
                        </div>
                    </div>
                    <div className="amateurs__content__right">
                        <div className="amateurs__right__title">
                            <h2>Все объявления</h2>
                        </div>
                        <div className="amateurs__all__columns">
                            <Link className='link__amateurs'>
                                <div className="amateurs__column">
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
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default LikePost;
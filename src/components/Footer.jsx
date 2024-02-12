import React from 'react';
import { Link } from 'react-router-dom'
import { IoCall } from "react-icons/io5";
import { MdHelp } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import logo from '../static/img/logo.png'

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__top">
                <div className="fototer__left">
                    <Link className='footer__item'>Открытые данные</Link>
                    <Link className='footer__item'>Партнерам</Link>
                    <Link className='footer__item'>Карьера</Link>
                    <Link className='footer__item'>Карта сайта</Link>
                    <Link className='footer__item'>Правовая &nbsp;информация &nbsp;</Link>
                </div>
                <div className="fototer__right">
                    <Link className='footer__item__right'><IoCall color='#888' />900</Link>
                    <Link className='footer__item__right'><MdHelp color='#888' />Помощь</Link>
                    <Link className='footer__item__right'><MdOutlineWatchLater color='#888' />Работа офисов</Link>
                </div>
            </div>
            <div className="footer__bottom">
                <img src={logo} alt="" />
                <div className="footer__texts">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id repellendus quia consequuntur deleniti consequatur. Temporibus minima iste dolores voluptate earum modi explicabo magni suscipit, at quaerat dolore hic consequuntur tempore.</p>
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id repellendus quia consequuntur deleniti consequatur. Temporibus minima iste dolores voluptate earum modi explicabo magni suscipit, at quaerat dolore hic consequuntur tempore.</p>
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id repellendus quia consequuntur deleniti consequatur. Temporibus minima iste dolores voluptate earum modi explicabo magni suscipit, at quaerat dolore hic consequuntur tempore.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
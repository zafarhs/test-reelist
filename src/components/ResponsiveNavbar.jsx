import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from './BaseContext';

function ResponsiveNavbar() {
    const { menu, setMenu, allmenu, setAllMenu  } = useContext(Context)
    return (
        <div className={!menu ? 'response__none' : 'response__block'}>
            <div className={`responsive ${!menu ? 'responsive__block' : ''}`}>
                <li><Link className='link'>Покупка</Link></li>
                <li><Link  className='link'>Аренда</Link></li>
                <li><Link className='link'>Новостройки</Link></li>
                <li><Link className='link'>Помтроить дом</Link></li>
                <li><Link className='link'>Ипотека</Link></li>
                <li><Link className='link'>Услуги</Link></li>
                <li><Link className='link'>Журнал</Link></li>
                <li><Link className='link'>Риелторы</Link></li>
            </div>
        </div>
    );
}

export default ResponsiveNavbar;
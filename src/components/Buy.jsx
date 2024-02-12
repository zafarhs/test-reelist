import React from 'react';
import { useContext } from 'react';
import { FaXmark } from "react-icons/fa6";
import { Context } from './BaseContext';

function Buy() {
    const {setAllMenu} = useContext(Context)
    return (
        <div className="buy__content">
            <button className='buy__content__xmark' onClick={() => setAllMenu(false)}>
                <FaXmark />
            </button>
            <div className='buy__header'>
                <h2>Sotib olish</h2>
            </div>
            <div className="buy__columns">
                <div className="buy__column">
                    <img src="https://statics.dmclk.ru/web-ui-library/images/topline/flat.svg" alt="" />
                    <p>Квартира</p>
                </div>
                <div className="buy__column">
                    <img src="https://statics.dmclk.ru/web-ui-library/images/topline/flat.svg" alt="" />
                    <p>Квартира</p>
                </div>
                <div className="buy__column">
                    <img src="https://statics.dmclk.ru/web-ui-library/images/topline/flat.svg" alt="" />
                    <p>Квартира</p>
                </div>
                <div className="buy__column">
                    <img src="https://statics.dmclk.ru/web-ui-library/images/topline/flat.svg" alt="" />
                    <p>Квартира</p>
                </div>
                <div className="buy__column">
                    <img src="https://statics.dmclk.ru/web-ui-library/images/topline/flat.svg" alt="" />
                    <p>Квартира</p>
                </div>
            </div>
        </div>
    );
}

export default Buy;
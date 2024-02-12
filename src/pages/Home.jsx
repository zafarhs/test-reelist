import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { MdLogin } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useContext } from 'react';
import { Context } from '../components/BaseContext';
import home from '../static/img/home.jpg'
import logo from '../static/img/logo.png'


function Home() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const { setModal } = useContext(Context)
    return (
        <Layout>
            <img className='home__background__img' src={home} alt="" />
            <div className="home__container">
                <div className="home__content__one">
                    <h2><img height={'70px'} src={logo} alt="" /> orzuingizga erishing</h2>
                </div>
                <div className="slider__content">
                    <div className="slider__container">
                        <Carousel responsive={responsive}>
                            <div className="home__content__box">
                                <img src="data:image/png;base64,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" alt="" />
                                <p>Servis</p>
                            </div>
                            <div className="home__content__box">
                                <img src="data:image/png;base64,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" alt="" />
                                <p>Servis</p>
                            </div>
                            <div className="home__content__box">
                                <img src="data:image/png;base64,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" alt="" />
                                <p>Servis</p>
                            </div>
                            <div className="home__content__box">
                                <img src="data:image/png;base64,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" alt="" />
                                <p>Servis</p>
                            </div>
                            <div className="home__content__box">
                                <img src="data:image/png;base64,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" alt="" />
                                <p>Servis</p>
                            </div>
                            <div className="home__content__box">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAC91BMVEUAAAC1rPqstPPJvPm/r/qjvvbDtfuwuviUxfGmsvWqvPazuviLxfC0ufeKyPKTxPSvufa8s/uAy/CNxfKBye+FyfK+tvuPxvOpvfexu/ebwPWCyvGFyfGbwfSewfWKxvHNtP9+y/DNbDyFyPCCyvGgvfn/4p2EyvKRxPKNxvKSxvC8tPrGjWfWayKawfSbv/SlvfXKbEjZdkGlu/SXxPHYe1TWayJ9zPDmgVmTxfLabB+ByvCcwPT/wF/6yoaCPCDVbzF8zPD/63jadTpzMxvbbBr/ihXjcSDiciXWbCXWayf/0jLTayr/9oD/2D9/y/D/9aeTxfP/5HH/9aT/9Xz7fiv/833/7V//0jD/0HPQbDD/94v/43z/96H/85j/953/wDjteyr/61L/zEL/jiz/9X37gDH/9XvOZhv/v0+tWjD/ijXueC3/0i3/qET/0C7/9Jv/9H/seDD/9Yb/x2P/1DX/wyvqdSX/m0v8j0L/9aP/0D3ummX/rS7WayL/9YT/4Dr/9Y3/50r/mDe4WhH/8WnCbkP+mBn/0lvajoH/qT//9qj/40P/0TD/okX/0zODPiX/jD//9qn/9YPpfkL/nAD/mwD/mgD/9Hn/nwD/0yb/mQH/rQv/lgL/6Un/kwL/ogL/6k7/qAj/pQb/xC3/kAT/9XTrcxX/iAr/8mT/2y//0CP/1CL/vxv/txXweBT/sg7/kQv/9G3/8Fz/4zv/1DX/3DT/yzP/yR76fhz1exD8hA74fg7/9Xn/7lT/5kD/2DP/yCX/iwf/8nH/4E3/4kD/1DL/wSb/zSBgKBv/lxX/lQz/3jr/0C3/vyHibxf/sRX/nQv/9ZL/zD3/4Db/1yr/wyD/xBz/uxf/pxL/9Iv/9YL/8Hj/6mf/zSvlcRH/jAzvdwv/9Z7/61b/10T/uin/tR//kB7/uBvGYRv/zBWjSwm+dnDYhGelYFXIcVLui034lDuiVjmRSzP/riT0eR3/oBu+WQWxcXOMQyrRZwj/xgf/uAL+KJkGAAAAlXRSTlMABAcFCzQOGw4JKh4ZGFNFIhFSTUQlFUkuJgxcWD06PQldV0A0EQhONzEgEwfaQi8kHxgWFA/LZC0r7V8nGQ/8eGNTI/7+/u/jv6+bm3psYVRAJ/Ht4rSjolBJPjkuHBP+9/Tz7+LUz87Nx7i4t66up6SPjYqJhoZsTklCQf758Ozo6OLi4drY1NDDwr6zn5GQiXFlUWWzZ5IAAAdVSURBVFjD5Zd1XBNhGMc3N0RQ7MZWbERFDOzu7u7u7u7O7TxvY5M5NwMHFgqIiCg2YGN3d9cfPs/7vjfdx+luzL/0N+62u/vc9/PE7w1k/5R6dp/SClSnTp3O3dooXKV1X7O0bds7V67H3dsTHh5+ru+icd2KppxWtOuotnfunD0cF3Pj4uUdoRpQ4oNegzvXSCGvx6izoMMHYw6FhBr0vArE83p98rvBnVPEmzL7ypUrV6PPnw7R6FUqtVoFHzzzfPL0cSnIe+zMq1evbg6KORSq5wGELPFQJX0YUd3Z8jVff+DAgZ1Bey9qeBVSOLWKg4MA4fxhiZOFbL4ZtDMo5mKwClMlGRMBFy+FEyOcyrrrTtTGU4c0lINUhFI6fnMnVjiT8PwtoOgjNzQ8AXGqH1waIsT4cJp0YMddqI17drB2AJI0hNMZdVqONejkXMll7NYn+u7d6Oi4eAPGwhKFyIxRt29HmMMEeod7OElygBuJzoXCi8yAqNibH58+/XjTfBJuchhiP4neqT4nCLQxLl5Po2M90Znm1Tt+vN7T2yeTeHJbkBpii4OojfdCVRwzNIfUyEGlVx0/frzmF50hmIYeNlQacNluVFx4MDYU0yN5ay1dZOVqQoiPjZpkntzTScu5+qzzoN1x8bzoZ+LAMFN5mWxIzXo1H4clPtATMwoNJksBTt2L2n3vEc9hCUULht0uCsC3NT/POHH/vkFFCttgtaQSbkWdOpcIJaRd4UjKUXVlAQvevH3TO7nXfb2alOOWpCKOv4DaG65Rs2yZ7RpMlE17+eLFy9eXzz3g6XQRNkAKsOkGVMymYGoYEh4GdHL/5MXPPj179W7TJo2Kmj2svZQ1ptM21GkAIsY6wQCxwavnz18nhmxKpO1CYFEpER5DbYsnEQocvskMmZSUlBwaciZRz4aPxAgn7EM9iQ9GRwt04mKd5g3BGk0wm3HhfGuApC5fQj05g1MhMQ45WHN4oHHkFz69NUySD8+EgL4ikGNAJuZyDivAYZCRY6QA2/QNBx07hJMhQkQmEtiJtUq7f50EXo0O165fv373yNFHtPSsofQCeVZzqo29y0niXbt2eNeRo5f1mC9xIksVxKjsHCmhhEVHrwdtObgnBEeXmKi1jjQ8FrH2fS3JvJgQAwkDJAIpBpHiT3Oj8o63C8iD5fiMgdQfARyhivMEFbmjtUx0vLwz3sVgADACR3DUKGL5yAIQ2ShAEu9w0F7KE/MlIvZjvaDNjjV1ccRby3iHNGprwaw8qyUZz2hq4ohXh/JOAU9AIC0dgqz9Zte4RFsaBzjitQPeZrKdYQOO5cvRhhAUeyDEmnwddbgr8g4DL5QOfkZiuxmRRBPWRd5sUtfR5rz/AYgv+tQN5HFivgyGGBHICdrYiPrNHOXbhuQbvRt5pBnIYxBM0ajVCgLHCYLOaLYkVCzkcHvefz0EGL37NPDEllLnUH6sJdJsNseazZFRpvq+tQIc8gYCbv2uI6d38ALzCScAiC5QaJHH9RNMJtPNhPq+zQqVdvyv0kCI7wDhiYbmODaAUUZT40JEXSojzDGvw2bQFpyw2M6PDQc2VsByaBHp6rgFtCtoz2USH/nD+JCKHddZKjrHa9MH9oKwGzxjAB4VkHg4U89F+NpYTupW5sg5DfqO0DBxTqvT6eCItQDPOY3fANp+FDYKVBw2WhsVERERBZ8E4DmplbZAXDp5dWTgoIqoJuA5Z9XUFkgaLewvVBolh+cpBhrYhAoNAWBlWYrViQD3IFBcQf4eUC3A5gUXSFeAI0UgjwMYeS4Cl4tA4mcesC4Ch1NgPAAxX2ptl4DbQNtPx+s5jI9Ogbr3NVyo4b5jsF/d94hX6fUABN8IWnMjWco1YQfqmyZJxXNarc5ojDVHJdRyAVh94QmQcDLsFkzwUREWiykhsFlpmQsqP6ZRYMPAhg0bBgb6+jZu0qxWofIyFxVQjqh8gEL2/0ouk8vl1gs5vXRW+BqRQqFI9ZM86JdCAY8kcykH3/bwyI1KY6vcRPBQJDumAUupBI6Pj08FkH86W8EtHxCglYD9M1SukCMsdZpMPhX8/b3SpXMvCcpmI7zj7p7Oy9/fxyd1aqVSCaH+DgmpehRQpk6dqZS/l7t72pJly1arUqVKiRIlilgFF3CrWtmyGdO6u3v5l8oEzAIevyFCsgWUSsBl93JPm7FsNc8qfm7Fi+fPn79w4axMhQvDZfHiJfz8PKsh08sLkBikQm6Hh0DgEVwuz5w53dzy5W2dIUOOLMWKZWYqVixLjgwZWufNV9zNz9MzFyKzY5BYSTs8xc88xJUBWpb06fPk8S5YsGDVggW9vfOkT58FmGXy5nNzy+mZKxchQtap7A1VBfQD8rXhUVzVlrUrgWq3rOqdB5EikcSYvRQA7eZMMi7l9QvQG4G1GdDbHhBzlsnt9OT3KWPGdlLOKKasUNjvstJeU3IUw67YNgVxP/EwQLtED0L0Z7bx8ytha5vCIFvbZKe2Ufzkw+87wIl2tkCwpwAAAABJRU5ErkJggg==" alt="" />
                                <p>Servis</p>
                            </div>
                            <div className="home__content__box">
                                <img src="data:image/png;base64,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" alt="" />
                                <p>Servis</p>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div className="home__content__menu">
                    <div className="home__menu__header">
                        <h2>Tanlangan</h2>
                        <Link to={'/allposts'} className='home__menu__all'><IoIosMenu size={'20px'} />&nbsp;hammasi</Link>
                    </div>
                    <div className="home__menu">
                        <Link to={'/detail'} className="home__menu__box">
                            <div className="home__menu__box__img">
                                <img src="https://img.dmclk.ru/s1200x800q80/vitrina/owner/fe/30/fe30530f78b44b0f89e996ba74de02a4.webp" alt="" />
                            </div>
                            <p className='price'>9 600 000</p>
                            <div className="subtitle">
                                <strong>1-комн.кв</strong>
                                <strong>32м</strong>
                                <strong>2/10 эт</strong>
                            </div>
                            <p className="address">Москваб 1-й Новомихаловский прозезд, 8</p>
                        </Link>
                        <Link className="home__menu__box">
                            <div className="home__menu__box__img">
                                <img src="https://img.dmclk.ru/s1200x800q80/vitrina/owner/1e/f2/1ef2fc971a7b40a1a4a2251cc598507e.webp" alt="" />
                            </div>
                            <p className='price'>9 600 000</p>
                            <div className="subtitle">
                                <strong>1-комн.кв</strong>
                                <strong>32м</strong>
                                <strong>2/10 эт</strong>
                            </div>
                            <p className="address">Москваб 1-й Новомихаловский прозезд, 8</p>
                        </Link>
                        <Link className="home__menu__box">
                            <div className="home__menu__box__img">
                                <img src="https://img.dmclk.ru/s1200x800q80/vitrina/owner/fe/30/fe30530f78b44b0f89e996ba74de02a4.webp" alt="" />
                            </div>
                            <p className='price'>9 600 000</p>
                            <div className="subtitle">
                                <strong>1-комн.кв</strong>
                                <strong>32м</strong>
                                <strong>2/10 эт</strong>
                            </div>
                            <p className="address">Москваб 1-й Новомихаловский прозезд, 8</p>
                        </Link>
                        <Link className="home__menu__box">
                            <div className="home__menu__box__img">
                                <img src="https://img.dmclk.ru/s1200x800q80/vitrina/owner/53/52/5352ed7d9bdf41afb95f94279f83820c.webp" alt="" />
                            </div>
                            <p className='price'>9 600 000</p>
                            <div className="subtitle">
                                <strong>1-комн.кв</strong>
                                <strong>32м</strong>
                                <strong>2/10 эт</strong>
                            </div>
                            <p className="address">Москваб 1-й Новомихаловский прозезд, 8</p>
                        </Link>
                        <Link className="home__menu__box">
                            <div className="home__menu__box__img">
                                <img src="https://img.dmclk.ru/s1200x800q80/vitrina/owner/43/4e/434e0e67a5a744b1be8cfea0d1f3e488.webp" alt="" />
                            </div>
                            <p className='price'>9 600 000</p>
                            <div className="subtitle">
                                <strong>1-комн.кв</strong>
                                <strong>32м</strong>
                                <strong>2/10 эт</strong>
                            </div>
                            <p className="address">Москваб 1-й Новомихаловский прозезд, 8</p>
                        </Link>
                        <Link className="home__menu__box">
                            <div className="home__menu__box__img">
                                <img src="https://img.dmclk.ru/s1200x800q80/vitrina/c4/31/c4313bae53c4896d8063d3df4ab018dbad14d783.webp" alt="" />
                            </div>
                            <p className='price'>9 600 000</p>
                            <div className="subtitle">
                                <strong>1-комн.кв</strong>
                                <strong>32м</strong>
                                <strong>2/10 эт</strong>
                            </div>
                            <p className="address">Москваб 1-й Новомихаловский прозезд, 8</p>
                        </Link>
                        <Link className="home__menu__box">
                            <div className="home__menu__box__img">
                                <img src="https://img.dmclk.ru/s1200x800q80/vitrina/owner/ba/13/ba1379782db546e9a22a3dbc51ad9c50.webp" alt="" />
                            </div>
                            <p className='price'>9 600 000</p>
                            <div className="subtitle">
                                <strong>1-комн.кв</strong>
                                <strong>32м</strong>
                                <strong>2/10 эт</strong>
                            </div>
                            <p className="address">Москваб 1-й Новомихаловский прозезд, 8</p>
                        </Link>
                        <Link className="home__menu__box">
                            <div className="home__menu__box__img">
                                <img src="https://img.dmclk.ru/s1200x800q80/vitrina/84/18/8418da566bc2e06ca9bcf1d474b0426f69bde0c7.webp" alt="" />
                            </div>
                            <p className='price'>9 600 000</p>
                            <div className="subtitle">
                                <strong>1-комн.кв</strong>
                                <strong>32м</strong>
                                <strong>2/10 эт</strong>
                            </div>
                            <p className="address">Москваб 1-й Новомихаловский прозезд, 8</p>
                        </Link>
                    </div>
                </div>
                <div className="home__content__category">
                    <div className="home__category__box">
                        <h3 className='home__category__title'>Yangi binolar</h3>
                        <div className="home__category__texts">
                            <div className="category__text">
                                <p>Сдача до конца года</p>
                            </div>
                            <div className="category__text">
                                <p>Сдача до 2024</p>
                            </div>
                            <div className="category__text">
                                <p>Сдача до 2025</p>
                            </div>
                            <div className="category__text">
                                <p>Квартиры в новостройках</p>
                            </div>
                            <div className="category__text">
                                <p>С отделкой</p>
                            </div>
                        </div>
                    </div>
                    <div className="home__category__box">
                        <h3 className='home__category__title'>Kvartiralar sotiladi</h3>
                        <div className="home__category__texts">
                            <div className="category__text">
                                <p>1-комнатные</p>
                                <p>6 478</p>
                            </div>
                            <div className="category__text">
                                <p>2-комнатные</p>
                                <p>8 550</p>
                            </div>
                            <div className="category__text">
                                <p>3-комнатные</p>
                                <p>6 111</p>
                            </div>
                            <div className="category__text">
                                <p>Студии</p>
                                <p>3 159</p>
                            </div>
                            <div className="category__text">
                                <p>Комнаты</p>
                                <p>706</p>
                            </div>
                        </div>
                    </div>
                    <div className="home__category__box">
                        <h3 className='home__category__title'>
                            Kvartiralar ijaraga beriladi</h3>
                        <div className="home__category__texts">
                            <div className="category__text">
                                <p>1-комнатные</p>
                                <p>604</p>
                            </div>
                            <div className="category__text">
                                <p>2-комнатные</p>
                                <p>1 140</p>
                            </div>
                            <div className="category__text">
                                <p>3-комнатные</p>
                                <p>887</p>
                            </div>
                            <div className="category__text">
                                <p>Студии</p>
                                <p>189</p>
                            </div>
                            <div className="category__text">
                                <p>Комнаты</p>
                                <p>99</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__content__three">
                    <h2>Xizmatlar</h2>
                    <div className="home__content__slider">
                        <div className="home__content__three__box">
                            <p>Xizmatlar</p>
                            <img src="https://statics.dmclk.ru/dc_main_page_front/615e8dd1ee6d0dc8be4a.png" alt="" />
                        </div>
                        <div className="home__content__three__box">
                            <p>Xizmatlar</p>
                            <img src="https://statics.dmclk.ru/dc_main_page_front/1cdf6e0120c8a4233bdd.png" alt="" />
                        </div>
                        <div className="home__content__three__box">
                            <p>Xizmatlar</p>
                            <img src="https://statics.dmclk.ru/dc_main_page_front/e0795fbe3c38a56e4b3e.png" alt="" />
                        </div>
                        <div className="home__content__three__box">
                            <p>Xizmatlar</p>
                            <img src="https://statics.dmclk.ru/dc_main_page_front/83c25da59506c01f225a.png" alt="" />
                        </div>
                        <div className="home__content__three__box">
                            <p>Xizmatlar</p>
                            <img src="https://statics.dmclk.ru/dc_main_page_front/49b1b86c77656225dc0f.png" alt="" />
                        </div>
                    </div>
                    {/* <button className='home__content__three_btn'><Link className='home__content__btn'><MdLogin />kirish / ro'yxatdan o`tish</Link></button> */}
                </div>
                <div className="home__content__services">
                    <div className="home__content__header">
                        <h2 className='home__services__title'>Kredit &nbsp; <img width={'30px'} src="https://statics.dmclk.ru/dc_main_page_front/b349f1c6b7358a651331.png" alt="" /></h2>
                    </div>
                    <div className="home__services__columns">
                        <div className="home__services__column">
                            <p>Microqarz</p>
                            <button>от 15.6%</button>
                            <img src="https://statics.dmclk.ru/dc_main_page_front/a762f4ddf3981eb00e6c.png" alt="" />
                        </div>
                        <div className="home__services__column">
                            <p>Господдержка</p>
                            <button>от 8%</button>
                            <img src="https://statics.dmclk.ru/dc_main_page_front/9309b8b3d84066d1cfa2.png" alt="" />
                        </div> <div className="home__services__column">
                            <p>Семейная ипотека</p>
                            <button>от 5%</button>
                            <img src="https://statics.dmclk.ru/dc_main_page_front/26a7077fe74bed4a3a00.png" alt="" />
                        </div> <div className="home__services__column">
                            <p>Ипотека для IT</p>
                            <button>от 5%</button>
                            <img src="https://statics.dmclk.ru/dc_main_page_front/b82b7386e1cf812f3fe9.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}

export default Home;
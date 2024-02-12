import React from 'react';
import { FaUserTie } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { useContext } from 'react';
import { Context } from './BaseContext';
import { FaXmark } from "react-icons/fa6";
import ResponsiveNavbar from './ResponsiveNavbar';
import logo from '../static/img/logo.png'
import Modal from 'react-modal';
import { IoMdSearch } from "react-icons/io";
import SignUp from './SignUp';
import Buy from './Buy';

function Navbar() {
    const { menu, setMenu, modal, setModal, allmenu, setAllMenu } = useContext(Context)
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className="container">
                <div className={`register ${modal ? 'register__block' : ''}`}>
                    <div className="register__container">
                        <SignUp />
                    </div>
                </div>
                <div className={`buy ${allmenu ? 'buy__block' : ''}`}>
                    <div className="buy__container">
                        <Buy />
                    </div>
                </div>
                {/* ---------------------- modal -------------------- */}
                <div className="navbar__top">
                    <div className="navbar__container__left">
                        <button>
                            <Link className='item' onClick={openModal}>
                                <FaLocationDot />
                                O'zbekiston
                            </Link>
                        </button>
                        <button>
                            <Link className='item'>
                                <FaUserTie />
                                Hamkorlar uchun
                            </Link>
                        </button>
                        <button>
                            <Link className='item'>
                                <IoCall />
                                Call markaz
                                <div className={`phone__content`}>
                                    <FaXmark className='phone__content__icon' />
                                    <h3>Получите консулътатцию <br />
                                        по любому вопросу</h3>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis eveniet totam esse quam, necessitatibus illo nostrum, blanditiis at voluptate, temporibus deserunt? Sequi dolore laudantium voluptatum cupiditate, officia est ex.</p>
                                </div>
                            </Link>
                        </button>
                    </div>
                    <div className="navbar__container__right">
                        <button>
                            <Link className='item' to={'/amateurs'}>
                                <IoHeart size={'16px'} />
                            </Link>
                        </button>
                        <button>
                            <Link to={'/advertising'} className='item'>
                                <FaPlusCircle color='#53b375' />
                                Reklama joylashtiring
                            </Link>
                        </button>
                        <button onClick={() => setModal(true)}>
                            <Link className='item'>
                                <MdLogin size={'18px'} />
                                kirish / ro'yxatdan o`tish
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="navbar__bottom">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                    <ul className="navbar__link">
                        <li><Link className='link'>Yashil market</Link></li>
                        <li><Link className='link' onClick={() => setAllMenu(true)}>Ko'chmas mulk</Link></li>
                        <li><Link className='link'>Xizmatlar</Link></li>
                        <li><Link className='link'>Rieltorlar</Link></li>
                        <li><Link className='link'>Mediatsiya</Link></li>
                    </ul>
                    <li style={{listStyle: 'none', width: '400px', textAlign: 'right'}}><Link className='link'>Kredit</Link></li>
                </div>
            </div>
            <div className="container__responsive">
                <div className="container__responsive__left">
                    {!menu ? <IoIosMenu onClick={() => setMenu(true)} size={'28px'} /> : <button className='xmark'><FaXmark onClick={() => setMenu(false)} /></button>}
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="container__responsive__right">
                    <Link style={{ color: '#999' }} to={'/amateurs'}><IoHeart /></Link>
                    <Link to={'/advertising'}><FaPlusCircle color='#53b375' /></Link>
                    <Link to={'/register'}>
                        <MdLogin />
                    </Link>
                </div>
            </div>
            <ResponsiveNavbar />
            <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <div className="modal__container">
                    <div className="modal__header">
                        <h2>Hududni tanlash</h2>
                        <button className='close__modal' onClick={closeModal}><FaXmark /></button>
                    </div>
                    <div className="modal__form">
                        <form>
                            <div className="input">
                                <IoMdSearch className='icon__search' size={'20px'} color={'#999'} />
                                <input type="search" placeholder='Viloyat yoki shahar nomini kirirting' />
                            </div>
                            {/* <div className="form__btns">
                                <input type="button" value={'Andijon viloyati'} />
                                <input type="button" value={'Buxoro viloyati'} />
                                <input type="button" value={'Jizzax viloyati'} />
                                <input type="button" value={'Qoraqalpogiston'} />
                                <input type="button" value={'Qashqadaryo viloyati'} />
                                <input type="button" value={'Navoiy viloyati'} />
                                <input type="button" value={'Namangan viloyati'} />
                                <input type="button" value={'Samarqand viloyati'} />
                                <input type="button" value={'Surxondaryo viloyati'} />
                                <input type="button" value={'Sirdaryo viloyati'} />
                                <input type="button" value={'Toshkent viloyati'} />
                                <input type="button" value={'Fargona viloyati'} />
                                <input type="button" value={'Xorazm viloyati'} />
                            </div> */}
                        </form>
                    </div>
                    <div className="modal__bottom__texts">
                        <input className='btn' type="button" value={'Saqlash'} />
                        <button className='btn' onClick={closeModal}><Link style={{ textDecoration: 'none', color: '#000' }}>Bekor qilish</Link></button>
                    </div>
                </div>
            </Modal>

            {/* sign in modal */}
        </>
    );
}

export default Navbar;
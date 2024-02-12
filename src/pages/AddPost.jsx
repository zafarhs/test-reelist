import React from 'react';
import Layout from '../components/Layout';
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';


function AddPost() {
    return (
        <Layout>
            <div className="add__post__container">
                <div className="advertising__header">
                    <Link to={'/'} className='advertising__header__link'>Asosiy</Link>
                    <RxSlash />
                    <Link className='advertising__header__link'>Reklama joylashtirish</Link>
                </div>
                <h3>E'lon berish</h3>
                <div className="add__post__content">
                    <form className="form__left">
                        <div className="add__post__field">
                            <label>Ko'chmas mulk nomi</label>
                            <input type="text" maxLength={'100'} placeholder="Ko'chmas mulk nomi" />
                        </div>
                        <div className="add__post__field">
                            <label>Kategoriya</label>
                            <input type="text" placeholder="Kategoriya" />
                        </div>
                        <div className="add__post__field">
                            <label>Rasm</label>
                            <input type="text" placeholder="Rasm" />
                        </div>
                        <div className="add__post__field">
                            <label>Tavsifi</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="add__post__field">
                            <label>Narxi</label>
                            <input type="number" placeholder='Narxi' />
                        </div>
                        <div className="add__post__btns">
                            <label>Biznes yoki shaxsiy</label>
                            <div className="add__post__btns">
                                <button>Shaxsiy</button>
                                <button>Biznes</button>
                            </div>
                        </div>
                    </form>
                    <form className="form__right">
                        <legend>Qo'shimcha malumotlar</legend>
                            
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default AddPost;
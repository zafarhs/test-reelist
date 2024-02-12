import React, { useState } from 'react';
import Layout from '../components/Layout';
import { IoHeart } from "react-icons/io5";
import { Link } from 'react-router-dom'
import Posts from '../components/Posts';
import { IoSearch } from "react-icons/io5";

function AllPost() {
    const [views, setViews] = useState(false)

    return (
        <Layout>
            <div className="all__posts__container">
                <div className="all__posts__filter">
                    <form className='posts__filter__form'>
                        <div className="fields__column">
                            <div className="field">
                                <label>Qidirish</label>
                                <input type="search" placeholder='Qidirish' />
                            </div>
                            <div className="field">
                                <label>Kategoriya\turar-noturar\</label>
                                <input type="search" placeholder='Kategoriya' />
                            </div>
                            <div className="field">
                                <label>Viloyat</label>
                                <input type="search" placeholder='Viloyat' />
                            </div>
                            <div className="field">
                                <label>Tuman</label>
                                <input type="search" placeholder='Tuman' />
                            </div>
                            <div className="field">
                                <label>Holati</label>
                                <input type="search" placeholder='Holati' />
                            </div>
                        </div>
                        <div className="fields__button__content">
                            <button className='filter__button'><IoSearch size={'16px'} />Izlash</button>
                        </div>
                    </form>
                </div>
                <div className="all__posts__content">
                    <div className="all_posts">
                        <Posts />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AllPost;
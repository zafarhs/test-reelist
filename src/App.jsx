import React from 'react';
import BaseContext from './components/BaseContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LikePost from './pages/LikePost';
import Announcement from './pages/Announcement';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import AllPost from './pages/AllPost';
import AddPost from './pages/AddPost';
import AddRent from './pages/AddRent';


function App() {
    return (
        <BaseContext>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/amateurs' element={<LikePost/>} />
                    <Route path='/advertising' element={<Announcement/>} />
                    <Route path='/detail' element={<PostDetail/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/allposts' element={<AllPost/>} />
                    <Route path='/add-post' element={<AddPost/>} />
                    <Route path='/add-rent' element={<AddRent/>} />
                </Routes>
            </BrowserRouter>
        </BaseContext>
    );
}

export default App;
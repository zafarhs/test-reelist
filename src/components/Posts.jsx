import React from 'react';
import Post from './Post';

function Posts() {
    return (
        <div className='amateurs__all__columns'>
            <div className="all__post__columns">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Posts;
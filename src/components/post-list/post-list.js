import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                {/* <PostListItem label={item.label} important={item.important} /> */}
                <PostListItem {...itemProps} />
            </li>
        )
    })

    return (
        <div>
            <ul className="app-list list-group">
                {/* <PostListItem label='Going to learn React' important />
                <PostListItem label='That is so good' />
                <PostListItem label='I need a break...' /> */}
                {elements}
            </ul>
        </div>
    );
};

export default PostList;
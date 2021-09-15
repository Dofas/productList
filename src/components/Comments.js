import React from 'react';
// import { useState } from 'react'
import './Comments.css';
// import { useParams} from 'react-router';
// import { useSelector, useDispatch } from "react-redux";

const Comments = () =>{

    // const params = useParams();
    // const post = useSelector(state => state.products.products);
    // const dispatch = useDispatch();

    // const currentComment = post.filter(item => +item.id === +params.id)
 
    // console.log(currentComment)

    // const addComment = () =>{
    //     dispatch()
    // }

    return(
        <div className='commentsItem'>
            <h3>Коментарі</h3>
            <label>Не працює</label>
            <button>Додати коментар</button>
        </div>
    )
}

export default Comments
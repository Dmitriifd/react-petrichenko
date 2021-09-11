import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
    return (
        <div>
            <form className="bottom-panel d-flex">
                <input 
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                 />
                 <button className="btn btn-outline-secondary" type="submit"
                 >Добавить</button>
            </form>
        </div>
    );
};

export default PostAddForm;
import React from 'react';
import ReactDOM  from 'react-dom';
import Example from './Example';
import Home from './Home';

function Test(props){
    return (
        <div className='Container'>
            <h1>テストです</h1>
            <button color='primary' href={`#`}>{props.name}</button>
            {/* Componentから他のComponentを呼び出す */}
            <Example />
        </div>
    );
}

export default Test;
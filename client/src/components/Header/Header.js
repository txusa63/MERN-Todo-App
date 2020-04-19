import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className='heading'>
            <h1>TodoList</h1>
            <Link className='link' to={'/'}>Home</Link>|
            <Link className='link' to={'/about'}>About</Link>
        </header>
    )
}

import React from 'react';
import './styles.css';

import logo from './apple.png';
import network from './network.png';
import search from './search.png';
import list from './list.png';

export default function TopBar() {
    return (
        <div className='topbar-wrapper'>
            <div className='topbar'>
                <ul className="topbar-left">
                    <li className="apple-logo"><img src={logo} width="23" height="23"/></li>
                    <li><strong>Finder</strong></li>
                    <li>File</li>
                    <li>Edit</li>
                    <li>View</li>
                    <li>Go</li>
                    <li>Window</li>
                    <li>Help</li>
                </ul>
                <ul className="topbar-right">
                    <li><img src={network} width="23" height="23"/></li>
                    <li class="topbar-right-text">Tue 1:50 am</li>
                    <li><img src={search} width="23" height="23"/></li>
                    <li><img src={list} width="23" height="23"/></li>
                </ul>
            </div>
        </div>
    );
}
import React from 'react'
import '../App.css';
import { sidebarData } from './sidebarData'



function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo'>
            <h2>Remote Salesfuel</h2>
            </div>
            <ul className='sidebarList'>
                {sidebarData.map((val, key) => {
                    return (
                        <li key={key} className='row'                            
                            onClick={() => { window.location.pathname = val.link }}>
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>

    )
}

export default Sidebar;
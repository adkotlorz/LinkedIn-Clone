import React from 'react';
//CSS Import
import './Sidebar.css';
//Redux
import {useSelector} from 'react-redux';
import {selectUser} from '../store/userSlice';
//MUI Imports
import {Avatar} from '@material-ui/core';


const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="background profile"/>
                <Avatar src={user.photoURL} className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>
                    {user.displayName}
                </h2>
                <h4>
                    {user.email}
                </h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,234</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">1,634</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJS')}
                {recentItem('javascript')}
                {recentItem('software')}
                {recentItem('developer')}
                {recentItem('svelte')}
            </div>
        </div>
    );
}

export default Sidebar;
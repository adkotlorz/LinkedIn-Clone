import React from 'react';
//CSS Import
import './Header.css';
//MUI Imports
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core';

const HeaderOption = ({avatar, Icon, title}) => {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && (
                <Avatar className="headerOption__icon" src={avatar}/>
            )}
            <h3 className="headerOption__title">
                {title}
            </h3>
        </div>
    );
}

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="linkedin logo"
                />
                <div className="header__search">
                    <SearchIcon/>
                    <input/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://avatars.githubusercontent.com/u/74719696?v=4" title="Adam"/>
            </div>
        </div>
    );
}

export default Header;
import React from 'react';
//CSS Import
import './App.css';
//Components Imports
import {Feed, Header, Sidebar} from './components';

const App = () => {
    return (
        <div className="app">
            <Header/>
            {/*    App Body*/}
            <div className="app__body">
                <Sidebar/>
                <Feed/>
                {/* Widgets   */}
            </div>
        </div>
    );
}

export default App;

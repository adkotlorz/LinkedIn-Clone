import React, {useEffect} from 'react';
//CSS Import
import './App.css';
//Redux Hooks
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './store/userSlice';
//FB Hooks
import {auth} from './db/firebase';
//Components Imports
import {Feed, Header, Login, Sidebar} from './components';


const App = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);


    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoURL: userAuth.photoURL,
                }))
            } else {
                dispatch(logout());
            }
        })
    }, [])

    return (
        <div className="app">
            <Header/>
            {!user ? <Login/>
                : (
                    <div className="app__body">
                        <Sidebar/>
                        <Feed/>
                        {/* Widgets   */}
                    </div>
                )}
        </div>
    );
}

export default App;

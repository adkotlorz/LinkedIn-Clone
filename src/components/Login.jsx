import React, {useState} from 'react';
//CSS Import
import './Login.css';
//Redux
import {useDispatch} from 'react-redux';
import {login} from '../store/userSlice';
//Auth Import
import {auth} from '../db/firebase';


const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState();
    const dispatch = useDispatch();

    const registerHandler = () => {
        if (!name) {
            return alert('Please enter a full name.');
        }

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        }));
                    });
            })
            .catch(error => alert(error.message));
    };

    const loginHandler = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileURL: userAuth.user.photoURL,
                }));
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin logo"/>
            <form>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full name (required if registering)"/>
                <input
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    placeholder="Profile picture (optional)"/>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"/>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"/>
                <button type="submit" onClick={loginHandler}>Sign In</button>
            </form>
            <p>Not a member? {' '}
                <span className="login__register" onClick={registerHandler}>
                    Register Now
                </span>
            </p>
        </div>
    );
};

export default Login;

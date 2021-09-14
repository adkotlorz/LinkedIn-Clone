import React, {useEffect, useState} from 'react';
//FB Import
import firebase from 'firebase';
import {db} from '../db/firebase';
//Redux
import {selectUser} from '../store/userSlice';
import {useSelector} from 'react-redux';
//CSS Import
import './Feed.css';
//Deps Import
import FlipMove from 'react-flip-move';
//MUI Imports
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
//Component Import
import {Post} from './index';


export const InputOption = ({Icon, title, color}) => {
    return (
        <div className="inputOption">
            <Icon style={{color: color}}/>
            <h4>{title}</h4>
        </div>
    );
}

const Feed = () => {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )))
            ))
    }, [])

    const sendPostHandler = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: user.photoURL || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('');
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)}/>
                        <button onClick={sendPostHandler} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            <FlipMove>
                {posts.map(({id, data: {name, description, photoURL, message}}) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoURL={photoURL}
                    />
                ))}
            </FlipMove>
        </div>
    );
};

export default Feed;

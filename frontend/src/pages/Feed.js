import React, { Component } from 'react';
import api from '../services/api';
import  "./Feed.css";

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    state ={
        feed: [],
    };
    async componentDidMount(){
        const response = await api.get('post');

        this.setState({ feed: response.data});

    }

    render(){
        return(
            <selection id="{post-list">
                {this.state.feed.map(post =>(
                    <article>
                    <header>
                        <div className= "user-info">
                            <span>{post.author}</span>
                            <span className="place">{post.place}</span>
                        </div>
                        <img src={more} alt="Mais"/>
                    </header>
                    
                    <img src={`http://localhost:3333/files/${post.image}`} alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>{post.like} Curtidas</strong>

                        <p>{post.description}
                            <span>{post.hashtags}</span>
                        </p>
                    </footer>

                </article>
                
            ))}


            </selection>

        );
    }
}

export default Feed;
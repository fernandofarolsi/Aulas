import React, { Component } from 'react';
import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render(){
        return(
            <selection id="post-list">
                <article>
                    <header>
                        <div className= "user-info">
                            <span>Fernando Rodrigues</span>
                            <span className="place">Rolim de Moura</span>
                        </div>
                        <img src={more} alt="Mais"/>
                    </header>
                    
                    <img src="http://localhost:3333/files/D9RIS2OWkAAEC4A.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>90 Curtidas</strong>

                        <p>Um posto muito top
                            <span>#Topzera #ENoisQVoa</span>
                        </p>
                    </footer>

                </article>
                <article>
                    <header>
                        <div className= "user-info">
                            <span>Fernando Rodrigues</span>
                            <span className="place">Rolim de Moura</span>
                        </div>
                        <img src={more} alt="Mais"/>
                    </header>
                    
                    <img src="http://localhost:3333/files/D9RIS2OWkAAEC4A.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>90 Curtidas</strong>

                        <p>Um posto muito top
                            <span>#Topzera #ENoisQVoa</span>
                        </p>
                    </footer>

                </article>
                


            </selection>

        );
    }
}

export default Feed;
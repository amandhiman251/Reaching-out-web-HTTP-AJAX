import React, { Component } from 'react';
//import axios from 'axios';
import Posts from './Posts/Posts';
import './Blog.css';
import {Route, NavLink} from 'react-router-dom';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from './FullPost/FullPost';


class Blog extends Component {
    
    render () {
        return (
            <div className={'Blog'}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            activeClassName="my-active"
                            activeStyle={{
                                textDecoration:'underline',
                                color: 'blue'
                            }}
                            exact to ='/'>Home</NavLink></li>
                            <li><NavLink to = {{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=> <h1>Home</h1>} />
                <Route path="/" render={()=> <h1>Home 1</h1>} /> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
                <Route path='/posts/:id' exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;
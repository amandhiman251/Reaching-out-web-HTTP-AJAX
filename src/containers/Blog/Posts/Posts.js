import React, { Component } from 'react';
import axios from '../../../../src/axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';


class Posts extends Component {
    state ={
        posts: []
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')//added extra sss to make error
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map( post => {
                return {
                ...post,
                author: "Aman"
                }
            });
            this.setState({posts: updatedPosts})
            //console.log(response)
        }).catch(error => {
            //this.setState({error: true})
            console.log(error);
        });
    }

    postSelectedHandler= (id) => {
        //this.props.history.push('/posts/'+id);
        this.props.history.push({pathname:'/posts/'+ id})
    }

    render() {
        let posts = <p>Something went wrong on backend!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
            return (//<Link key={post.id} to={'/posts/' + post.id} >
                <Post  
                key={post.id}
                title ={post.title} 
                author={post.author}
                clicked={()=> this.postSelectedHandler(post.id)}
            />
            //</Link>
            );
        });
    }
        return(
            <div>
            <section className="Posts">
                {posts}
            </section>
            <Route path={this.props.match.url + '/:id'} component={FullPost} />
            </div>
        );
    }
}

export default Posts;
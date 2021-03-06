import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidMount(){
        if(this.props.match.params.id)
        {
            this.loadData();     
        }
    }
    componentDidUpdate(){
        this.loadData();
    }
    deleteDataHandler = () => {
        axios.delete("/posts/" + this.props.match.params.id)
        .then(response => {
            console.log(response);
        });
    }
    loadData =()=> {
        if(!this.state.loadedPost || (this.state.loadedPost.id != this.props.match.params.id ))
        // if(!this.state.loadedPost || (this.state.loadedPost.id !== +this.props.match.params.id ))
        // to check we have to covert PermissionStatus.id into number or not check type simply use != instead !==
        {
            axios.get("/posts/" + this.props.match.params.id)
            .then(response => {
            this.setState({loadedPost: response.data})
            //console.log(response)
            })
        }
    }
    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p style={{textAlign: "center"}}>LOADING...!</p>;  
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteDataHandler} className="Delete">Delete </button>
                    </div>
                </div>
            );
        }
        return post
    }
        
}

export default FullPost;
import React, {useState, useEffect} from ‘react’;
import logo from ‘./logo.svg’;
import ‘./App.css’;
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      post: [],
      title: “”,
      body: “”
    }
  }
  componentDidMount(){
    fetch(“https://jsonplaceholder.typicode.com/posts”)
    .then(resp => resp.json())
    .then(posts => {
      this.setState({
        post: posts
      })
    })
  }
  handleOnChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }
  handleOnSubmit = (e) => {
    e.preventDefault()
    const obj = {
      userId: 1,
      title: this.state.title,
      body: this.state.body
    }
    fetch(“https://jsonplaceholder.typicode.com/posts”, {
      method: “POST”,
      headers: {“Content-Type”: “application/json”, “Accept”: “application/json”},
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(newPost => {
      this.setState({ post: [...this.state.post, newPost] })
    })
  }
  handleEdit = (e) => {
    e.preventDefault()
    let post = this.state.post.find(num => num.id === parseInt(e.target.id))
    const obj = {
      title: “This was edited”,
      userId: post.userId,
      body: post.body
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`,{
      method: “PATCH”,
      headers: {
        “Content-Type”: “application/json”,
        “Accept”: “application/json”
      },
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(newPost => {
      let newPosts = this.state.post.map(obj => {
        if (obj.id === newPost.id){
          return newPost
        } else {
          return obj
        }
      })
      this.setState({post: newPosts})
    })
  }
  handleDelete = (e) => {
      let filtered = this.state.post.filter(post => post.id !== parseInt(e.target.id))
      this.setState({post: filtered})
  }
  render(){
    return (
      <div className=“App”>
        <h1>GET HTTP Request to /Posts</h1>
        <h3>Form</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label>Title</label>
          <input id=“title” type=“text” onChange={this.handleOnChange} />
          <br />
          <label>Body</label>
          <input id=“body” type=“text” onChange={this.handleOnChange} />
          <br />
          <input type=“submit” value=“Submit”></input>
        </form>
        <br /><br /><br />
        {
          this.state.post.map(post => <div> <h2>{post.title}</h2> <button id={post.id} onClick={this.handleEdit}>Edit</button> <button id={post.id} onClick={(e) => this.handleDelete(e)}>Delete ME!</button></div>)
        }
      </div>
    );
  }
}
export default App;
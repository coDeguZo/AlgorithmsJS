import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    users: [],
    username: '',
    posts: [],
    body: '',
    title: '',
    userid: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => this.setState({ users: data }))

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data => this.setState({ posts: data }))
  }

  handleIncrementalClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  handleDeleteButton = (id) => {
    const filtered = this.state.users.filter(user => user.id !== id)
    this.setState({ users: filtered })
  }

  addPost = (e) => {
    e.preventDefault()
    let {body, title, userid, id} = this.state 

    const obj = {
      body: body,
      title: title,
      userId: userid
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({ posts: [...this.state.posts, data] })})
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handlePostDelete = (id) => {
    const filtered = this.state.posts.filter(post => post.id !== id)
    this.setState({ posts: filtered })
  }

  handleUserNameOnChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handleUserNameUpdate = (event) => {
    event.preventDefault()    

    const obj = {
      name: this.state.username
    }
    fetch(`https://jsonplaceholder.typicode.com/users/${1}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render(){
    return (
    <div className="App">
      <h1> Click Counter </h1>
      {/* Create a Clicker that keeps track of how many times the user has clicked the button */}
      <br /><br />
      <h1>Clicks = {this.state.counter}</h1>
      <button onClick={this.handleIncrementalClick}>Click Me!</button>
      {/* Create a List of fake people using JSON Place Holder */}
      <ol className='orderedlist'>
        {this.state.users.map(user => {
          return (
            <div key={user.id}>
            <li>{user.name}</li>
            <button onClick={() => this.handleDeleteButton(user.id)}>Delete Me</button>
            <form onSubmit={this.handleUserNameUpdate}>
              Name: <input onChange={this.handleUserNameOnChange} type='text'/>
              <input type='submit' value='Update Name'/>
            </form>
            </div>
          )
        })}
      </ol>
      <br />
      <h1> Post HTTP Request: Posts </h1>
      <ol className='orderedlist'>
        {this.state.posts.map(post => 
        <div key={post.id}>
          <li>{post.title}</li>
          <button onClick={() => this.handlePostDelete(post.id)}>Delete ME!!!</button>
        </div>
        )}
      </ol>
      <h4>Add Post</h4>

      <form onSubmit={this.addPost}>
        {/* Id: <input id='id' onChange={this.handleOnChange} type="text" /> */}
        Body: <input id='body' onChange={this.handleOnChange} type="text" />
        Title: <input id='title' onChange={this.handleOnChange} type="text"/>
        UserId: <input id='userid' onChange={this.handleOnChange} type="text" />
        <input type='submit' value="Submit" />
      </form>
      <br />
      <br />
      <br />
    </div>
  )}
}

export default App;
import React from 'react';
import TodoList from '../TodoList/TodoList';
import AddItem from '../AddItem/AddItem';
import Header from '../Header/Header';
import About from '../About/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import UpdateItem from '../UpdateItem/UpdateItem';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

// Load data from database
  componentDidMount() {
    axios.get('http://localhost:3001/todos/')
      .then(response => {
        this.setState({
          todos: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  addItem = (title) => {
    if(title !== '') {
        const newTodoItem = {
          task: title,
          completed: false
        }
        console.log("The array before post to DB", this.state.todos)
        axios.post('http://localhost:3001/todos/add', newTodoItem)
          .then(res => console.log(res.data));

        this.setState({
            todos: this.state.todos.concat(newTodoItem)
        })
        console.log("The array after setstate and post to DB", this.state.todos)
    }
    window.location.reload();
  }

  deleteItem = (id) => {
    axios.delete('http://localhost:3001/todos/delete/' + id)
      .then(response => console.log(response.data))

     this.setState({
         todos: this.state.todos.filter(todo => id !== todo._id)
     })
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
          console.log(todo)
        if(todo._id === id) {
          todo.completed = !todo.completed
          console.log(todo)
        }
        return todo;
      })
    })
    console.log(id)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddItem addItem={this.addItem}/>
                <TodoList
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteItem={this.deleteItem}
                />
              </React.Fragment>
            )}
            />
            <Route path='/update/:id' component={UpdateItem} />
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

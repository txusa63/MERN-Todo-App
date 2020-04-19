import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            completed: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/todos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    task: response.data.task,
                    completed: response.data.completed
                })
            })
            .catch((error) => console.log(error));
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const todo = {
            task: this.state.task,
            completed: this.state.completed
        }
        axios.put('http://localhost:3001/todos/update/' + this.props.match.params.id, todo)
            .then(response => console.log(response.data))

        window.location = '/'

    }

    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <div style={{display: 'flex'}}>
                    <p>Edit task: &nbsp;</p>
                    <input
                        type='text'
                        name='task'
                        value={this.state.task}
                        style={{flex: '10', padding: '5px'}}
                        placeholder='Enter the required changes'
                        onChange={this.handleChange}
                    />
                    <button className='btn'>Submit Changes</button>
                </div>
            </form>
        )
    }
}

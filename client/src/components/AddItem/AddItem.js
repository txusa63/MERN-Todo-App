import React, { Component } from 'react';
import './AddItem.css';

export class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className='add-item' style={{display: 'flex'}}>
                <p>Enter task: &nbsp;</p>
                <input
                    type='text'
                    name='title'
                    placeholder='Add todo item'
                    value={this.state.title}
                    style={{flex: '10', padding: '5px'}}
                    onChange={this.onChange}
                />
                <input
                    type='submit'
                    value='Submit'
                    className='btn'
                    style={{flex: 1}}
                />
            </form>
        )
    }
}

export default AddItem

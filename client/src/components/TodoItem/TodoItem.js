import React from 'react'
import {Link} from 'react-router-dom';
import './TodoItem.css'

class TodoItem extends React.Component {
    getStrikeThrough = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {_id, task, completed} = this.props.todo;
        return (
            <div className='item' style={this.getStrikeThrough()}>
                <label>
                    <input
                        type='checkbox'
                        checked={completed}
                        onChange={this.props.markComplete.bind(this, _id)}
                    /> {task}
                </label>
                <button className='button' onClick={this.props.deleteItem.bind(this, _id)} >Delete</button>
                &nbsp;

                <Link to={'/update/' + _id} >
                    <button className='button'>Edit</button>
                </Link>
            </div>
        )
    }
}
export default TodoItem;

import React from 'react'
import TodoItem from '../TodoItem/TodoItem';

export default class TodoList extends React.Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem
                key={todo._id}
                todo={todo}
                markComplete={this.props.markComplete}
                deleteItem={this.props.deleteItem}
            />
        ));
    }
}

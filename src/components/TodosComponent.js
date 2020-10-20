import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosData from '../todoData';

class TodosComponent extends Component {
    constructor() {
        super()
        this.state = {
            isLoaded: false,
            todos: [],
            input: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.props.item.id === id) {
                    return {
                        ...todo,
                        props: {
                            ...todo.props,
                            item: {
                                ...todo.props.item,
                                completed: !todo.props.item.completed
                            }
                        }
                    }
                }
                return todo
            })
            console.log(this.state.todos)
            return {
                todos: updatedTodos
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.input.length > 0) {
            this.setState(prev => {
                let item = {
                    text: this.state.input,
                    completed: false,
                    id: prev.todos.length + 1
                }
                let newTask = <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
                return {todos: [...prev.todos, newTask],
                        input: ""}
            })
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    componentDidMount() {
        setTimeout(() => {
        const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        this.setState({
            ...this.state,
            isLoaded: true,
            todos: todoItems
        })
        },
        3000)
    }

    render() {
        const {isLoaded, todos} = this.state
        if (isLoaded) {
            return (
                <>
                <h3 className="m-3">A task-manager application sketch, not full functionality:</h3>
                <div className="task-form">
                    <form onSubmit={this.handleSubmit} className="form-inline justify-content-center">
                        <label htmlFor="newTask" className="task-input mr-2">New task: </label>
                        <input 
                            id="newTask"
                            value={this.state.input}
                            onChange={this.handleInputChange}
                            name="input"
                            className="form-control mr-2"
                        />
                        <button type="submit" className="btn btn-info">Submit</button>
                    </form>
                    <div className="todo-list">{todos}</div>
                </div>
                </>
            )
        }
        else if(!isLoaded) {
            return (
                <h1 className="p-2">Loading...</h1>
            )
        }
    }
}

export default TodosComponent

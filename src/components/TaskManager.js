import React, { Component } from 'react'

class TaskManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
            submit: "",
            answers: ["first tast", "second task"]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({input: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(state => {
            return {
                submit: this.state.input,
                answers: [...state.answers, this.state.input]
            }
        })
    }

    render() {
        return (
            <div className="p-2">
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.input}
                        onChange={this.handleChange}
                    />
                    <button type="submit">submit</button>
                    <h1>Input: {this.state.input}</h1>
                    <h1>Submit: {this.state.submit}</h1>
                </form>
                <ul>
                    {this.state.answers.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default TaskManager
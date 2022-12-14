import React, { Component } from 'react';

export class InputTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoItem } = this.props;
    e.preventDefault();
    return title.trim()
      ? (addTodoItem(this.state.title), this.setState({ title: '' }))
      : alert('Please write item');
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          className="input-text"
          type="text"
          name="title"
          placeholder="Add Todo..."
          onChange={(e) => this.onInputChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;

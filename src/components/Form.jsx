/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

import { addNews } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: '',
    };

    this.inputData = this.inputData.bind(this);
    this.addNews = this.addNews.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  inputData(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNews(e) {
    e.preventDefault();

    // сложили данные вместе
    const newNews = {
      title: this.state.title,
      content: this.state.content,
    };

    // newNews -> store
    // вызываем экшн addNews на reducer
    this.props.addNews(newNews);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      title: '',
      content: '',
    });
  }

  render() {
    // console.log(this);

    return (
      <form onSubmit={this.addNews}>
        <div className="form-group">
          <input value={this.state.title} name="title" className="form-control" placeholder="News title" onChange={this.inputData} />
        </div>
        <div className="form-group">
          <textarea value={this.state.content} name="content" className="form-control" placeholder="News content" onChange={this.inputData} />
        </div>
        <button type="submit" className="btn btn-success">Add</button>
        <button type="button" className="btn btn-outline-primary" onClick={this.resetForm}>Reset</button>
      </form>
    );
  }
}

// 1 данные
// 2 действия
// connect(1,2)

export default connect(null, { addNews })(Form);

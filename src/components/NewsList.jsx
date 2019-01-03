/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

import {
  deleteNews, cloneNews, importantNews, disLike, increaseLike,
} from '../actions';

function NewsList(props) {
  // console.log(props);

  return (
    <div>
      {props.newsToComponent.map(news => (
        <div className="card mb-2" key={news.id}>
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.content}</p>
            <button type="button" className="btn btn-danger" onClick={() => { props.deleteNews(news.id); }}>Delete</button>
            <button type="button" className="btn btn-warning" onClick={() => { props.cloneNews(news.id); }}>Clone</button>
            <button type="button" className="btn btn-primary" onClick={() => { props.importantNews(news.id); }}>{news.importantNews ? 'Not Important' : 'Important'}</button>
            <button type="button" className="btn btn-dark" onClick={() => { props.disLike(news.id); }}>
              <i className="fas fa-thumbs-up fa-flip-vertical" />
              <p className="card-text">{news.disLikes}</p>
            </button>
            <button type="button" className="btn btn-success" onClick={() => { props.increaseLike(news.id); }}>
              <i className="fas fa-thumbs-up" />
              <p className="card-text">{news.increaseLike}</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// перегоняем необходимые ключи стейта в пропсы нашей компоненты
function mapStateToProps(state) {
  return {
    newsToComponent: state.news,
  };
}

// подключение данных и экшн креэйторов к компоненте
export default connect(mapStateToProps, {
  deleteNews, cloneNews, importantNews, disLike, increaseLike,
})(NewsList);

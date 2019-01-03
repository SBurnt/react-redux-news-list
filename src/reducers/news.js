/* eslint-disable prefer-destructuring */
const initialState = {
  news: [],
  uniqueId: 1,
};

// редюсер - чистая функция (работает только с входящими данными,
// не мутирует данные, а создает новые)
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NEWS': {
      const newPubl = {
        title: action.data.title,
        content: action.data.content,
        id: state.uniqueId,
        disLikes: 0,
        increaseLike: 0,
        importantNews: false,
      };
      return {
        ...state,
        news: [...state.news, newPubl],
        uniqueId: state.uniqueId + 1,
      };
    }
    case 'DELETE_NEWS': {
      return {
        ...state,
        news: state.news.filter(news => news.id !== action.id),
      };
    }

    case 'INCREASE_LIKE': {
      return {
        ...state,
        news: state.news.map((oneNews) => {
          if (oneNews.id === action.id) {
            return {
              ...oneNews,
              increaseLike: oneNews.increaseLike + 1,
            };
          }

          return oneNews;
        }),
      };
    }

    case 'DIS_LIKE': {
      return {
        ...state,
        news: state.news.map((oneNews) => {
          if (oneNews.id === action.id) {
            return {
              ...oneNews,
              disLikes: oneNews.disLikes - 1,
            };
          }

          return oneNews;
        }),
      };
    }

    case 'CLONE_NEWS': {
      let cloneNews = state.news.filter(news => news.id === action.id);
      cloneNews = cloneNews[0];

      return {
        ...state,
        news: [...state.news, {
          title: cloneNews.title,
          content: cloneNews.content,
          id: state.uniqueId,
          disLikes: cloneNews.disLikes,
          increaseLike: cloneNews.increaseLike,
        }],
        uniqueId: state.uniqueId + 1,
      };
    }

    case 'IMPORTANT_NEWS': {
      return {
        ...state,
        news: state.news.map((news) => {
          if (news.id === action.id) {
            return {
              ...news,
              importantNews:
                news.importantNews !== true,
            };
          }
          return news;
        }),
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;

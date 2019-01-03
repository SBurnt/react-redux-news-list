// actions Creators - создает экшн (простой объект)
export const addNews = news => ({ type: 'ADD_NEWS', data: news });
export const deleteNews = id => ({ type: 'DELETE_NEWS', id });
export const cloneNews = id => ({ type: 'CLONE_NEWS', id });
export const importantNews = id => ({ type: 'IMPORTANT_NEWS', id });
export const increaseLike = id => ({ type: 'INCREASE_LIKE', id });
export const disLike = id => ({ type: 'DIS_LIKE', id });

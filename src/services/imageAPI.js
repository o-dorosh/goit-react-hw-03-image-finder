const API_KEY = '21770842-53e4556542a78f410456386ee';

function fetchImages(nextName) {
  return fetch(
    `https://pixabay.com/api/?q=${nextName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('No results'));
  });
}

let api = {
  fetchImages,
};

export default api;

import model from './src/model';

export default (container) => {
  const home = () => {
    container.textContent = 'This is Home page';
  };

  const list = () => {
    for (let movie of model.movies) {
      container.innerHTML += /*HTML*/ `
            <div class="movie" onclick="showMovie(${movie.id})">
                <div>
                    <img src="${movie.imageUrl}" style="height: 120px"/>
                </div>
                <div>
                    <b>${movie.title}</b><br/>
                    ${movie.year}<br/>
                    ${movie.genre}
                </div>
            </div>`;
    }
  };

  const detail = (params) => {
    const { id } = params;
    container.textContent = `This is Detail Page with Id ${id}`;
  };

  const notFound = () => {
    container.textContent = 'Page Not Found!';
  };

  return {
    home,
    list,
    detail,
    notFound,
  };
};

import model from './src/model';

export default (container: HTMLElement) => {
  const home = () => {
    container.innerHTML = 'This is Home page';
  };

  const list = () => {
    let html = '';
    for (let movie of model.movies) {
      html += /*HTML*/ `
      <a href="/list/${movie.id}">
            <div class="movie">
                <div>
                    <img src="${movie.imageUrl}" style="height: 120px"/>
                </div>
                <div>
                    <b>${movie.title}</b><br/>
                    ${movie.year}<br/>
                    ${movie.genre}
                </div>
            </div>
        </a>`;
    }
    container.innerHTML = html;
  };

  const detail = (params) => {
    const { id } = params;
    let movieId = model.movies.find((x) => x.id == id);
    container.innerHTML = /*HTML*/ `
    <h1>${movieId?.title}</h1>
    <div>
        <img src="${movieId?.imageUrl}" style="height: 120px"/>
    </div>
    <div>
        <b></b><br/>
        ${movieId?.year}<br/>
        ${movieId?.genre}
    </div>
    <h3>Rating</h3>
    <h3>Gi din rating: </h3>
    <div style="display: flex; font-size: 200%">
      
    </div>
`;
  };

  const notFound = () => {
    container.innerHTML = 'Page Not Found!';
  };

  return {
    home,
    list,
    detail,
    notFound,
  };
};

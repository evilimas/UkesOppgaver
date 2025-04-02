import model from './model/model';

export default (container: HTMLElement) => {
  const home = () => {
    container.innerHTML = `
        <header>Velkommen til Get Academy!</header><br/>
          <a href="/list"><b>Liste</b></a>
    `;
  };

  const list = () => {
    let html = `
    <img src="/img/logo.png" alt="logo" class="logo"/>
    <header>Velkommen til Get Academy!</header>
    <filter-component></filter-component>
    <your-filter-component></your-filter-component>
    <div class="list-header-container">
      <input type="checkbox"/>
      <p>Navn</p>
      <p>Betalt</p>
      <p>Status</p>

    </div>
    
    `;
    for (let candidate of model.candidates) {
      const candidateJson = JSON.stringify(candidate).replace('"', '"');
      html += /*HTML*/ `
        
            <candidate-list-component candidate='${candidateJson}'></candidate-list-component>
         `;
    }
    container.innerHTML = html;
  };

  const detail = (params) => {
    const { id } = params;
    const candidate = model.candidates.find((x) => x.id == id);
    container.innerHTML = /*HTML*/ `
    <img src="/img/logo.png" alt="logo" class="logo"/>
      <candidate-component candidate='${JSON.stringify(candidate).replace(
        '"',
        '"'
      )}'></candidate-component>
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

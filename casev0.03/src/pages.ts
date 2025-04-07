import state from './model/state';

export default (container: HTMLElement, actions: any) => {
  const home = () => {
    container.innerHTML = `
        <header>Velkommen til Get Academy!</header><br/>
          <a href="/list"><b>Liste</b></a>
    `;
  };

  const list = () => {
    container.innerHTML = /*HTML*/ `
    <list-component></list-component>
    `;
  };

  const detail = (params: any) => {
    const { id } = params;
    const candidate = state.candidateUpdateEvents.find((x) => x.id == id);
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

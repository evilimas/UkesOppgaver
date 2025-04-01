import model from './model/model';

export default (container: HTMLElement) => {
  const home = () => {
    container.innerHTML = `
        <header>Velkommen til Get Academy!</header><br/>
          <a href="/list"><b>Liste</b></a>
    `;
  };

  const list = () => {
    let html = `<header>Velkommen til Get Academy!</header>`;
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
    let studentId = model.students.find((x) => x.id == id);
    container.innerHTML = /*HTML*/ `
    <h1>${studentId?.name}</h1>
    <div>
        <img src="${studentId?.profilBilde}" style="height: 120px"/>
    </div>
    <div>
        <b></b><br/>
        ${studentId?.discordNavn}<br/>
        ${studentId?.kurs}
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

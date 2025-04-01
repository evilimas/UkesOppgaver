import model from './model/model';

export default (container: HTMLElement) => {
  const home = () => {
    container.innerHTML = `
        <header>Velkommen til Get Academy!</header><br/>
          <a href="/list"><b>Liste</b></a>
    `;
  };

  const list = () => {
    let html = '';
    for (let student of model.candidates) {
      html += /*HTML*/ `
      <header>Velkommen til Get Academy!</header>
      <div class="student">
        <div>
        <a href="/list/${student.id}"><b>${student.name} </b></a><br/>
                    ${student.emailPriv}<br/>
                    ${student.telefonNummer}
                </div>
            </div>`;
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

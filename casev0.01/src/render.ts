import model from './model/model';

export default (container: HTMLElement) => {
  const home = () => {
    container.innerHTML = 'This is Home page - go to student list';
  };

  const list = () => {
    let html = '';
    for (let student of model.students) {
      html += /*HTML*/ `
      <a href="/list/${student.id}">
            <div class="student">
                <div>
                    <b>${student.name}</b><br/>
                    ${student.emailPriv}<br/>
                    ${student.telefonNummer}
                </div>
            </div>
        </a>`;
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

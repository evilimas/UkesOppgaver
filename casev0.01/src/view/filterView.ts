import model from '../model/model';
export default (filterName: string) => {
  if (filterName == 'Kurs') {
    return createKursHtml();
  } else if (filterName == 'Dato') {
    return createDatoHtml();
  } else if (filterName == 'Hendelser') {
    return /*HTML*/ `Hello Hendelser`;
  }
};

//   <label>
//     <input type="checkbox" value="FrontEnd" />
//     Front End
//   </label>

function createKursHtml() {
  let html = '';
  for (let kurs of model.course) {
    html += `
        <label>
        <input type="checkbox" value="${kurs.name}" />
        ${kurs.name}
        </label>
        `;
  }
  return html;
}

function createDatoHtml() {
  let currentDate = new Date().toLocaleDateString('sv');
  let html = `<input type="date"/ value='${currentDate}'>`;
  return html;
}

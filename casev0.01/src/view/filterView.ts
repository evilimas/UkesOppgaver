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
  let currentDate = new Date();
  let toDate =  new Date(currentDate.getTime() + (60 * 60 * 24 * 1000));
  let html = /*HTML*/ `
        <label>Fra Dato:
            <input type="date"/ value='${currentDate.toLocaleDateString('sv')}'>
        </label>
        <label>Til Dato:
            <input type="date"/ value='${toDate.toLocaleDateString('sv')}'>
        </label>
        <select name="semester" id="semester">
            <option>Hurtigvalg Semester</option>
        </select>`;
  return html;
}

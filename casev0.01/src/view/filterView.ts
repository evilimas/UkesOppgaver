import model from '../model/model';
export default (filterName: string) => {
  if (filterName == 'Kurs') {
    return createKursHtml();
  } else if (filterName == 'Dato') {
    return createDatoHtml();
  } else if (filterName == 'Hendelser') {
    return createEventHtml();
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
  let toDate = new Date(currentDate.getTime() + 60 * 60 * 24 * 1000);
  let html = /*HTML*/ `
        <label>Fra Dato:
            <input type="date"/ value='${currentDate.toLocaleDateString('sv')}'>
        </label>
        <label>Til Dato:
            <input type="date"/ value='${toDate.toLocaleDateString('sv')}'>
        </label>
        <select name="semester" id="semester">
            <option>Hurtigvalg Semester</option>
            ${getSemesters()}
        </select>`;
  return html;
}

function createEventHtml() {
  const events: {} = {
    Søkt: 'applied',
    Godkjent: 'approved',
    Startet: 'started',
    Avbrutt: 'cancelled',
    Betalt: 'payed',
    Fullført: 'completed',
  };
  let html = '';
  for (let event in events) {
    html += /*HTML*/ `
    <label>
    <input type="checkbox" value="${events[event]}" />
    ${event}
    </label>
    `;
  }
  return html;
}

function getSemesters() {
  let html = '';
  for (let semester of model.semester) {
    html += `<option>${semester.name}</option>`;
  }
  return html;
}

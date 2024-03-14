const place = document.getElementById('spec-date');
const parametros = new URLSearchParams(window.location.search);
const doweek = parametros.get('doweek');
const day = parametros.get('d');
const month = parametros.get('m');
const year = parametros.get('y');
const date = new Date(year, month, day);
const week = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado']
const dayofweek = week[doweek];
const appForm = document.forms['appointment-form'];

const schedule = document.getElementById('schedule-table');

if (doweek == 0) {
  const tBody = document.getElementById('schedule-table');
  tBody.style.display = 'flex';
  tBody.style.flexDirection = 'column';
  schedule.innerHTML = `
    <h3 style="text-align: center;">Horario no disponible</h3>
  `;
}
else {
  if (doweek == 6) {
    for( let i = 0; i < 7; i++ ) {
      let scheduleData = document.createElement('td');
      let divData = document.createElement('div');
      divData.setAttribute('tabindex', '0');
      divData.setAttribute('id', `${i + 8}`);
      divData.innerHTML = `${i + 8}`;
      scheduleData.appendChild(divData);
      schedule.appendChild(scheduleData);
    }
  }
  else {
    for( let i = 0; i < 13; i++ ) {
      let scheduleData = document.createElement('td');
      let divData = document.createElement('div');
      divData.setAttribute('tabindex', '0');
      divData.setAttribute('id', `${i + 8}`);
      divData.innerHTML = `${i + 8}`;
      scheduleData.appendChild(divData);
      schedule.appendChild(scheduleData);
    }
  }
}

let selTime = 0;

function submitForm() {
  console.log(appForm['fname'].value);
  console.log(appForm['lname'].value);
  console.log(appForm['email'].value);
  console.log(selTime);
  const fName = appForm['fname'].value;
  const lName = appForm['lname'].value;
  const emailAddress = appForm['email'].value;
  const selSchedule = selTime;
  const msg = 'Nombres: ' + fName + ' Apellidos: ' + lName + ' Email: ' + emailAddress + ' Horario: ' + selSchedule;
  //alert(msg); 
} 

schedule.addEventListener('click', function (event) {
  if (event.target.id == 'schedule-table') {

    /*Nothing to do if this is true */

  }
  else {
    const elements = schedule.getElementsByTagName('td');
    for(let x = 0; x < elements.length; x++) {
      elements[x].firstChild.style.backgroundColor = 'white';
      elements[x].firstChild.style.color = 'black';
    }
    event.target.style.backgroundColor = '#8900f2';
    event.target.style.color = 'white';
    selTime = event.target.id;
  }
});

place.innerHTML = `
  <div class='date-container'>
    <div>${dayofweek}/</div>
    <div>${day}/</div>
    <div>${month}/</div>
    <div>${year}</div>
  </div>
`;
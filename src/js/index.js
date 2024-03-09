const calendar = document.getElementById('calendar');
const prevButton = document.getElementById('prev');

let today = new Date();
let currentMonth;
let currentYear;

if (currentMonth) {
    currentMonth;
}
else {
    currentMonth = today.getMonth();
}

if (currentYear) {
    currentYear;
}
else {
    currentYear = today.getFullYear();
}

createCalendar(currentYear, currentMonth);

function prev() {
    if (currentMonth == 0) {
        currentYear--;
        currentMonth = 11;
    }
    else {
        currentMonth = currentMonth - 1;
    }
    
    if (today < new Date(currentYear, currentMonth)) {
      prevButton.removeAttribute('disabled');
    }
    else {
      prevButton.setAttribute('disabled', 'true');
    }
    createCalendar(currentYear, currentMonth); 
}

function next() {
    if (currentMonth == 11) {
        currentYear++;
        currentMonth = 0;
    }
    else {
        currentMonth = currentMonth + 1;
    }
    if (today < new Date(currentYear, currentMonth)) {
      prevButton.removeAttribute('disabled');
    }
    else {
      prevButton.setAttribute('disabled', 'true');
    }
    createCalendar(currentYear, currentMonth);
}

function createCalendar(year, month) {
  const date = new Date(year, month, 1);  //This function returns the day of the week which the month start
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = date.getDay();
  
  const months = ['Enero', 
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'];

  calendar.innerHTML = `
    <h2>${months[month]} ${year}</h2>
      <tr>
        <th>Domingo</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miércoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sábado</th>
      </tr>
  `;

  let day = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayIndex) {
        const cell = document.createElement('td');
        row.appendChild(cell);
      } 
      else if (day > daysInMonth) {
        break;
      } 
      else {
        const cell = document.createElement('td');
        cell.addEventListener('click', function () {
          const day = this.innerHTML;
          const datos = { doweek: j, d: day, m: months[month], y: year };
          const queryString = new URLSearchParams(datos).toString();
          window.location.href = `./src/pages/date.html?${queryString}`;
        })
        cell.textContent = day;
        row.appendChild(cell);
        day++;
      }
    }
    calendar.appendChild(row);
  }
}


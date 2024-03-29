const calendar = document.getElementById('calendar');
const prevButton = document.getElementById('prev');
const currentMonthYear = document.getElementById('currentMY-container');

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
      prevButton.style.opacity = 1;
      prevButton.removeAttribute('disabled');
    }
    else {
      prevButton.style.opacity = 0.5;
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
      prevButton.style.opacity = 1;
      prevButton.removeAttribute('disabled');
    }
    else {
      prevButton.style.opacity = 0.5;
      prevButton.setAttribute('disabled', 'true');
    }
    createCalendar(currentYear, currentMonth);
}

function createCalendar(year, month) {
  const date = new Date(year, month, 1);  //This function returns the day of the week which the month start
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = date.getDay();
  const today = new Date();
  
  const months = [
    'Enero', 
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

  currentMonthYear.innerHTML = `
    <h2>${months[month]} ${year}</h2>
  `
  calendar.innerHTML = `
      <tr>
        <th>Dom</th>
        <th>Lun</th>
        <th>Mar</th>
        <th>Mie</th>
        <th>Jue</th>
        <th>Vie</th>
        <th>Sab</th>
      </tr>
  `;

  let day = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayIndex) {
        const cell = document.createElement('td');
        cell.style.opacity = 0.5;
        row.appendChild(cell);
      } 
      else if (day > daysInMonth) {
        break;
      } 
      else {
        const cell = document.createElement('td');
        cell.textContent = day;
        row.appendChild(cell);
        if (today.getDate() == day && today.getMonth() == month) {
          cell.style.color = 'white';
          cell.style.backgroundColor = '#f20089';
        }
        else if (day < today.getDate() && today.getMonth() == month){
          cell.style.opacity = 0.5;
        }
        else {
          cell.addEventListener('click', function () {
            const day = this.innerHTML;
            const datos = { doweek: j, d: day, m: months[month], y: year };
            const queryString = new URLSearchParams(datos).toString();
            window.location.href = `./src/pages/date.html?${queryString}`;
          })
        }
        day++;
      }
    }
    calendar.appendChild(row);
  }
}
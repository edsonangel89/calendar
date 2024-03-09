const place = document.getElementById('spec-date');
const parametros = new URLSearchParams(window.location.search);
const doweek = parametros.get('doweek');
const day = parametros.get('d');
const month = parametros.get('m');
const year = parametros.get('y');
const date = new Date(year, month, day);
const week = ['Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado']
const dayofweek = week[doweek];

place.innerHTML = `
  <div class='date-container'>
    <div>${dayofweek}/</div>
    <div>${day}/</div>
    <div>${month}/</div>
    <div>${year}</div>
  </div>
`;
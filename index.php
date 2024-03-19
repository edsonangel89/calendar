<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calendario</title>
  <link rel="stylesheet" href="./src/css/styles.css">
</head>
<body>
  <div class="main-container">
    <div id="currentMY-container"></div>
    <div class="calendar-container">
      <table id="calendar"></table>
    </div>
    <div class="btns-container">
      <button id="prev" onclick="prev()" class="choosebtn" disabled>Anterior</button>
      <button id="next" onclick="next()" class="choosebtn">Siguiente</button>
    </div>
  </div>
  <script src="./src/js/index.js"></script>
</body>
</html>

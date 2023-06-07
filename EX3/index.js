function quydoitien() {
  let USD = document.getElementById("USD").value;
  let Quydoi = 0;
  Quydoi = parseFloat(USD) * 23500;
  document.getElementById("output2").value = Quydoi;
}

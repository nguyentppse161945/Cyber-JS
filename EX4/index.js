function funtion3() {
  let dai = document.getElementById("dai").value;
  let rong = document.getElementById("rong").value;
  let chuvi = 0;
  chuvi = (parseFloat(dai) + parseFloat(rong)) * 2;
  document.getElementById("cv").value = chuvi;
  let dientich = 0;
  dientich = parseFloat(dai) * parseFloat(rong);
  document.getElementById("dt").value = dientich;
}

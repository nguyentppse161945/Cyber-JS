function tinhtien() {
  let luong = document.getElementById("luong").value;
  let ngay = document.getElementById("ngay").value;
  let tongluong = 0;
  tongluong = parseInt(luong) * parseInt(ngay);
  document.getElementById("output").value = tongluong;
}

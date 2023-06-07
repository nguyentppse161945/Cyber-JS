function funtion4() {
  let nb = document.getElementById("nb").value;
  let tong = 0;
  tong += nb % 10;
  nb = Math.floor(nb / 10);
  tong += nb;
  document.getElementById("output").value = tong;
}

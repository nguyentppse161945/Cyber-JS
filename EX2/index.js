function funtion1() {
  let nb1 = document.getElementById("nb1").value;
  let nb2 = document.getElementById("nb2").value;
  let nb3 = document.getElementById("nb3").value;
  let nb4 = document.getElementById("nb4").value;
  let nb5 = document.getElementById("nb5").value;
  let trungbinhcong = 0;
  trungbinhcong =
    (parseFloat(nb1) +
      parseFloat(nb2) +
      parseFloat(nb3) +
      parseFloat(nb4) +
      parseFloat(nb5)) /
    5;
  document.getElementById("output1").value = trungbinhcong;
}

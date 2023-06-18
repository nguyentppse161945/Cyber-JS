function ex1() {
  let point = +document.getElementById("inputScore1").value;
  let area = +document.getElementById("selLocation").value;
  let obj = +document.getElementById("selUser").value;
  let st = +document.getElementById("inputScore2").value;
  let nd = +document.getElementById("inputScore3").value;
  let rd = +document.getElementById("inputScore4").value;
  let sum = 0;

  if (st === 0 || nd === 0 || rd === 0) {
    document.getElementById("txtResult").innerHTML = "Bạn đã không đậu do có một môn điểm liệt";
  } else if (area === "x" || obj === 0) {
    sum = st + nd + rd;
    if (sum >= point) {
      document.getElementById("txtResult").innerHTML = "Tổng điểm: " + sum + " Chúc mừng, bạn đã đậu";
    } else {
      document.getElementById("txtResult").innerHTML = "Tổng điểm: " + sum + " Chia buồn, bạn đã không đậu";
    }
  } else if (area === "x" && obj !== 0) {
    sum = st + nd + rd + obj ;
    if (sum >= point) {
      document.getElementById("txtResult").innerHTML = "Tổng điểm: " + sum + " Chúc mừng, bạn đã đậu";
    } else {
      document.getElementById("txtResult").innerHTML = "Tổng điểm: " + sum + " Chia buồn, bạn đã không đậu";
    }
  }
  else if (area !== "x" && obj === 0) {
    sum = st + nd + rd +area;
    if (sum >= point) {
      document.getElementById("txtResult").innerHTML = "Tổng điểm: " + sum + " Chúc mừng, bạn đã đậu";
    } else {
      document.getElementById("txtResult").innerHTML = "Tổng điểm: " + sum + " Chia buồn, bạn đã không đậu";
    }
  }else {
    sum = st + nd + rd + obj + area;
    if (sum >= point) {
      document.getElementById("txtResult").innerHTML = "Tổng điểm: " + sum + " Chúc mừng, bạn đã đậu";
    } else {
      document.getElementById("txtResult").innerHTML = "Tổng điểm: " + sum + " Chia buồn, bạn đã không đậu";
    }
  }
}

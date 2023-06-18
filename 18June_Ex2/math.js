function calcu() {
  let kw = +document.getElementById("kw").value;
  let name = document.getElementById("name").value;
  let sum = pay(kw, 500, 650, 850, 1100, 1300);
  display(sum);
}

function pay(kw, p1, p2, p3, p4, p5) {
  let sum = 0;
  if (kw <= 50) {
    sum += p1 * kw;
  } else if (kw < 100) {
    sum += p1 * 50 + (kw - 50) * p2;
  } else if (kw < 200) {
    sum += p1 * 50 + p2 * 50 + (kw - 100) * p3;
  } else if (kw < 350) {
    sum += p1 * 50 + 50 * p2 + 100 * p3 + (kw - 200) * p4;
  } else {
    sum += p1 * 50 + 50 * p2 + 100 * p3 + 150 * p4 + (kw - 350) * p5;
  }
  return sum;
}

function display(sum) {
  document.getElementById("txtElecBill").innerHTML =
    "Tiền điện của bạn là: $" + sum;
}

document.getElementById("btnElecBill").addEventListener("click", calcu);
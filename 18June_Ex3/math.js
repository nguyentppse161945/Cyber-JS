function calcu() {
  let name = document.getElementById("name").value;
  let salary = +document.getElementById("salary").value;
  let number = +document.getElementById("number").value;
  let total = salary - 4000000 - (number * 1600000);
  let sum = pay(total, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35);
  display(sum);
}

function pay(total, p1, p2, p3, p4, p5, p6, p7) {
  let salary = +document.getElementById("salary").value;
  let sum = 0;
  if (salary<= 60000000) {
    sum += total * p1;
  } else if (60000000<total < 120000000) {
    sum += 60000000 * p1 +(total-60000000 ) * p2;
  } else if (total < 210000000) {
    sum +=
      60000000 * p1 + 60000000 * p2 + (total - 120000000) * p3;
  } else if (total < 384000000) {
    sum +=
      60000000 * p1 +
      60000000 * p2 +
      90000000 * p3 +
      (total - 210000000) * p4;
  } else if (total < 624000000) {
    sum +=
      60000000 * p1 +
      60000000 * p2 +
      90000000 * p3 +
      174000000 * p4 +
      (total - 384000000) * p5;
  } else if (total < 960000000) {
    sum +=
      60000000 * p1 +
      60000000 * p2 +
      90000000 * p3 +
      174000000 * p4 +
      240000000 * p5 +
      (total - 624000000) * p6;
  } else {
    sum +=
      60000000 * p1 +
      60000000 * p2 +
      90000000 * p3 +
      174000000 * p4 +
      240000000 * p5 +
      336000000 * p6 +
      (total - 960000000) * p7;
  }
  return sum;
}
function display(sum) {
  document.getElementById("output").innerHTML = sum;
}

function display(sum) {
  document.getElementById("output").innerHTML = sum;
}

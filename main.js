function prevent_letter() {
  if (event.which >= 65 && event.which <= 90) event.preventDefault();
}
function bmiMeter(heightInp, weightInp) {
  heightInp = parseFloat(document.getElementById("heightInp").value);
  console.log(document.getElementById("heightInp").value);
  console.log(typeof heightInp);
  weightInp = parseFloat(document.getElementById("weightInp").value);
  console.log(typeof weightInp);

  let resBmi = document.getElementById("resBmi");

  resBmi.innerHTML = parseFloat(weightInp / (heightInp**2) );
  resBmi.style.backgroundColor = "white";
  console.log(typeof resBmi.innerHTML);
}

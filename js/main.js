const $weight = document.querySelector('[data-js="weight"]');
const $age = document.querySelector('[data-js="age"]');
const $height = document.querySelector('[data-js="height"]');
const $gender = document.querySelectorAll('input[name="gender"]');
const $form = document.querySelector('[data-js="form-calculator"]');
const $level = document.querySelector('[data-js="level"]');
const $btnForm = document.querySelector('[data-js="btn-form"]');
const $btnToBack = document.querySelector('[data-js="btn-to-back"]');
const $metabolismo = document.querySelector('[data-js="metabolismo"]');
const $keepWeight = document.querySelector('[data-js="keep-weight"]');
const $loseWeigth = document.querySelector('[data-js="lose-weigth"]');
const $gainWeight = document.querySelector('[data-js="gain-weight"]');

$form.addEventListener("submit", app, false);
$btnToBack.addEventListener("submit", backToForm, false);

function app(e) {
  e.preventDefault();
  $metabolismo.value = calculatorTbm(getRadioValue());
  $keepWeight.value = keepWeight();
  $loseWeigth.value = loseWeigth();
  $gainWeight.value = gainWeight();
  document.querySelector("#togle").classList.add("disable");
  document.querySelector("#togle-result").classList.remove("disable");
}

function backToForm(e) {
  e.preventDefault();
  console.log("ola");
  document.querySelector("#togle").classList.remove("disable");
  document.querySelector("#togle-result").classList.add("disable");
}

function getRadioValue() {
  for (var i = 0, l = $gender.length; i < l; i++) {
    if ($gender[i].checked) {
      return $gender[i].value;
    }
  }
}

function calculatorTbm(genderValue) {
  if (genderValue === "man") {
    return Math.round(
      66 + 13.7 * $weight.value + 5 * $height.value - 6.8 * $age.value
    );
  }
  return Math.round(
    655 + 9.6 * $weight.value + 1.8 * $height.value - 4.7 * $age.value
  );
}

const activityLevel = {
  sedentario: 1.2,
  leve: 1.375,
  moderado: 1.55,
  pesado: 1.725,
};

function keepWeight() {
  return Math.ceil(activityLevel[$level.value] * $metabolismo.value);
}

function loseWeigth() {
  return Math.round(Number($keepWeight.value) - 0.15 * $keepWeight.value);
}

function gainWeight() {
  return Math.round(Number($keepWeight.value) + 0.15 * $keepWeight.value);
}

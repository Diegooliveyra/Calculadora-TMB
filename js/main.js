let $weight = document.querySelector('[data-js="weight"]');
let $age = document.querySelector('[data-js="age"]');
let $height = document.querySelector('[data-js="height"]');
let $gender = document.querySelector('[data-js="gender"]');
let $form = document.querySelector('[data-js="form-calculator"]');
let $level = document.querySelector('[data-js="level"]');
let $btnForm = document.querySelector('[data-js="btn-form"]')

$form.addEventListener('submit', function(e){
  e.preventDefault();
},false)
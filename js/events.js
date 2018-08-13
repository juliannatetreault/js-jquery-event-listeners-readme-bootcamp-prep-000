function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function () {
    
  });
}

function pressIt() {
  $('').on('keydown', function() {
    
  });
}

function submitIt() {
  $('').on('submit', function() {
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function(){

getIt();

frameIt();

pressIt();

submitIt();

});

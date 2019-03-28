$(document).ready(function() {
    var age = parseInt(prompt("How old are you"));
    console.log(age);
    console.log(typeof age);

    if (age >= 18) {
      $('.over18').show();

      }  else {
        $('.under18').show();
      }

    });

$(document).ready(function() {
    // var age = parseInt(prompt("How old are you"));
    // console.log(age);
    // console.log(typeof age);
    //
    // if (age >= 18) {
    //   $('.over18').show();
    //
    //   }  else {
    //     $('.under18').show();
    //   }
    // var height = parseInt(prompt("Enter your Height"));
    // if (height <24) {
    //   $('#shortest').show();
    // }
    // else if (height <48) {
    //   $('#short').show();
    // } else if (height <120){
    //   $('#tall').show();
    // }
    // else {
    //   alert("You're too tall to ride our stuff");
    // }

    var height = parseInt(prompt("Enter your Height"));

    if (height <24) {
      $('#shortest').find("h2").addClass("starlight");
    } else if (height < 48) {
      $('#short').find("h2").addClass("starlight2");
    } else {
      $('#tall').find("h2").addClass("starlight");
    }
    console.log("have height");

    $('body').find('.row').show();



    // if (height <24) {
    //   $('#shortest').show();
    // }
    // else if (height <48) {
    //   $('#short').show();
    // } else if (height <120){
    //   $('#tall').show();
    // }
    // else {
    //   alert("You're too tall to ride our stuff");
    // }





    });

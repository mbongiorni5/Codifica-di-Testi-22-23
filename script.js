$(document).ready(function () { //Codice per il funzionamento dei pulsanti
  click1 = 0; 
  click2 = 0; 
  click3 = 0; 
  click4 = 0; 
  click5 = 0; 



  function control(click, vettore, color) {
    if (click % 2 == 1) {
      for (i = 0; i < vettore.length; i++) {
        vettore[i].style.background = color;
      }
    }

    if (click % 2 == 0) {
      for (i = 0; i < vettore.length; i++) {
        vettore[i].style.background = "none";
      }
    }
  }

  $("reg").hide(); //Normalizzazioni con <orig> e <reg> 
  $("#reg").on("click", function () {
    click1 += 1;
    $("reg").show();
    vect = $(".reg");
    if (click1 % 2 == 1) {
      $("orig").hide();
      $("reg").show();
    }
    if (click1 % 2 == 0) {
      $("orig").show();
      $("reg").hide();
    }
    control(click1, vect, "#3399ff");
  });

  $("corr").hide(); // Correzioni con <sic> e <corr> 
  $("#corr").on("click", function () {
    click2 += 1;
    $("corr").show();
    vect = $(".corr");
    if (click2 % 2 == 1) {
      $("sic").hide();
      $("corr").show();
    }
    if (click2 % 2 == 0) {
      $("sic").show();
      $("corr").hide();
    }
    control(click2, vect, "#00ff00");
  });

  
  $("#supplied").on("click", function () { //Aggiunte con <supplied>
    click3 += 1;
    vect = $(".supplied");
    control(click3, vect, "#9933ff");
  });

  
  $(".expan").hide(); //Abbreviazioni con <expan> e <abbr>

  $("#abbreviazioni").on("click", function () {
    click4 += 1;

    if (click4 % 2 == 1) {
      $(".expan").show();
      $(".abbr").hide(); 
    } else {
      $(".expan").hide();
      $(".abbr").show(); 
    }
  });



  $('#abbreviazioni').click(function () {
    if ($(this).prop("checked") == true) {
      abbreviazionis = $(".abbr");

      for (i = 0; i <= abbreviazionis.length; i++) {
        abbreviazionis[i].style.background = "#ffff00";
      }
    } else if ($(this).prop("checked") == false) {
      for (i = 0; i <= abbreviazionis.length; i++) {
        abbreviazionis[i].style.background = "none";
      }
    }
  }); 


  $("del").hide(); //Cancellature con <del>
    $(".del").hide();
  

    $("#del").on("click", () => {
      click5 += 1;
      

      if (click5 % 2 == 1) {
        $("del").show();
        $(".del").show();
        $(".del").css("background", "#ff0000");
        

  }
      if (click5 % 2 == 0) {
        $("del").hide();
        $(".del").hide();
      }

    });
});

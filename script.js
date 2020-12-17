document.addEventListener("DOMContentLoaded", function () {
  /* ---- Initialisation ----*/
  var ecran = document.querySelector("#ecran");
  //
  var btn_red = document.querySelector("#red");
  var btn_blue = document.querySelector("#blue");
  var btn_green = document.querySelector("#green");
  //
  var btn_toogle = document.querySelector("#toggle");
  var flag_toggle_black = false;
  //
  var btn_rainbow = document.querySelector("#rainbow");
  var cursor_rainbow = 0;
  const array_rainbow = ['red', 'orange', 'blue', 'turquoise', 'violet'];
  //
var btn_hello = document.querySelector('#hello');
var btn_custom = document.querySelector('#custom');


  /* ---- Function --- */
  function ecran_color(color) {
    ecran.classList = color;
  }

  /* ---- Event ---- */
  btn_red.addEventListener("click", function () {
    ecran_color("red");
  });
  btn_blue.addEventListener("click", function () {
    ecran_color("blue");
  });
  btn_green.addEventListener("click", function () {
    ecran_color("green");
  });
  btn_toogle.addEventListener("click", function () {
    if (flag_toggle_black) {
        ecran_color("black");
    } else {
        ecran_color("white");
    }
    flag_toggle_black = !flag_toggle_black;
  });
  btn_rainbow.addEventListener("click", function () {
      console.log(cursor_rainbow, array_rainbow[cursor_rainbow])
        ecran_color(array_rainbow[cursor_rainbow]); 
        cursor_rainbow = (cursor_rainbow + 1)%array_rainbow.length; 
  });
  
  btn_hello.addEventListener('click', function(){
      ecran.textContent = "Hello"
  })

  btn_custom.addEventListener('click', function(){
      let input_text = document.querySelector('#custom_text');
      ecran.textContent = input_text.value;
  })
});

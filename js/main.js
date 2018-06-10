


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './plugins.js';
import './functions.js';
import '../css/main.css';
import '../css/normalize.css';
import '../assets/sass/main.sass';

  //Menu slider
$(function(){
  function SliderItem(image, preview1, preview2, preview3, header1, header2, caption, time, style){
    this.image = image;
    this.preview1 = preview1;
    this.preview2 = preview2;
    this.preview3 = preview3;
    this.header1 = header1;
    this.header2 = header2;
    this.caption = caption;
    this.time = time;
    this.style = style;
  }
  var food0 = new SliderItem(
    "img/food0.png",
    "img/food11.png",
    "img/food22.png",
    "img/food33.png",
    'Tasty pancakes',
    'season favourite',
    'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.',
    40,
    "'margin-left', '-77.5%'"
  );

  var food1 = new SliderItem(
    "img/food1.png",
    "img/food22.png",
    "img/food33.png",
    "img/food00.png",
    'Tasty food 1',
    'winter favourite',
    'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.',
    30,
    "'margin-left', '-80%'"
  );

  var food2 = new SliderItem(
    "img/food2.png",
    "img/food33.png",
    "img/food00.png",
    "img/food11.png",
    'Tasty food 2',
    'spring favourite',
    'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.',
    45,
    '"margin-left", "-5%"'
    );

  var food3 = new SliderItem(
    "img/food3.png",
    "img/food00.png",
    "img/food11.png",
    "img/food22.png",
    'Tasty food 3',
    'summer favourite',
    'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.',
    15,
    "'margin-left', '-5%'"
  );
    

  var i=0;
  var timer;
  var sliderInt = 8000;
  timer = setInterval(function(){
    sliderLoop();
  }, sliderInt);

  $("a#left").click(function(){
    clearInterval(timer);
    if(i<3){
      i++;
    }else{
      i=0;
    }
    slider();
    timer = setInterval(function(){
      sliderLoop();
    }, sliderInt);
  });
  $("a#right").click(function(){
    sliderLoop();
  });
  
  //Star ratings
var j = 1;
var rating = [];
var starType = "star"
  starGen();
  $("#rating img").click(function(){
    $(this).attr('src', 'img/star-active.png')
    $(this).prevAll().attr('src', 'img/star-active.png')
  })
  $("#rating img").mouseenter(function(){
    $(this).attr('src', 'img/star-active.png')
    $(this).prevAll().attr('src', 'img/star-active.png')
    $(this).nextAll().attr('src', 'img/star.png')
  })




function slider(){
  var foodNum = "food" + i
  $("#food img").attr("src",eval(foodNum).image);
  // $("#food img").css(eval(foodNum).style);
  $("#first img").attr("src",eval(foodNum).preview1);
  $("#second img").attr("src",eval(foodNum).preview2);
  $("#third img").attr("src",eval(foodNum).preview3);
  $("#ready h2").text(eval(foodNum).time);
  $("#cap h2").text(eval(foodNum).header1);
  $("#cap h5").text(eval(foodNum).header2);
  $("#cap p").text(eval(foodNum).caption);
}
function sliderLoop(){
  if(i<3){
    i++;
  }else{
    i=0;
  }
  slider();
}

function starGen(){
  for(j; j<6; j++){
    var img = '<img id="'+j+'" src="img/'+starType+'.png" alt="">'
    rating.push(img);
  }
  $.each(rating, function(index, value){
    $("#rating").append(value);
  })
}

});
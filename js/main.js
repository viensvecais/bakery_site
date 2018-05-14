


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
  function SliderItem(name, image, preview1, preview2, preview3, header1, header2, caption, time){
    this.name = name
    this.image = image;
    this.preview1 = preview1;
    this.preview2 = preview2;
    this.preview3 = preview3;
    this.header1 = header1;
    this.header2 = header2;
    this.caption = caption;
    this.time = time;
  }
  var imgNames = ['food0', 'food1', 'food2', 'food3'];
  $.each(imgNames, function(index,value) {
    var objects = [];
    objects[index] = new SliderItem(value, '<img src="img/slider-item/food'+index+'.png" alt="">', '<img src="img/slider-item/food'+index+1+'.png" alt="">', '<img src="img/slider-item/food'+index+2+'.png" alt="">' );
    
    console.log(objects);
    
  });
    // var food0 = new SliderItem(
    //   '<img src="img/slider-item/food0.png" alt="">',
    //   '<img src="img/slider-item/food00.png" alt="">',
    //   'Tasty pancakes',
    //   'season favourite',
    //   'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.',
    //   40);
});
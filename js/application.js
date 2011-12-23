$(document).ready(function(){
  changeInsult();

  window.setInterval(changeInsult, 5000);

  function changeInsult(f){
  $('#insult').fadeIn(2500);
  $.getJSON("data/insults.json",function(json){
   col1len = json['column1'].length;
   col2len = json['column2'].length;
   col3len = json['column3'].length;
   var phrase = [json['column1'][Math.floor(Math.random()*col1len)],
                 json['column2'][Math.floor(Math.random()*col2len)],
                 json['column3'][Math.floor(Math.random()*col3len)]];
   
    $('#insult').html("<h1>Thou " + phrase.join(" ") + "!</h1>");
   $('#insult').fadeOut(2500);
  });}


 });

import './styles.css';
import { playGame } from './playGame';
import { winCheck } from './winCheck';
// import { userSequence } from './userSequence';

var level = 5;
var userArray = [];

var newGame = playGame(level);
console.log(newGame.sequence);

// var win = winCheck(newGame.sequence, newGame.sequence);
// if (win === 'true') {
//   level += 3;
//   newGame = playGame(level);
// }

$(document).ready(function() {
  $(".selectButton").click(function() {
    // var clickedColor = $(this).find(".selectButton").data("value");
    var clickedColor = ($(this).attr('id'));
    // userSequence(clickedColor)
    userArray.push(clickedColor)
    console.log(userArray);
    var win = winCheck(userArray, newGame.sequence);
    if (win === 'true') {
      console.log('win');
    }
  });
});

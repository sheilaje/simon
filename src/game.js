import { colorSequence } from './colorSequence';
import { changeColor } from './changeColor';

export function Game(level) {
  this.status = 'incomplete';
  this.level = level;
  var sequence = [];
  var counter = 0;
  var color = colorSequence(this.level);
  sequence.push(color);
  this.sequence = sequence;

  var looper = setInterval(function(){
    if (counter > level)
    {
      clearInterval(looper);
      var currentColor = document.getElementsByClassName('colorbox');
      currentColor[0].style.backgroundColor = 'rgba(255, 0, 0, 0)';
      this.status = 'done';
      return sequence;
    } else {
      changeColor(color[counter]);
      counter++;


    }

  }, 500);


}

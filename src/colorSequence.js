export function colorSequence(number) {
  var colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
  var sequence = [];
  var range = [...Array(number).keys()];
  range.forEach(function(number) {
    var randomNumber = Math.floor(Math.random() * 5);
    sequence.push(colors[randomNumber]);
    return number;
  });
  return sequence;
}

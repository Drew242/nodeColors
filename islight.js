var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var islight = function(r, g, b) {
  if ((0.2126*r + 0.7152*g + 0.0722*b) > 155 ) {
    return 'light';
  } else {
    return 'dark';
  }
}

console.log(islight(r, g, b));

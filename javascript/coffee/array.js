// Generated by CoffeeScript 1.6.3
(function() {
  var n, o, result;

  n = [1, 2, 3, 3, 3, 2, 2];

  result = n.map(function(e, i, o) {
    return e + 2;
  });

  console.log(result);

  n = [1, 2, 3, 3, 3, 2, 2];

  n.forEach(function(e, i, o) {
    return console.log(e + 2);
  });

  console.log('is true?', n.every(function(e, i, o) {
    return typeof e === 'number';
  }));

  n = [1, 2, 3, 3, 3, 2, 2];

  o = n.filter(function(e, i, o) {
    return e === 2;
  });

  console.log(o);

  console.log(Array.isArray(n));

  result = n.reduce(function(previous, current) {
    return previous + current;
  });

  console.log(result);

}).call(this);
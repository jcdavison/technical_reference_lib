// Generated by CoffeeScript 1.6.3
(function() {
  var people, person;

  person = "john";

  console.log(person.charCodeAt(1));

  console.log(person.concat(person));

  console.log(person.match(/jo/));

  console.log(person.match(/jo/)[0]);

  people = 'john-abby-mike-mary';

  console.log(people.split('-'));

  console.log(people.anchor(people));

}).call(this);
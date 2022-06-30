var H = (function () {
  function User(name) {
    this.name = name;
  }

  var m = function () {
    return "Hello " + this.name;
  };

  User.prototype.doGreeting = m;

  return User;
})();

var j = new H("Uncle Bob");

console.log(j);
console.log(j.doGreeting());
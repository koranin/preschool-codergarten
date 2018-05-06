console.log((function () {
  this.a = 1;
}).prototype.a)



/*

console.log(this === global)



const f = function(cb) {
  let b = 2;
  cb();
};

const A = function() {
  this.a = 1;
  let b = 1;
  f(function () {
    a; //console.log(this.a);
    b;
  });

  this.getA = function () {
    return this.a;
  }
};

const i = new A();
console.log(i.getA());
//i.prototype.a;
*/
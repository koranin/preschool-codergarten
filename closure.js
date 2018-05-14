/*console.log((function () {
  this.a = 1;
}).prototype.a);*/

let a = 1;

let f = function () { console.log('one', a); }

function closure() {
  let a = 2;
  setTimeout(
    function () { console.log('two', a); },
    1000
  );
  setTimeout(f, 1000);
  console.log('complete');
};

closure();

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

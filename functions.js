const o = {
  a: 1,
  getA() {
    return this.a;
  }
}

let result;

result = o.getA() // the function gets invoke while its side obj

let fn = o.getA;

result = fn() // the function gets invoked while its at global scope
result;

const obj2 = {
  a: 2,
  getA2: fn
};

result = obj2.getA2() // the function gets invoked 
result

fn = obj.getA.bind(obj)
result = fn()
result

fn = obj.getA.bind(obj2)
result = fn()
result
result = obj.getA()
result

fn = obj.getA.bind({ a: 3 })
result = fn()
result

//let a = 4
//this.a = 4;
fn = obj.getA
result = fn()
result
a;
console.log(this.a);
(function () {
  a;
  console.log(this.a);
})()

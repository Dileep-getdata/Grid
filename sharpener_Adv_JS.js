let student={age:20};
let addAgePlus=function(a,c){
	return this.age+a+c;
};

let b=[5,2];
// call--functionname.call(obj,arg1,arg2)
console.log(addAgePlus.call(student,5,3));

// apply--functionName.apply(obj,[arg1,arg2])
console.log(addAgePlus.apply(student,b));

// Bind---bound=functionName.bind(obj)
// bound(arg1,arg2);
let pack=addAgePlus.bind(student);
console.log(pack(5,4));
// currying
let addAge=function(a,c){
	return a+c;
};
let package=addAge.bind(this, student.age,5);
console.log(package());
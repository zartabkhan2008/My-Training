// Topic ==> Update Property, Add New Property, Delete Property.
let student = {
    name : "Momin Zartab Abubakar" ,
    age : 18 ,
    mobailno : 1234567891 ,
}

student.age = 17 // Update Property
student.city = "Mumbai" // Add New Property
delete student.mobailno ; // Delete Property
console.log(student);

// Topic ==> Object Methods
let person = {
  name: "Momin Zartab Abubakar",
  age: 17 ,
  city: "Mumbai"
};
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// Topic ==> Dot Notation ( . ) and Bracket Notation ( [ ] )
let idcard = {
    name : "Momin Zartab Abubakar" ,
    age : 17 ,
    class : "1Year"
}
console.log(idcard.age);
console.log(idcard["name"]);


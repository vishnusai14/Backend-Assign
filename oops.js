class LivingThings {

    protected
        getFun() {
            return age;
        }

}


class Animal extends LivingThings {
   



  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }


  getAge() {
    const age = getFun();
    return age;
}


}


class Animal2 extends Animal {
    getAge()
}

dog = Animal("Dog", 12);

cat = Animal("Cat", 12);

console.log(dog.getName());
console.log(cat.getName());
// console.log(dog.getAge())
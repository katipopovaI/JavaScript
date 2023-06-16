// const person = Object.create({}, {});
//enumerable:false --->по умолчанию
//writable:false---> по умолчанию нельзя менять
//configurable:false--->по умолчанию -запрет на удаление полей
const person = Object.create(
  ///прототип нового созданного обьекта
  {
    calculateAge() {
      console.log("Age", new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: "Vlad",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1991,
      enumerable: false,
      writable: false,
      configurable: false,
    },
    age: {
      //возврат нового значения
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      //изменение
      set(value) {
        document.body.style.background = "red";
        console.log("set age", value);
      },
    },
  }
);

person.name = "max";
console.log(person);

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("key", key, person[key]);
  }
}

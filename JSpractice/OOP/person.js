class person { 

constructor(name,gender,age,interests,bio,greeting) {
this._name = name;
this._gender = gender;
this._age = age;
this._interests = interests;
this._bio = bio;
this._greeting = greeting;

}
speak() { 
    console.log(`${this._greeting} my name is ${this._name}`)
}

}
let Imran = new person("Imran","male",24,"footy","Asian","hi")
Imran.speak();
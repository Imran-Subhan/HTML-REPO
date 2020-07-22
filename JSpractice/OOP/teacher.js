class teacher extends person { 
    constructor(name,age,gender,interest,bio,greeting) {
    super(name,age,gender,interest,bio,greeting)
    }

    speak() { 
        super.speak();
    }


}

let Tom = new teacher("tom",23,"male","Bball","teacher","greetings");
Tom.speak();
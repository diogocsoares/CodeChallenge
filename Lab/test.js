const details = {
   message: 'Hello World!'
};

function getMessage() {
   return this.message;
}

console.log(getMessage.apply(details));

const person = {
   name: "Marko Polo"
};

function greeting(greetingMessage) {
   return `${greetingMessage} ${this.name}`;
}

console.log(greeting.apply(person, ['Hello'])); // returns "Hello Marko Polo!"
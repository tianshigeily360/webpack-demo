class Greeter {
  greeting: String;
  constructor(Message: String) {
    this.greeting = Message;
  }
  greet() {
    return `hello,${this.greet}`;
  }
}

let greeter = new Greeter("world");

let btn = document.createElement("button");
btn.textContent = "btn";
btn.onclick = function() {
  alert(greeter.greet());
};
document.body.append(btn);

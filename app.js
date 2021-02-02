import { route } from "./router";
import "./main.css";
import home from "./src/views/home/home";
import homeTemplate from "./src/views/home/home.html";
import example1 from "./src/views/example1.html";
import example2 from "./src/views/example2.html";

let head = document.getElementsByTagName("head")[0];
head.insertAdjacentHTML("beforeend", homeTemplate);
head.insertAdjacentHTML("beforeend", example1);
head.insertAdjacentHTML("beforeend", example2);

route("/", "home", home);

route("/ex1", "example1", function () {
  this.title = "Example 1";
});

route("/ex2", "example2", function () {
  this.title = "Example 2";
  this.counter = 0;
  this.$on(".my-button", "click", () => {
    this.counter += 2;
    this.$refresh();
  });
});

route("*", "404", function () {});

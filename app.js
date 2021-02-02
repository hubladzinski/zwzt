import { route } from "./router";
import "./main.css";

route("/", "home", function () {
  this.where = "here";
  this.$on(".form__submit", "click", (e) => {
    e.preventDefault();
    console.log(e.view.location.origin);
    window.location = `${e.view.location.origin}/#/ex2`;
  });
});

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

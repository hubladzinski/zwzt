import { route } from "../router";
import "./global.scss";
import home from "./views/home/home";
import homeTemplate from "./views/home/home.html";
import sucess from "./views/sucess/sucess";
import sucessTemplate from "./views/sucess/sucess.html";
import wrongRouteTemplate from "./views/404/404.html";

const head = document.getElementsByTagName("head")[0];
head.insertAdjacentHTML("beforeend", homeTemplate);
head.insertAdjacentHTML("beforeend", sucessTemplate);
head.insertAdjacentHTML("beforeend", wrongRouteTemplate);

route("/", "home", home);

route("/sucess", "sucess", sucess);

route("*", "404", function () {});

import "./sucess.scss";

export default function sucess() {
  let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  this.username = userInfo.username;
}

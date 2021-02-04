import "./home.scss";

export default function home() {
  this.username = "";
  this.password = "";
  this.showErrorMessageUsername = false;
  this.errorMessageUsername = "";
  this.showErrorMessagePassword = false;
  this.errorMessagePassword = "";
  this.showErrorMessageGeneral = false;
  this.errorMessageGeneral = "";

  this.$on("#username", "input", (e) => {
    this.username = e.target.value;
  });

  this.$on("#password", "input", (e) => {
    this.password = e.target.value;
  });

  this.$on(".form", "submit", (e) => {
    e.preventDefault();
    if (this.username.length === 0) {
      this.showErrorMessageUsername = true;
      this.errorMessageUsername = "Enter username";
      this.$refresh();
    } else {
      this.showErrorMessageUsername = false;
      this.$refresh();
    }
    if (this.password.length === 0) {
      this.showErrorMessagePassword = true;
      this.errorMessagePassword = "Enter password";
      this.$refresh();
    } else {
      this.showErrorMessagePassword = false;
      this.$refresh();
    }
    if (!this.showErrorMessageUsername && !this.showErrorMessagePassword) {
      console.log(e.submitter.baseURI);
      const response = login(this.username, this.password);
      response
        .then((data) => {
          if (data.error) {
            this.showErrorMessageGeneral = true;
            this.errorMessageGeneral = data.message;
            this.$refresh();
          } else {
            const userInfo = {
              username: this.username,
              token: data.token,
            };
            window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
            window.location = `${e.submitter.baseURI.replace("#", "")}#/sucess`;
          }
        })
        .catch((err) => {
          this.showErrorMessageGeneral = true;
          this.errorMessageGeneral = err;
          this.$refresh();
        });
    }
  });
}

const login = async (username, password) => {
  const request = await fetch("http://localhost:8888/api/login", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const response = await request.json();
  return response;
};

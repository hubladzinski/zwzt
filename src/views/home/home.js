export default function home() {
  this.username = "";
  this.password = "";

  this.$on("#username", "input", (e) => {
    this.username = e.target.value;
  });

  this.$on("#password", "input", (e) => {
    this.password = e.target.value;
  });

  this.$on(".form", "submit", (e) => {
    e.preventDefault();
    console.log(e.submitter.baseURI);
    const response = login(this.username, this.password);
    response.then((data) => {
      if (data.error) {
        alert("Wrong password");
      } else {
        window.location = `${e.submitter.baseURI}#/ex2`;
      }
    });
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

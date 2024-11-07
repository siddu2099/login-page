const form = document.querySelector("form");
const usernameInput = document.querySelector("input[placeholder='Username']");
const passwordInput = document.querySelector("input[placeholder='Password']");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    alert("Please fill in both username and password.");
  } else {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => {
      if (response.ok) {
        alert("Login successful!");
        // Redirect to a new page if necessary
        window.location.href = "/dashboard";
      } else {
        alert("Invalid username or password.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }
});

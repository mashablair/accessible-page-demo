var validate = new Bouncer("#Registration");

// Show More/Less
// if Show More/Less btn is clicked
document.addEventListener("click", function (e) {
  if (e.target.matches(".show-more-btn")) {
    console.log("Show More btn is clicked");
    // add data-show-less to related ul
    var ul = e.target.previousElementSibling;

    if (ul) {
      // if has data attribute, remove it and change btn text and ADA stuff
      if (ul.hasAttribute("data-show-less")) {
        ul.removeAttribute("data-show-less");
        e.target.textContent = "Show More";
        e.target.setAttribute("aria-expanded", false);
        e.target.setAttribute("aria-label", `show more ${ul.id.replace(/_list$/, "")} locations`);
      } else {
        ul.setAttribute("data-show-less", true);
        e.target.textContent = "Show Less";
        e.target.setAttribute("aria-expanded", true);
        e.target.setAttribute("aria-label", `show less ${ul.id.replace(/_list$/, "")} locations`);
      }
    }
  }
});

// Live Region Example
var input = document.querySelector("#name_live");
var app = document.querySelector("#live_region");

input.addEventListener(
  "input",
  function () {
    if (input.value.length < 1) {
      app.textContent = "";
    } else {
      app.textContent = "Hello, " + input.value.trim() + "!";
    }
  },
  false
);

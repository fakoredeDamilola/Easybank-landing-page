let menu = document.querySelector("#menu");
let menuli = document.querySelectorAll("#menu li");
document.querySelector(".menu-toggle").addEventListener("click", function () {
  menu.classList.toggle("active");
});
Array.from(menuli).forEach((li) => {
  li.addEventListener("click", function () {
    Array.from(menuli).forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
});

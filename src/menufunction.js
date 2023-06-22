const menu = () => {
  const menu = document.querySelector("#optionsMenu");
  const menuBtn = document.querySelector("#plusbtn");

  menuBtn.addEventListener("click", function () {
    menu.classList.remove("hidden");
    if (menuBtn.classList.contains("active")) {
      menuBtn.classList.remove("active");
    } else {
      menuBtn.classList.add("active");
    }
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  });
};

export { menu };

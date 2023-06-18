const menu = () => {
  const menu = document.querySelector("#optionsMenu");
  const menuBtn = document.querySelector("#plusbtn");

  menuBtn.addEventListener("click", function () {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });
};

export { menu };

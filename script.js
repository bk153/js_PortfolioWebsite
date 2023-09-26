function toggleMenu() {
  // QuerySelector, returns the first element of the node which matches the selectors
  const menu = document.querySelector(".menuLinks");
  const icon = document.querySelector(".hamIcon");

  // classList, used to manipulate / access the element’s list of classes.
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

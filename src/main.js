import "./index.css"

const closeIcon = document.querySelector(".close")
const hamburgerIcon = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const arrowDown = document.querySelector(".arrow-down")
const arrowUp = document.querySelector(".arrow-up")
const submenu = document.querySelector(".submenu")
const connect = document.querySelector(".connect")

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.add("hidden")
  closeIcon.classList.remove("hidden")
  menu.classList.remove("hidden")
})

closeIcon.addEventListener("click", () => {
  hamburgerIcon.classList.remove("hidden")
  closeIcon.classList.add("hidden")
  menu.classList.add("hidden")
})

connect.addEventListener("click", () => {
  submenu.classList.toggle("hidden")
  submenu.classList.toggle("flex")
})

let NavLink = document.querySelector(".navlinks")
let Menu = document.querySelector(".menub")
let Close = document.querySelector(".close")


Menu.addEventListener("click", ()=> {
    NavLink.classList.toggle("navmenu")
})

Close.addEventListener("click", ()=> {
    NavLink.classList.remove("navmenu")
})

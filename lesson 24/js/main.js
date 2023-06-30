const year = document.getElementById("year")
const thisYear = Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear
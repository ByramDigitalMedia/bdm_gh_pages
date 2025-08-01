/* =======================================================
  * Template URL: https://byramdigitalmedia.com
  * Updated: July 20 2025  
  * Author: BDM
  * License: MIT
  ======================================================== */

let date = new Date().getFullYear()
document.getElementById("year").innerHTML = date

// ***********************************************************

const items = document.querySelectorAll(".client-item")
const itemCountDisplay = document.getElementById("itemCount")

itemCountDisplay.textContent = items.length

document.querySelectorAll(`[id^="terminal_"]`).forEach(function(terminalElem) {
  console.log(terminalElem.id, terminalElem);
  console.log("popup_" + terminalElem.id.split("_")[1]); 

  const popupId = "popup_" + terminalElem.id.split("_")[1];

  const popupElem = document.getElementById(popupId)

  

  terminalElem.addEventListener("mouseover", function (event) {
    popupElem.classList.add("popup-open");
  })

  terminalElem.addEventListener("mouseout", function (event) {
    popupElem.classList.remove("popup-open");
  })

  // Toggle on click.
  /*terminalElem.addEventListener("click", function (event) {
    popupElem.classList.toggle("popup-open");
  })*/

});
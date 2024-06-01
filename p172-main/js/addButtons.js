AFRAME.registerComponent("createbuttons", {
  init: function() {
    // 1. Create the Order button
    var button1 = document.createElement("button");
    button1.innerHTML = "ORDER NOW";
    button1.setAttribute("id", "order-button");
    button1.setAttribute("class", "btn btn-danger ml-3 mr-3");

    // 2. Create the Bill button
    var button2 = document.createElement("button");
    button2.innerHTML = "BILL";
    button2.setAttribute("id", "order-button");
    button2.setAttribute("class", "btn btn-warning mr-3");



    // 3. Append somewhere
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.appendChild(button2);
 //appemd the button2 as child of ButtonDiv
    buttonDiv.appendChild(button1)
 
  }
});

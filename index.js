
  for (i = 0; i < 10; i++) {
    // Grab div to contain tables
    const timeBlockContainer = $("#timeBlockContainer");
   
   // Create/Append div to container div
    const div1 = $("<div>");
          //div1.text("It Worked");
          div1.addClass("row border");
          timeBlockContainer.append(div1);

    // Create/Append input to div1
    let input1 = $("<input>");
        input1.attr({
            class:"textarea",
            class: "input",
            id: "event",
            name:" event",
            type: "text",
            value: "No Event"
        })
        div1.append(input1);


}
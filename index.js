let time = moment().hour(9);
let hourArr = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];



for (i = 0; i < hourArr.length; i++) {

    
    //Grab Container div from HTML
    const mainContainer = $("#timeBlockContainer")

    //Create grid div
    const rowDiv = $("<div>");
          rowDiv.addClass("row")
    //Create time block div
    const timeDiv = $("<div>");
          timeDiv.addClass("col-2");
          timeDiv.text(hourArr[i])
          
          
    //Create event block div
    const eventDiv = $("<div>");
          eventDiv.addClass("col-8");
    //Create save btn div
    const saveDiv = $("<div>");
          saveDiv.addClass("col-2");
          saveDiv.text("SAVE")

    //Append  grid blocks to grid container
    rowDiv.append(timeDiv);
    rowDiv.append(eventDiv);
    rowDiv.append(saveDiv);

    //Append row to main container
    mainContainer.append(rowDiv);
      
    // Create/Append input to eventDiv
    let input = $("<input>");
    input.attr({
        class:"textarea",
        class: "input",
        id: "event",
        name:" event",
        type: "text",
        value: "No Event"
    })
    eventDiv.append(input);

    
}


 
  /*
  //Loop to generate tables
  //for (i = 0; i < 10; i++) {


    let timeBlockDiv = $("<div>")
    let saveBtnDiv = $("<div>")
    let time = moment().format('hA')

      
    if (timeBlockDiv.text() === time){
    $(".eventBlock").addClass("present")
    }
    else {
      $(".eventBlock").addClass("future")
    }



 
   
    // Grab div to contain tables
    const timeBlockContainer = $("#timeBlockContainer");
   
   // Create/Append div to container div
    const div1 = $("<div>");
          timeBlockDiv.addClass('col-2')
          timeBlockContainer.append(timeBlockDiv)
          div1.addClass("row border col-8");
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
    

//} 
*/
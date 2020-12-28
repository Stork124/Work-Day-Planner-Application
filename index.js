
let hourArr = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];



for (i = 0; i < hourArr.length; i++) {

    
    //Grab Container div from HTML
    const mainContainer = $("#timeBlockContainer")

    //Create grid div
    const rowDiv = $("<div>");
          rowDiv.addClass("row");
          
    //Create time block div
    const timeDiv = $("<div>");
          timeDiv.addClass("col-2");
          timeDiv.text(hourArr[i]);
          
          
    //Create event block div
    const eventDiv = $("<div>");
          eventDiv.addClass("col-8");
    //Create save btn div
    const saveDiv = $("<div>");
          saveDiv.addClass("col-2");
          saveDiv.html("<button>SAVE</button>");

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
        value: "Add Event"
    })
    eventDiv.append(input);

    //Condition to check current time against time blocks and change color for past/present/future
    if (timeDiv.text() === moment().format('hA')){
          rowDiv.removeClass("past future")
          rowDiv.addClass("present")
    } 
    else if (parseInt(timeDiv.text()) > parseInt(moment().format('hA')) ||
      timeDiv.text() == "1PM" && moment().format('hA') == "12PM" ||
      parseInt(timeDiv.text()) <= 5 && parseInt(moment().format('hA')) <= 12) {
          rowDiv.removeClass("present past");
          rowDiv.addClass("future");
    }
    else {
          rowDiv.removeClass("future present");
          rowDiv.addClass("past");
    }

}



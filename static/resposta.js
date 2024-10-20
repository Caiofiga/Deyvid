function ProcessData(event) {
    event.preventDefault(); // Prevent form submission

    var formdata = $("#modelform").serializeArray(); 

    $.ajax({
        type: 'POST',
        url: '/predict', 
        dataType: 'json',
        contentType: 'application/json', 
        data: JSON.stringify(formdata), 
        success: function(response) {
            console.log(response);  
            $("#result").text(`Probabilidade de resistencia: ${response.score.toFixed(2)}%`);},
        error: function(xhr, status, error) {
            console.log("Error: " + error);
            console.log("Response Text: " + xhr.responseText);
        }
    });
}

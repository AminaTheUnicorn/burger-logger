$(document).ready(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault()
        let addBurger = $("#ca").val();
        console.log(addBurger);
    });

    $(".delete-burger").on("click", function(event) {
        event.preventDefault()
        var id = $(this).data("id");
        console.log(id);
        // Send the DELETE request.
        $.ajax("/api/burgers/:id", {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});


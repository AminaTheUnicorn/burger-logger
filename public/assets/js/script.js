$(document).ready(function(){

        $(".change-devoured").on("click", function(event) {
            var id = $(this).data("id");
            var newdevoured = $(this).data("devoured");
        
            var newdevouredState = {
              devoured: newdevoured
            };
        
            // Send the PUT request.
            $.ajax("/api/ca/" + id, {
              type: "PUT",
              data: newdevouredState
            }).then(
              function() {
                console.log("changed devoured to", newdevoured);
                // Reload the page to get the updated list
                location.reload();
              }
            );
          });



$(".create-form").on("submit", function(event){
        event.preventDefault()
        let addBurger = "swiss tutoring"
        console.log(addBurger);

        
        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
          }).then(
            function() {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    
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


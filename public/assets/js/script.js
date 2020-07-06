$(document).ready(function(){

        $(".change-devoured").on("click", function(event) {
          event.preventDefault();
            var id = $(this).data("id");
            var newdevoured = $(this).data("newdevoured");
        
            var newdevouredState = {
              devoured: newdevoured
            };
        
            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
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
        // let addBurger = "swiss tutorin"
        // console.log(addBurger);

        var addBurger = {
          burger_name: $("#ca").val().trim(),
          devoured: $("[name=devoured]:checked").val().trim()
        };
        
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
        $.ajax("/api/burgers/" + id, {
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


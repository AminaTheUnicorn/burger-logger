$(document).ready(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault()
        let addBurger = $("#ca").val();
        console.log(addBurger);
    })
});
$(()=>{

    $(".eatTheSushi").on("click", function () {

        const sushId = $(this).data("id");
        $.ajax(`/api/sushi/${sushId}`, {
            type: "PUT"
        }).then(() => {
            location.reload();
        });

    });

    $(".newSushi").on("click", function(){
        event.preventDefault()

        const newSushi = {
            name: $("#newSushi").val().trim()
        }


        //Check if sushi name has atleat 5 characters
        if(newSushi.name.length < 5 ){
            return console.log("Sushi name not long enough")
        } else {
            $.ajax("/api/sushi", {
                type: "POST",
                data: newSushi,
            }).then(() => {
                // Reload the page to get the updated list
                location.reload()
            })
        }
    })
})


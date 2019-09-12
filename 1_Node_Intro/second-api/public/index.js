console.log("Awesome console.log");

function getAboutMe(sFirstName, sLastName){
    if($("#aboutme").html() != ""){
        $("#aboutme").empty();
        console.log("Empty the facts!");
        return
    }
    $.ajax({
        method: "GET",
        url: "/sayhello",
        data:{
            firstName: sFirstName,
            lastName: sLastName
        }
    }).done((sData) => {
        $("#aboutme").append(sData);
    }).fail((error) => {
        console.log(error)
    });
    console.log("These are the facts!");
}

function triggerPost(){
    $.ajax({
        method: "POST",
        url: "/animal",
        data: {
            animal: "cão"
        }
    }).done((sData) => {
        console.log(sData);
    }).fail((error) => {
        console.log(error);
    });
}
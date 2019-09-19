console.log("Awesome console.log");
$(document).ready(function() { 
    $("#frmAboutMe").on("submit", (e) => {
        $.ajax({
            method: "POST",
            url: "/aboutme",
            data: $("#frmAboutMe").serialize()
        }).done((sData) => {
            console.log(sData);
        }).fail((error) => {
            console.log(error);
        });
        return false;
    });
});

function getAboutMe(sFirstName, sLastName){
    if($("#aboutme").html() != ""){
        $("#aboutme").empty();
        console.log("Empty the facts!");
        return
    }
    $.ajax({
        method: "GET",
        url: "/sayhello"
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
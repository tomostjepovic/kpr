$(".main-back-button").click(function(event) {   
    $(".procedure-container").hide();
    $("#procedures-menu").show();
});

$(".glucose-back-button").click(function(event) {   
    $(".hiponatremija").hide();
    $("#glucose-electrolits-menu").show();
});

$("#kpr-button").click(function(event) {
    showProcedure("kpr");
});

$("#anafilaksija-button").click(function(event) {
    showProcedure("anafilaksija");
});

$("#glucose-electrolits-button").click(function(event) {
    showProcedure("glucose-electrolits-menu");
});

$("#hiponatremija-button").click(function(event) {
    $("#glucose-electrolits-menu").hide();
    showProcedure("hiponatremija");
});

function showProcedure(procedureId){    
    $("#procedures-menu").hide();
    $("#" + procedureId).show();
}
$(".main-back-button").click(function(event) {   
    $(".procedures-container").hide();
    $("#procedures-menu").show();
});

function setProcedureTitle(title) {
    $("#procedure-name").text(title);
}

$("#kpr-button").click(function(event) {
    setProcedureTitle("KPR");
    showProcedure("kpr");
});

$("#anafilaksija-button").click(function(event) {
    showProcedure("anafilaksija");
});

$("#glucose-electrolits-button").click(function(event) {
    setProcedureTitle("GLUKOZA, ELEKTROLITI I ABS");
    showProcedure("glucose-electrolits");
});

function showProcedure(procedureId){    
    $("#procedures-menu").hide();
    $(".procedures-container").show();
    $(".procedure-container").hide();
    $("#" + procedureId).show();
}
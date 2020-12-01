const ageTypeEnum = {
    NEWBORN: 0,
    LESS_THEN_6: 1,
    GREATER_THEN_6: 2,
    CHILD: 3
};

$('input[type=radio][name=age]').change(function() {
    if (this.value == 'child') {
        $("#age").show();
    }
    else {        
        $("#age").hide();
    }
});

$( "#start" ).click(function(event) {
    
    event.preventDefault();
    var age = $('input[name="age"]:checked').val();

    if (age == undefined) {
        alert("Potrebno je odabrati dob.");
        return;
    }

    var ageInYears;

    var ageType;

    switch (age) {
        case "newborn": {
            ageType = ageTypeEnum.NEWBORN;
            break;
        }
        case "less-then-6": {
            ageType = ageTypeEnum.LESS_THEN_6;
            break;
        }
        case "greater-then-6": {
            ageType = ageTypeEnum.GREATER_THEN_6;
            break;
        }
        default: {           
            ageInYears = $('#age').val();
            if (ageInYears  == undefined || ageInYears == '') {
                alert("Potrebno je upisati dob.");

                return;
            }
            if (!(Number.isInteger(+ageInYears)) || !(ageInYears > 0)) {
                alert("Dob mora biti cijeli broj veći od nule.");

                return;
            } 
            ageType = ageTypeEnum.CHILD;
        }
    }

    var weight = $('#weight').val();

    if (weight == undefined || weight == '') {
        alert("Potrebno je upisati težinu.");

        return;
    }

    if (!(Number.isInteger(+weight)) || !(weight > 0)) {
        alert("Težina mora biti cijeli broj veći od nule.");

        return;
    }
    
    calculateAdrenalin(weight);
    calculateAmiodaron(weight);    
    calculateBolus(weight);
    calculateDefib(weight);
    calculateVtub (ageType, ageInYears);
    calculateTubus(ageType, ageInYears);
    calculateKateholamin(weight);

    //startStopwatch();
    
    startReanimation();
});

function startStopwatch() {
    $('#stopwatch').countimer();
}

window.onbeforeunload = function(event)
{
   // return confirm("Reanimacija je u tijeku. Jeste li sigurni da želite napustiti aplikaciju?");
};

$(".info-button").click(function(event) {   
    var elemId = event.target.id;
    var title = "";
    var description = "";
    switch (elemId) {
        case "adrenalin-info": {
            title = "Adrenalin";
            description = "Razrijediti jednu ampulu adrenalina (1mg/mL) s 9 mL F.O. <br> Kada jednom damo adrenalin, nastavljamo do kraja reanimacije svaki 2. ciklus." ;
            break;
        }
        case "amiodaron-info": {
            title = "Amiodaron";
            description = "Razrijediti jednu ampulu amiodarona (150 mg/3 mL) s 12 mL 5% glukoze. <br> Kod VF i VT bez pulsa, primjeniti nakon 3. i 5. šoka." ;
            break;
        }
        case "defib-info": {
            title = "Defibrilacija";
            description = "Ritmovi koji se defibriliraju jesu VF i VT bez pulsa." ;
            break;
        }
        case "kateholamin-info": {
            title = "Adrenalin";
            description = "Za kontinuiranu infuziju adrenalina/noradrenalnina razrijediti 1 mg adrenalina/noradrenalina u 50 mL F.O. <br> Za kontinuiranu infuziju dopamina/dobutamina razrijediti 50 mg dopamina/dobutamina u 50 mL F.O:" ;
            break;
        }
    }

    $("#modal-title").text(title);
    $("#modal-body-content").html(description);

    $('#exampleModalLong').modal({});
});


$(".back-button").click(function(event) {   
    $(".procedure-container").hide();
    $("#procedures-menu").show();
});

$("#kpr-button").click(function(event) {
    showProcedure("kpr");
});

$("#anafilaksija-button").click(function(event) {
    showProcedure("anafilaksija");
});

function showProcedure(procedureId){    
    $("#procedures-menu").hide();
    $("#" + procedureId).show();
}

function startReanimation() {
    // sakriti glavnu formu
    $("#data-form").hide();

    // prikazati štopericu i prikazati ju
    $("#stopwatch-container").show();

    // prikazati formu procedura
    $("#procedures-menu").show();

}

function calculateKateholamin(weight) {
    var number = weight / 3;
    var rounded = Math.round(number * 10) / 10;
    
    $("#adrenalin-noradrenalin").text(rounded + " mL/h");
    $("#dopamin-dobutamin").text(rounded + " mL/h");
}

function calculateAdrenalin(weight) {
    var adrenalin = 0.1 * weight;
    adrenalin = Math.round(adrenalin * 10) / 10
    if (adrenalin > 10) {
        adrenalin = 10;
    }

    $("#adrenalin").text(adrenalin + " mL otopine 1:10 000");
}

function calculateAmiodaron(weight) {
    var amiodaron = 5 * weight;
    if (amiodaron > 300) {
        amiodaron = 300;
    }

    $("#amiodaron").text(amiodaron + " mg");
}


function calculateBolus(weight) {
    var bolus = weight * 20;

    $("#bolus").text(bolus + " mL"); 

}

function calculateDefib(weight) {
    var defib = 4 * weight;
    if (defib > 360) {
        defib = 360;
    }

    $("#defib").text(defib + " J");
}

function calculateVtub (ageType, ageInYears) {
    switch (ageType) {
        case ageTypeEnum.NEWBORN: {           
            $("#vtub").text("3.5 mm"); 
            $("#vtub-cuffa").text("Obično se ne koristi");

            break;
        }
        case ageTypeEnum.LESS_THEN_6:
        case ageTypeEnum.GREATER_THEN_6: {           
            $("#vtub").text("3.5 - 4.0 mm"); 
            $("#vtub-cuffa").text("3.0 - 3.5 mm");

            break;
        }
        case ageTypeEnum.CHILD: {
            if (ageInYears < 3) {                         
                $("#vtub").text("4.0 - 4.5 mm"); 
                $("#vtub-cuffa").text("3.5 - 4.0 mm");
            } else {
                var diff = ageInYears/4;
                var diffRounded = Math.ceil(diff*2)/2;
                $("#vtub").text(diffRounded + 4 + " mm"); 
                $("#vtub-cuffa").text(diffRounded + 3.5 + " mm");
            }

            break;
        }
    }    
}

function calculateTubus (ageType, ageInYears) {
    switch (ageType) {
        case ageTypeEnum.NEWBORN: {           
            $("#oral").text("9 cm"); 
            $("#nazal").text("11 - 11.5 cm");

            break;
        }
        case ageTypeEnum.LESS_THEN_6: {      
            $("#oral").text("9.5 - 11 cm"); 
            $("#nazal").text("12 - 13 cm");

            break;
        }
        case ageTypeEnum.GREATER_THEN_6: {
            $("#oral").text("11.5 - 12 cm"); 
            $("#nazal").text("13 - 14 cm");

            break;
        }
        case ageTypeEnum.CHILD: {
            var diff = ageInYears/2;
                
            $("#oral").text(diff + 12 + " cm"); 
            $("#nazal").text(diff + 15 + " cm");

            break;
        }
    }
}
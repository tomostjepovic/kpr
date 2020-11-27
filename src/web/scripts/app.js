function test() {
    alert('Unesite dob!');
}

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

    if (age == 'child') {
        ageInYears = $('#age').val();
        if (ageInYears  == undefined || ageInYears == '') {
            alert("Potrebno je upisati dob.");

            return;
        }
        if (!(Number.isInteger(+ageInYears)) || !(ageInYears > 0)) {
            alert("Dob mora biti cijeli broj veći od nule.");

            return;
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


    $("#procedures").show();

    calculateAdrenalin(weight);
    calculateAmiodaron(weight);    
    calculateBolus(weight);
    calculateDefib(weight);
    calculateVtub (ageInYears);
});

function calculateAdrenalin(weight) {
    var adrenalin = 0.1 * weight;
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

function calculateVtub (ageInYears) {
    var vtub = ageInYears / 4;

    $("#vtub").text(vtub + " cm");
}


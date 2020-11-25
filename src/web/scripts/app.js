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


    alert("Idemoooo");
});

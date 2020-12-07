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
            title = "Brzina infuzije kateholamina";
            description = "Za kontinuiranu infuziju adrenalina/noradrenalnina razrijediti 1 mg adrenalina/noradrenalina u 50 mL F.O. <br> Za kontinuiranu infuziju dopamina/dobutamina razrijediti 50 mg dopamina/dobutamina u 50 mL F.O." ;
            break;
        }
        case "3-pc-nacl-info": {
            title = "3% NaCl";
            description = "Dati otopinu intravenski tijekom 15 minuta SAMO u slučaju simptomatske hiponatremije (konvulzije). Podići će Na za otprilike 3 mmol i zaustaviti konvulzije." ;
            break;
        }
    }

    $("#modal-title").text(title);
    $("#modal-body-content").html(description);

    $('#exampleModalLong').modal({});
});
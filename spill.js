document.addEventListener("DOMContentLoaded", function() {
    // sjekker om sjekkboksen for solenergi er endret
    document.getElementById("vannkraft").addEventListener("change", function() {
        let bilde = document.getElementById("vannkraftb");
        let antall = document.getElementById("vannkraft_mengde");
        if (this.checked) {
            bilde.classList.add("visible");
            bilde.classList.remove("hidden");
            antall.value = 1;
        
        } else {
            bilde.classList.add("hidden");
            bilde.classList.remove("visible");
            antall.value = 0;
        }
    });

    // sjekker om sjekkboksen for solenergi er endret

    document.getElementById("solcelle").addEventListener("change", function() {
        let bilde = document.getElementById("solcelleb");
        let antall = document.getElementById("solcelle_mengde");
        if (this.checked) {
            bilde.classList.add("visible");
            bilde.classList.remove("hidden");
            antall.value = 1000;
        } else {
            bilde.classList.add("hidden");
            bilde.classList.remove("visible");
            antall.value = 0;
        }
    });

    //sjekker vindboksen

    document.getElementById("vindkraft").addEventListener("change", function() {
        let bilde = document.getElementById("vindb");
        let antall = document.getElementById("vindkraft_mengde");
        if (this.checked) {
            bilde.classList.add("visible");
            bilde.classList.remove("hidden");
            antall.value = 25;
        } else {
            bilde.classList.add("hidden");
            bilde.classList.remove("visible");
            antall.value = 0;
        }
    });

    //sjekker atomkraftverk
    document.getElementById("atomkraft").addEventListener("change", function() {
        let bilde = document.getElementById("atomkraftverkb");
        let antall = document.getElementById("atomkraft_mengde");
        if (this.checked) {
            bilde.classList.add("visible");
            bilde.classList.remove("hidden");
            antall.value = 1;
        } else {
            bilde.classList.add("hidden");
            bilde.classList.remove("visible");
            antall.value = 0;
        }
    });

    //sjekker kullkraftverk

    document.getElementById("kullkraft").addEventListener("change", function() {
        let bilde = document.getElementById("kullkraftverkb");
        let antall = document.getElementById("kullkraft_mengde");
        if (this.checked) {
            bilde.classList.add("visible");
            bilde.classList.remove("hidden");
            antall.value = 2;
        } else {
            bilde.classList.add("hidden");
            bilde.classList.remove("visible");
            antall.value = 0;
        }
    });

    //endre verdi på slider vind

    document.getElementById("vindstyrke").addEventListener("input", function() {
        let slider = document.getElementById("vindstyrke");
        let output = document.getElementById("vind_variasjons_tall");
        output.innerHTML = slider.value;
    });

    // endre verdi på variasjonstall

    document.getElementById("variasjon").addEventListener("input", function() {
        let slider = document.getElementById("variasjon");
        let output = document.getElementById("variasjons_tall");
        output.innerHTML = (slider.value * 100).toFixed(0);
    });

    // endre verdi på slider temperatur

    document.getElementById("temperatur").addEventListener("input", function() {
        let slider = document.getElementById("temperatur");
        let output = document.getElementById("temperatur_variasjons_tall");
        output.innerHTML = slider.value;
    });

    //endre verdi på skydekke
    document.getElementById("skydekke").addEventListener("input", function() {
        let slider = document.getElementById("skydekke");
        let output = document.getElementById("skydekke_variasjons_tall");
        output.innerHTML = (slider.value*100).toFixed(0);
    });
});

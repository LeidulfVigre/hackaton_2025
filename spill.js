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
            antall.value = 5;
        } else {
            bilde.classList.add("hidden");
            bilde.classList.remove("visible");
            antall.value = 0;
        }
    });

});

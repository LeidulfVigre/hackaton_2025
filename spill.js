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
        sendData();
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
        sendData();
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
        sendData();
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
        sendData();
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
        sendData();
    });

    //endre verdi på slider vind

    document.getElementById("vindstyrke").addEventListener("input", function() {
        let slider = document.getElementById("vindstyrke");
        let output = document.getElementById("vind_variasjons_tall");
        output.innerHTML = slider.value;
        sendData();
    });

    // endre verdi på variasjonstall

    document.getElementById("variasjon").addEventListener("input", function() {
        let slider = document.getElementById("variasjon");
        let output = document.getElementById("variasjons_tall");
        output.innerHTML = (slider.value * 100).toFixed(0);
        sendData();
    });

    // endre verdi på slider temperatur

    document.getElementById("temperatur").addEventListener("input", function() {
        let slider = document.getElementById("temperatur");
        let output = document.getElementById("temperatur_variasjons_tall");
        output.innerHTML = slider.value;
        sendData();
    });

    //endre verdi på skydekke
    document.getElementById("skydekke").addEventListener("input", function() {
        let slider = document.getElementById("skydekke");
        let output = document.getElementById("skydekke_variasjons_tall");
        output.innerHTML = (slider.value*100).toFixed(0);
        sendData();
    });

    
    async function sendData() {
        // Hent data fra inputfeltene
        const skydekke = document.getElementById("skydekke").value;
        const temperatur = document.getElementById("temperatur").value;
        const variasjon = document.getElementById("variasjon").value;
        const vindstyrke = document.getElementById("vindstyrke").value;
    
        // Kraftverksdata
        const vannkraft = document.getElementById("vannkraft_mengde").value;
        const solcelle = document.getElementById("solcelle_mengde").value;
        const vindkraft = document.getElementById("vindkraft_mengde").value;
        const atomkraft = document.getElementById("atomkraft_mengde").value;
        const kullkraft = document.getElementById("kullkraft_mengde").value;
    
        // Lag et objekt med all dataen
        const data = {
            skydekke,
            temperatur,
            variasjon,
            vindstyrke,
            vannkraft,
            solcelle,
            vindkraft,
            atomkraft,
            kullkraft
        };
    
        try {
            // Send dataen til serveren
            const response = await fetch("http://127.0.0.1:8000/send_data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
    
            if (!response.ok) {
                throw new Error("Server returnerte en feil");
            }
    
            // Mottar HTML-snippet som respons
            const htmlSnippet = await response.text();
    
            // Sett HTML-snippet inn i en container
            document.getElementById("graf").innerHTML = htmlSnippet;
        } catch (error) {
            console.error("Feil ved sending av data:", error);
        }
    }
    sendData();
    
});

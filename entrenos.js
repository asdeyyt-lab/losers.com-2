// Opciones
document.querySelectorAll(".opcion").forEach(btn => {
    btn.addEventListener("click", function () {
        const tipo = btn.dataset.opcion;
        const panel = document.getElementById("panel-info");

        // Alternar selección
        if (btn.classList.contains("selected")) {
            btn.classList.remove("selected");
            panel.textContent = "Selecciona una opción para ver entrenos.";
            document.querySelectorAll(".opcion").forEach(b => b.classList.remove("selected"));
            return;
        }
        document.querySelectorAll(".opcion").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");

        if (tipo === "casa") {
            panel.innerHTML = `
                Buena opción para empezar, Vamos todo hombre empieza haciendo flexiones en la soledad de su cuarto
                <button class="btn-calendario">Calendario de casa</button>
            `;
        } else if (tipo === "gimnasio") {
            panel.innerHTML = `
                La mejor de todas, ¿Quieres un fisico completo y estas dispuesto a ir a un Gym? ve al calendario.
                <button class="btn-calendario">Calendario gimnasio</button>
            `;
        } else if (tipo === "calistenia") {
            panel.innerHTML = `
                alo flacow? Es broma, desarrollar fuerza  y un fisico atletico es importante, te va a gustar esta rutina creeme.
                <button class="btn-calendario">Calendario calistenia</button>
            `;
        }
    });
});


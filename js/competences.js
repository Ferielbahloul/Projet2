function ajouterCompetence(categorieId) {
    let nouvelle = prompt("Entrez la nouvelle compétence :");

    if (nouvelle && nouvelle.trim() !== "") {
        let div = document.createElement("div");
        div.className = "skill";
        div.textContent = nouvelle;

        document.getElementById(categorieId).appendChild(div);
    } else {
        alert("Veuillez entrer une compétence valide.");
    }
}

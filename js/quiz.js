document.getElementById("submitBtn").addEventListener("click", function () {

    const bonnesReponses = {
        q1: "b",
        q2: "b",
        q3: "c",
        q4: "b",
        q5: "a",
        q6: "a",
        q7: "b",
        q8: "c",
        q9: "b",
        q10: "b"
    };

    let score = 0;
    let total = Object.keys(bonnesReponses).length;

    // Supprimer les styles précédents
    document.querySelectorAll("label").forEach(l => {
        l.classList.remove("correct", "incorrect");
    });

    // Vérification
    for (let question in bonnesReponses) {

        const bonneVal = bonnesReponses[question];
        const options = document.querySelectorAll(`input[name="${question}"]`);

        let bonneTrouvee = false;

        options.forEach(option => {

            const parentLabel = option.parentElement;

            // question répondue
            if (option.checked) {
                if (option.value === bonneVal) {
                    score++;
                    parentLabel.classList.add("correct");
                    bonneTrouvee = true;
                } else {
                    parentLabel.classList.add("incorrect");
                }
            }

            // mise en valeur de la bonne réponse
            if (option.value === bonneVal) {
                parentLabel.style.fontWeight = "bold";
            }
        });
    }

    const resultatDiv = document.getElementById("resultat");

    // Style selon score
    resultatDiv.style.display = "block";

    if (score === total) {
        resultatDiv.className = "success";
        resultatDiv.innerHTML = `
            <h3>🎉 Excellent ! Score parfait : ${score}/${total}</h3>
        `;
    } else if (score >= total / 2) {
        resultatDiv.className = "success";
        resultatDiv.innerHTML = `
            <h3>👍 Bon travail ! Vous avez obtenu : ${score}/${total}</h3>
        `;
    } else {
        resultatDiv.className = "fail";
        resultatDiv.innerHTML = `
            <h3>😕 Vous avez obtenu : ${score}/${total}</h3>
            <p>Révisez encore un peu et réessayez !</p>
        `;
    }

});

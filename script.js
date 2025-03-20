
document.addEventListener("DOMContentLoaded", function () { 
         console.log("Le DOM est chargé !");

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
       
        if (button.dataset.id !== "1") {
            button.addEventListener("click", function () {
                const monstreId = button.dataset.id; 
                let monstre = document.querySelector(`#monstre${monstreId}`); 

                if (monstre) {
                    console.log("Monstre trouvé :", monstre);
                    monstre.classList.toggle("visible"); 
                }
            });
        }
    });
});
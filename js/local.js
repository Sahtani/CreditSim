
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('creditForm');
//     const steps = Array.from(form.getElementsByClassName('form-step'));
//     const nextBtns = form.getElementsByClassName('next-btn');
//     const prevBtns = form.getElementsByClassName('prev-btn');
//     const progressSteps = document.getElementsByClassName('step');
    
//     let currentStep = 0;
    
//     function showStep(stepIndex) {
//         steps[currentStep].classList.remove('active');
//         steps[stepIndex].classList.add('active');
//         progressSteps[currentStep].classList.remove('active');
//         progressSteps[stepIndex].classList.add('active');
//         currentStep = stepIndex;
//     }
    
//     Array.from(nextBtns).forEach((btn) => {
//         btn.addEventListener('click', () => {
//             if (currentStep < steps.length - 1) {
//                 showStep(currentStep + 1);
//             }
//         });
//     });
    
//     Array.from(prevBtns).forEach((btn) => {
//         btn.addEventListener('click', () => {
//             if (currentStep > 0) {
//                 showStep(currentStep - 1);
//             }
//         });
//     });
    
//     // Gestion des sliders
//     const sliders = form.querySelectorAll('input[type="range"]');
//     sliders.forEach((slider) => {
//         const output = slider.nextElementSibling;
//         slider.addEventListener('input', function() {
//             output.value = this.value + (this.id === 'duration' ? ' mois' : ' DH');
//         });
//     });
    
//     form.addEventListener('submit', function(e) {
//         e.preventDefault();
//         // Ajoutez ici la logique pour traiter la soumission du formulaire
//         console.log('Formulaire soumis');
//     });
// });
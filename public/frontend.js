// function load(){
//     const loader=document.querySelector(".load");
//     loader.style.display="block";
// }

// console.log("Vikasmaa")
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('has-content');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.classList.remove('has-content');
            }
        });
    });
});

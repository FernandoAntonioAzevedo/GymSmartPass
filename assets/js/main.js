/*=============== MENU ===============*/

/* Menu show */

/* Menu hidden */

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== CALCULATE BMI ===============*/
const calculateForm = document.getElementById('calculate-form'),
calculateCm = document.getElementById('calculate-cm'),
calculateKg = document.getElementById('calculate-kg'),
calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault();

    if(calculateCm.value === '' || calculateKg.value === '') {
        calculateMessage.classList.remove('color-first');
        calculateMessage.classList.add('color-red');

        calculateMessage.textContent = 'Insira sua altura e peso para calcularmos seu IMC';

        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000 );
    } else {
        const cm = calculateCm.value / 100,
        kg = calculateKg.value,
        bmi = Math.round(kg / (cm * cm));

        if (bmi < 18.5) {
              calculateMessage.classList.add('color-first');
            calculateMessage.textContent = `Seu IMC é ${bmi}:  você está magro`;
        }
          else if (bmi < 25) {
              calculateMessage.classList.add('color-first');
            calculateMessage.textContent = `Seu IMC é ${bmi}:  você está no peso ideal`;
        } else {
               calculateMessage.classList.add('color-first');
            calculateMessage.textContent = `Seu IMC é ${bmi}:  você está acima do peso`;
        }

        calculateCm.value = '';
        calculateKg.value = '';
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000 );
    }
};

calculateForm.addEventListener('submit', calculateBmi);

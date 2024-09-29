function BMI() {
    const heightInput = document.querySelector('input#height');
    let height = heightInput.value;

    const weightInput = document.querySelector('input#weight');
    let weight = weightInput.value;

    // Convert height from cm to meters
    height = height / 100;

    // Calculate BMI
    const bmi = weight / (height * height);

    // Display the BMI result
    const bmiDisplay = document.querySelector('input#bmi');
    bmiDisplay.value = bmi.toFixed(2);  // Rounded to 2 decimal places

    // Get feedback text element
    const fbtext = document.querySelector('span#fb');


    // Update the feedback based on BMI category
    if (bmi < 18.5) {
        fbtext.textContent = 'You are Underweight 😕';
        bmiDisplay.className = 'w-80 py-3 text-3xl text-white bg-red-400 font-bold outline-none bg-gray-100 text-center ring ring-slate-700 hover:ring-2 rounded-lg';
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        fbtext.textContent = 'You are Healthy Weight 😊';
        bmiDisplay.className = 'w-80 py-3 text-3xl text-white bg-green-500 font-bold outline-none text-center ring ring-slate-700 hover:ring-2 rounded-lg';
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        fbtext.textContent = 'You are Overweight ⚠️😐';
        bmiDisplay.className = 'w-80 py-3 text-3xl text-white bg-yellow-300 font-bold outline-none text-center ring ring-slate-700 hover:ring-2 rounded-lg';
    } 
    else if(bmi >= 30) {
        fbtext.textContent = 'You are Obesity 🚫😟';
        bmiDisplay.className = 'w-80 py-3 text-3xl text-white bg-red-600 font-bold outline-none text-center ring ring-slate-700 hover:ring-2 rounded-lg';
    }
    else{
        bmiDisplay.placeholder="Your BMI is --";
    }

    heightInput.value='';
    weightInput.value='';


}

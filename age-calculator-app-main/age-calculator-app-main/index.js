// we  sselsct output elemnt
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");
// input elements
let isValid = false;
const input_year = document.querySelector("#Year");
const input_month= document.querySelector("#month");
const input_day = document.querySelector("#day");
submit_btn.addEventListener('click', calculateDate);

// ERROR ELEMNTS
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_Year = document.querySelector(".error-Year");

input_day.addEventListener('input', (e) => {
    if (+input_day.value >31){
    error_day.textContent = "must be a valid date";
    isValid = false;
    return;
} else {
    isValid = true;
    error_day.textContent = "";
}
if (+input_day.value === 0){
    isValid = false;
    error_day.textContent = "";
    isValid = false;
    return;
}
else{
    error_day.textContent = "";
}
});
// wertyuiop[]
//month
input_month.addEventListener('input', (e) => {
    if (+input_month.value >12){
    error_month.textContent = "must be a valid date";
    isValid = false;
    return;
} else {
    isValid = true;
    error_month.textContent = "";
}
    // if (month.value === 2){

    // }
if (+input_month.value === 0){
    isValid = false;
    error_month.textContent = "this field is required";
    isValid = false;
    return;
}
else{
    error_month.textContent = "";
}
});


// year
input_year.addEventListener('input', (e) => {
    if (+input_year.value >2024){
    error_Year.textContent = "must be a valid date";
    isValid = false;
    return;
} else {
    isValid = true;
    error_Year.textContent = "";
}
if (+input_year.value === 0){
    isValid = false;
    error_Year.textContent = "this field is required";
    isValid = false;
    return;
}
else{
    error_Year.textContent = "";
}
});
function calculateDate(){
    if (isValid){
        let birthday = `${input_month.value}, ${input_day.value}, ${input_year.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() -1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() -1;
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;

    } else {
        alert("error in your dates")
    }
}





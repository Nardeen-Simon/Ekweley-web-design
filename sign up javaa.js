const prevBtns = document.querySelectorAll(".btnn-prev");
const nextBtns = document.querySelectorAll(".btnn-next");
const progresss = document.getElementById("progresss");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progresss-step");

let formStepsNum = 0;

nextBtns.forEach((btnn) => {
    btnn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    });
});

prevBtns.forEach((btnn) => {
    btnn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
    });
});

function updateFormSteps(){
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") && 
        formStep.classList.remove("form-step-active");
    });
    
    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressBar(){
    progressSteps.forEach((progressStep, idx) =>{
        if(idx < formStepsNum + 1){
            progressStep.classList.add('progresss-step-active');
        }
        else{
            progressStep.classList.remove('progresss-step-active');
        }
    });

    const progressActive = document.querySelectorAll(".progresss-step-active");
    progresss.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100+ "%";
}
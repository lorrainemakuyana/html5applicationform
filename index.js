const first = form.elements["fname"].value;
const last= form.elements["lname"].value;

document.getElementById("submitting").onclick = function() {
    let allFieldsFilled = false; 
    const requiredFields = document.getElementById("job-app").querySelectorAll("[required]"); 
    requiredFields.forEach(function(field) {
        if (!allFieldsFilled) return;
        if (!field
            .value) allFieldsFilled = false; 
        if (field.type === "radio") {
            let check = false;
            document.getElementById("job-app").querySelectorAll(`[name=${field.name}]`).forEach(function(radio) {
                if (radio.checked) check = true; 
            });
            allFieldsFilled = check; 
        }
    })
    if (!allFieldsFilled) alert("Fill in all required fields.");
    else {
        alert(`Hey ${first} ${last}, you have submitted your job application!`);
    }
}; 

function resetForm() {
    alert(`Hey ${first} ${last}, you have reset the application form.`); 
}
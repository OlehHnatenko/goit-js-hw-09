const formData = {
    email: "",
    message: ""
};

const LOCAL_STORAGE_KEY = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedData) {
    try {
        const parseData = JSON.parse(savedData);
        formData.email = parseData.email || "";
        formData.message = parseData.message || "";

        feedbackForm.elements.email.value = formData.email;
        feedbackForm.elements.message.value = formData.message;

        
    } catch (error) {
        console.error("something wrong", error)
    }
    
}

feedbackForm.addEventListener("input", (event) => {
    const target = event.target;

    if (target.name === "email" || target.name === "message") {
        formData[target.name] = target.value;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));

    }

});

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);

    localStorage.removeItem(LOCAL_STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    feedbackForm.reset();

});
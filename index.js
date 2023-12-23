let inputElOne = document.getElementById('first-input');
addEventListenerToInput(inputElOne);

function addEventListenerToInput(inputElement) {
    let inputValue;
    inputElement.addEventListener("input", function () {
        inputValue = inputElement.value;
        generateDropdownOptions(inputElement, inputValue);
    });
    inputElement.addEventListener("keydown", function (event) {
        let regex1 = /^\/1.*/;
        let regex2 = /^\/1$/;
        if ((event.key === "Enter" || event.keyCode === 13) && inputElement.placeholder === "Enter text here" && regex2.test(inputValue)) {
            inputElement.value = "";
            inputElement.placeholder = "Heading 1";
            inputElement.classList.add("heading-1");
            inputElement.focus();
            let nextSibling = inputElement.nextElementSibling;

            if (nextSibling) {
                nextSibling.remove();
            }
        } else if ((event.key === "Enter" || event.keyCode === 13) && inputElement.placeholder === "Heading 1") {
            inputElement.value = this.value;
            inputElement.style.display = "none";
            let header = document.createElement("h1");
            header.innerHTML = ` <i class="fa-solid fa-bars bars"></i>&nbsp;&nbsp;${inputElement.value}`;
            inputElement.parentNode.insertBefore(header, inputElement.nextSibling);
            generateNewNextInput(header);
        } else if ((event.key === "Enter" || event.keyCode === 13) && inputElement.placeholder === "Enter text here" && !regex1.test(inputValue)) {
            inputElement.value = this.value;
            generateNewNextInput(inputElement);
        } else if ((event.key === "Enter" || event.keyCode === 13) && inputElement.placeholder === "Enter text here" && regex1.test(inputValue)) {
            inputElement.value = this.value;
            let string = inputElement.value.slice(2)
            inputElement.style.display = "none";
            let header = document.createElement("h1");

            header.innerHTML = ` <i class="fa-solid fa-bars bars"></i>&nbsp;&nbsp;${string}`;
            inputElement.parentNode.insertBefore(header, inputElement.nextSibling);
            generateNewNextInput(header);
        }
    });



}

function generateDropdownOptions(inputElement, inputValue) {
    let regex2 = /^\/1$/;
    if (inputElement.placeholder !== "Heading 1") {
        if (regex2.test(inputValue)) {
            let dropdownElement = document.createElement("div");
            dropdownElement.className = "dropdown";
            inputElement.parentNode.insertBefore(dropdownElement, inputElement.nextSibling);
            dropdownElement.innerHTML = "";
            let option1 = document.createElement("div");
            option1.className = "option";
            option1.innerHTML = `
                <h4>Add blocks</h4>
                <p class="after-h4">Keep typing to filter or escape to exit</p>
                <p class="filter">Filtering Keyword <span>1</span></p>
                <div class="heading-option">
                <i class="fa-solid fa-t t-letter" ></i>
                    <div class="heading-option-text">
                    <p>
                    <strong>Heading 1</strong>
                    </p>
                    <p>ShortCut: type >># + space </p>
                    </div>
                </div>
            `;
            dropdownElement.appendChild(option1);
            dropdownElement.style.display = "block";
        } else {
            let nextSibling = inputElement.nextElementSibling;
            if (nextSibling) {
                nextSibling.remove();
            }
        }
    }
    let optionElement = document.querySelector(".option");
    if (optionElement) {
        optionElement.addEventListener("click", function () {
            inputElement.value = "";
            inputElement.placeholder = "Heading 1";
            inputElement.classList.add("heading-1");
            inputElement.focus();
            let nextSibling = inputElement.nextElementSibling;
            if (nextSibling) {
                nextSibling.remove();
            }
        });
    }

}
function generateNewNextInput(header) {
    if (!header.nextElementSibling) {
        let textInput = document.createElement("input");
        textInput.type = "text";
        textInput.name = "text-input";
        textInput.placeholder = "Enter text here";
        header.parentNode.insertBefore(textInput, header.nextSibling);
        textInput.focus();
        textInput.setAttribute('autocomplete', 'off');
        addEventListenerToInput(textInput);
    }
}

const inputs = document.querySelectorAll(".inputs input");

function inputUpdate() {
    const dataSizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + dataSizing);
}

inputs.forEach(input => input.addEventListener("change", inputUpdate));
inputs.forEach(input => input.addEventListener("mousemove", inputUpdate));
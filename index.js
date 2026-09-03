const input = document.querySelector("#input")
const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const inputs = document.querySelectorAll(".input")

inputs.forEach(function (element) {
    element.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const a = Number(input.value);
            if (!isNaN(a) && input.value !== "") {
                const calc1 = (a * 9 / 5) + 32;
                const calc2 = a + 273.15;
                input1.value = calc1.toFixed(2);
                input2.value = calc2.toFixed(2);
            }
            const b = Number(input1.value);
            if (!isNaN(b) && input1.value !== "") {
                const calc = (b - 32) * 5 / 9;
                const calc2 = (b - 32) * 5 / 9 + 273.15;
                input.value = calc.toFixed(2);
                input2.value = calc2.toFixed(2);
            }
            const c = Number(input2.value);
            if (!isNaN(c) && input2.value !== "") {
                const calc = c - 273.15;
                const calc1 = (c - 273.15) * 9 / 5 + 32
                input.value = calc.toFixed(2);
                input1.value = calc1.toFixed(2);
            }
        }
    });
});
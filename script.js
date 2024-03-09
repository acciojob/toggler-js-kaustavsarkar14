let first = null;
let second = null;
let third = null;

const allDivs = document.querySelectorAll('.toggle-container div');

allDivs.forEach(div => {
    div.addEventListener('click', e => {
        const checkbox = div.querySelector('.toggle');

        if (!first) {
            first = checkbox;
        } else if (!second) {
            second = checkbox;
        } else {
            // Third checkbox is clicked, reset first and second
            first.checked = false;
            first = second;
            second = checkbox;
        }

        // Toggle the checked status of the checkbox
        checkbox.checked = !checkbox.checked;
    });
});

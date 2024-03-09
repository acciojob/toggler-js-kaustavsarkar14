document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');
    let checkedCount = 0;

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // If already 2 checkboxes are checked and current one is not checked
            if (this.checked && checkedCount >= 2) {
                // Uncheck the first checked checkbox
                const firstChecked = document.querySelector('.toggle:checked');
                if (firstChecked) {
                    firstChecked.checked = false;
                }
            }
            // Update checked count
            checkedCount = document.querySelectorAll('.toggle:checked').length;
            // Change color based on checked status
            this.parentNode.style.backgroundColor = this.checked ? 'lightgreen' : '';
        });
    });
});

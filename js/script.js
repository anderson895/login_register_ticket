$(document).ready(function() {
    // Handle form submission for step 1
    $('#step1').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        $('.register-box.active').removeClass('active').next('.register-box').addClass('active'); // Move to the next step
    });

    // Handle form submission for step 2
    $('#step2').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const email = $('#email').val();
        const phone = $('#phone').val();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        // Validate email
        if (!emailPattern.test(email)) {
            $('#emailError').text("Please enter a valid Gmail address ending with @gmail.com");
            return; // Stop further processing
        } else {
            $('#emailError').text(""); // Clear error message if valid
        }

        // Move to the next step
        $('.register-box.active').removeClass('active').next('.register-box').addClass('active');
    });

    // Handle form submission for step 3
    $('#step3').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const email2 = $('#email2').val();
        const email2Pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        // Validate second email
        if (!email2Pattern.test(email2)) {
            $('#email2Error').text("Please enter a valid Gmail address ending with @gmail.com");
            return; // Stop further processing
        } else {
            $('#email2Error').text(""); // Clear error message if valid
        }

        // Here you can collect all form data and send it to the server or process it further
        alert("Account created successfully!"); // Display a success message (you can replace this with an actual submission)
    });
});
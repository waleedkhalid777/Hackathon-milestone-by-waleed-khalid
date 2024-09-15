document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get the form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const profilePicture = document.getElementById('profilePicture').files[0];
    const username = document.getElementById('username').value; // Correct this

    const uniquePath = `resume${username.replace(/\s+/g, '-')}.html`;

    let profileImageHTML = '';
    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImageHTML = `<img src="${e.target.result}" alt="Profile Picture">`;
            displayResume(profileImageHTML); // Call after image load
        };
        reader.readAsDataURL(profilePicture); // Convert image to Base64
    } else {
        displayResume(''); // Call without profile image
    }

    function displayResume(profileImageHTML) {
        const resumeHTML = `
            <h2>Resume</h2>
            ${profileImageHTML}
            <p><strong>Name:</strong> <span class="editable">${name}</span></p>
            <p><strong>Email:</strong> <span class="editable">${email}</span></p>
            <p><strong>Phone Number:</strong> <span class="editable">${phone}</span></p>

            <h3>Education:</h3>
            <p class="editable">${education}</p>

            <h3>Experience:</h3>
            <p class="editable">${experience}</p>

            <h3>Skills:</h3>
            <p class="editable">${skills}</p>
        `;

        // Display the resume output in the div
        const resumeOutput = document.getElementById('resumeOutput');
        if (resumeOutput) {
            resumeOutput.innerHTML = resumeHTML;
            resumeOutput.style.display = 'block'; // Show the resume div

            // Add the download link
            const downloadLink = document.createElement('a');
            downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeHTML);
            downloadLink.download = uniquePath;
            downloadLink.textContent = 'Download your resume';
            resumeOutput.appendChild(downloadLink);
        }

        // Make the resume content editable
        makeEditable();
    }

    function makeEditable() {
        const editableElements = document.querySelectorAll('.editable');
        editableElements.forEach(element => {
            element.addEventListener('click', function () {
                const currentElement = element;
                const currentValue = currentElement.textContent || "";

                if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = currentValue;
                    input.classList.add('editing-input');

                    input.addEventListener('blur', function () {
                        currentElement.textContent = input.value;
                        currentElement.style.display = 'inline';
                        input.remove();
                    });

                    currentElement.style.display = 'none';
                    currentElement.parentNode?.insertBefore(input, currentElement);
                    input.focus();
                }
            });
        });
    }
});

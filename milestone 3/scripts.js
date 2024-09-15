// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Type assertion
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;

//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;

//         // Resume output
//         const resumeOutput = `
//             <h2>Resume</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone Number:</strong> ${phone}</p>

//             <h3>Education:</h3>
//             <p>${education}</p>

//             <h3>Experience:</h3>
//             <p>${experience}</p>

//             <h3>Skills:</h3>
//             <p>${skills}</p>
//         `;

//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement ) {
//             resumeOutputElement.innerHTML = resumeOutput;
//         } else {
//             console.error("The resume output element is missing");
//         }
//     } else {
//         // Handling missing or invalid input
       
//         console.error("One or more fields are missing.");
//     }
// });


// document.getElementById("resumeForm").addEventListener('submit',(e) => {
//     e.preventDefault() 
//     console.log(e);
    
// })

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    // alert("hello")
    
    // Get the form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Create resume output HTML
    const resumeHTML = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>

        <h3>Education:</h3>
        <p>${education}</p>

        <h3>Experience:</h3>
        <p>${experience}</p>

        <h3>Skills:</h3>
        <p>${skills}</p>
    `;

    // Display the resume output in the div
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.style.display = 'block'; // Show the resume div
    console.log(resumeOutput.innerHTML = resumeHTML);
    
});

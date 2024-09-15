
const draggableElement = document.getElementById("resumeOutput");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

draggableElement.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - draggableElement.offsetLeft;
    offsetY = e.clientY - draggableElement.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        draggableElement.style.left = `${e.clientX - offsetX}px`;
        draggableElement.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});





document.getElementById('resumeForm').addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent page reload
    // alert("hello")
    
    // Get the form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

// Resume output
const resumeHTML = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> <span id="edit-name" class= "editable">  ${name} </span> </p>
    <p><strong>Email:</strong> <span id="edit-name" class= "editable"> ${email} </span> </p>
    <p><strong>Phone Number:</strong> <span id="edit-name" class= "editable"> ${phone} </span> </p>

    <h3>Education:</h3>
    <p id="edit-name" class= "editable" >${education}</p>

    <h3>Experience:</h3>
    <p id="edit-name" class= "editable">${experience}</p>

    <h3>Skills:</h3>
    <p id="edit-name" class= "editable">${skills}</p>
`;

    // Display the resume output in the div
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.style.display = 'block'; // Show the resume div
    console.log(resumeOutput.innerHTML = resumeHTML);
    
});


function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element =>{
    element.addEventListener('click',function(){
    const currentElement = element 
    const currentValue = currentElement. textContent || "";

    if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN'){
        const input = document.createElement('input')
        input.type = 'text'
        input.value = currentValue
        input.classList.add('editing input')

        input.addEventListener('blur', function(){
            currentElement.textContent= input.value;
            currentElement.style.display= 'inline'
            input.remove()
        })

        currentElement.style.display= 'none'
        currentElement.parentNode?.insertBefore(input, currentElement)
        input.focus()

    }

    })
})
}









makeEditable()
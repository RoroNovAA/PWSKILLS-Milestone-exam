
const data = ["HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"];


const addButton = document.querySelector("button");
let i = 0;
   function addItems() {
      
        let list = document.querySelector(".list-address");
        return list.innerHTML += `<li> ${data[i]} </li>`;
   }

addButton.addEventListener("click", function(event) {
    event.preventDefault();
    addItems();
});
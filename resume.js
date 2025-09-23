// Define Variables
let myName = "Jordan Martino";

let title = "Student";

let education = "Oral Roberts University";

let experience = "Five Guys, West End Creamery Concessions Stand, Mitchell Differential Inc.";

let skills = ["HTML", "CSS", "JavaScript"];
let skillsList = document.createElement("ul");
for (let i = 0; i < skills.length; i++) {
 let li = document.createElement("li");
 li.textContent = skills[i];
 skillsList.appendChild(li);
}
document.body.appendChild(skillsList);

function showFunFact() {
 alert("Fun Fact: I love ice skating!");
}

// Connect Variables to the HTML
document.getElementById("my-name").textContent = myName;
document.getElementById("title").textContent = title;
document.getElementById("education").textContent = education;
document.getElementById("experience").textContent = experience;

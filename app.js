
 // Linking elements with variables
 const img = document.getElementById('person-img');
 const author = document.getElementById('author');
 const job = document.getElementById('job');
 const info = document.getElementById('info');

 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 const social = document.querySelector('.socials');
 const projects = document.querySelector('#projectLink');
 console.log(projects)

// Local JSON data
// Data contains information about teammates
const reviews = [
  {
    id: 1,
    name: "Parth Kawatra",
    job: "react developer",
    img:
      "https://avatars.githubusercontent.com/u/7554961?v=4",
    text:
      "My Name is Parth. I'm a Computer Science student hoping to become a Front End Developer, creating beautiful, accessible, and professional websites for a living. I currently specialise in HTML, CSS and JavaScript to create my websites. I'm a keen user of the react framework for javascript. You'll usually find me either working on my uni assignments or in front of my pc writing up code for new websites.",
    social: "https://github.com/parth2187",
    project: ["React Task Maker", "https://github.com/parth2187/react-task-tracker"]
  },
  {
    id: 2,
    name: "Gundalf aka Bob",
    job: "web designer",
    img:
      "https://img-9gag-fun.9cache.com/photo/azm3d8p_700bwp.webp",
    text:
      "I'm Gundalf, but I also go by Bob. I'm an enthusiast learning how to program on my free time, and I hope to become a full fledged developer one day, capable of adapting to any framework as needed for the job. For the moment, though, I specialise in Python, HTML, CSS and I'm learning Javascript to shore up my skills in front end development",
    social: "https://github.com/TPX-Bob",
    project: ["Meme Generator", "https://github.com/parth2187/meme-generator"]
  },
  {
    id: 3,
    name: "Comet Coder",
    job: "JS and JSON",
    img:
      "https://www.linkpicture.com/q/LPic61fbeab8acda51666471639.png",
    text:
      "Hi! Its me CometCoder! I'm a team member of \'MediocreGun\'. I like playing around with CSS animations and transitions. Currently, I'm working on learning JavaScript online. ",
    social: 'https://github.com/CometCoder192',
    project: ["IncrementDecrementJS", "https://cometcoder192.github.io/IncrementDecrementJS/"]
  }
];

let currentItem = 2; 

/*
This event listener is triggered once the page loads\

For example, if you replace the `showPerson(currentItem)` with `console.log('Hello')` ,
It will console.log the message once the page loads every time.
*/


window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
  });

// This function is triggered when the page loads

 function showPerson(person) {
  const item = reviews[person]; 
  img.src = item.img; // Item.img = reviews[person].img
  social.href = item.social;
  projects.textContent = item.project[0]
  projects.href = item.project[1];
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text; 
 }

// Next button and previous button functionality

 nextBtn.addEventListener('click', () => {
  currentItem++;

  // When currentItem exceeds the given persons, it starts back on person #1
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
 })
  prevBtn.addEventListener('click', () => {
  currentItem--;

  // When currentItem exceeds the given persons, it starts with last person
  if (currentItem < 0) {
    currentItem = reviews.length-1;
  }
  showPerson(currentItem);
 })

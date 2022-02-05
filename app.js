
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
      "Mauris sed enim nulla. faucibus, vel tempor dui dapibus. Nunc non hendrerit magna. Donec efficitur urna eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam ante. Proin arcu metus, placerat eget sapien in, tincidunt mattis diam. Praesent leo justo, auctor sed congue vel, feugiat eu enim. Vivamus eu fermentum est. Curabitur venenatis pellentesque faucibus. Mauris vel venenatis neque.",
    social: "https://twitter.com/parth_kawatra",
    project: ["React Task Maker", "https://github.com/parth2187/react-task-tracker"]
  },
  {
    id: 2,
    name: "Gundalf aka Bob",
    job: "web designer",
    img:
      "https://img-9gag-fun.9cache.com/photo/azm3d8p_700bwp.webp",
    text:
      "Nunc ornare lacus a purus cursus, Vestibulum tincidunt cursus sapien, sit amet tristique velit dignissim at. Nunc ac nulla diam. Vivamus vitae eleifend arcu. In tempor sagittis nulla, non pretium lectus vulputate at. Praesent eleifend sodales nibh, vitae volutpat tellus rhoncus et. Vivamus porttitor consectetur tempor. Nullam at lacus bibendum, semper metus ac, finibus libero. Nunc sed lacinia arcu.",
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
      "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Curabitur tristique turpis nisl, vitae this text is generated randomly because I don't want empty placeholder sorry Suspendisse consequat luctus ligula, eget elementum felis venenatis et. eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Curabitur tristique turpis nisl, vitae this text is generated randomly because I don't want empty placeholder sorry Suspendisse consequat luctus ligula, eget elementum felis venenatis et.",
    social: 'https://github.com/CometCoder192',
    project: ["IncrementDecrementJS", "https://cometcoder192.github.io/IncrementDecrementJS/"]
  }
];

let currentItem = 0; 

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

import { reviews } from './data.js'
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

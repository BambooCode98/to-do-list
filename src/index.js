'use strict';


import './style.css';

//generate the individual sections
import './projectDOM.js';
import './notesDOM.js';
import './listDOM.js';

//get objects for each section

import './projectObjects.js';
// import * as projectObs from './projectObjects.js';

//get general elements
const modal = document.querySelector('.modal');
const proBtn = document.querySelector('.proBtn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const closebtn = document.querySelector('.close-modal');
const form = document.forms["addbook"];
const choices = form.querySelector('#choices');

//extra elements for more functionality
// const closeSpace = document.querySelector('.modal');

//tab selection from dom

const protab = document.querySelector('#protab');
const notetab = document.querySelector('#notetab');
const listtab = document.querySelector('#listtab');

//page selection

const proPage = document.querySelector('.proPage');
const notePage = document.querySelector('.notePage');
const listPage = document.querySelector('.listPage');

// display choices of tab

protab.addEventListener('click', function() {
  proPage.style.display = "grid";
  notePage.style.display = "none";
  listPage.style.display = "none";
})

notetab.addEventListener('click', function() {
  proPage.style.display = "none";
  notePage.style.display = "block";
  listPage.style.display = "none";
})

listtab.addEventListener('click', function() {
  proPage.style.display = "none";
  notePage.style.display = "none";
  listPage.style.display = "block";
})

//modal stuff for each tab

proBtn.addEventListener('click', function() {
  modal.style.display = "block";
  choices.textContent = "Project Title:";
})

btn2.addEventListener('click', function() {
  modal.style.display = "block";
  choices.textContent = "Note Title:";
})

btn3.addEventListener('click', function() {
  modal.style.display = "block";
  choices.textContent = "List Title:";
})

closebtn.addEventListener('click', function() {
  modal.style.display = "none";
})

//object creation for each tab


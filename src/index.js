'use strict';


import './style.css';

//generate the individual sections
import './projectDOM.js';
import './notesDOM.js';
import './listDOM.js';

//get objects for each section

import * as projectObs from './projectObjects.js';

//get general elements
const modal = document.querySelector('.modal');
const proBtn = document.querySelector('.proBtn');
const closebtn = docuemnt.querySelector('.close-modal');

//tab selection from dom

const protab = document.querySelector('#protab');
const notetab = document.querySelector('#notetab');
const listtab = document.querySelector('#listtab');

//page selection

const proPage = document.querySelector('.proPage');
const notePage = document.querySelector('.notePage');
const listPage = document.querySelector('.listPage');

//form for each tab
// const

// display choices of tab

protab.addEventListener('click', function() {
  proPage.style.display = "block";
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
})

closebtn.addEventListener('click', function() {
  modal.style.display = "none";
})


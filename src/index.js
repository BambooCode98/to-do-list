'use strict';

import './style.css';

//generate the individual sections
import './forms.js';
import './projectDOM.js';
import './notesDOM.js';
import './listDOM.js';

//get objects for each section

import { storedData } from './projectDOM.js';
import { storedNoteData } from './notesDOM.js';
import { storedListData } from './listDOM.js';

//get general elements
const pmodal = document.querySelector('.project');
const nmodal = document.querySelector('.note');
const lmodal = document.querySelector('.list');
const proBtn = document.querySelector('.proBtn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const pclosebtn = document.querySelector('.projectx');
const nclosebtn = document.querySelector('.notex');
const lclosebtn = document.querySelector('.listx');
const pform = document.forms["project"];
const pchoice = pform.querySelector('#choices');
const nform = document.forms["note"];
const nchoice = nform.querySelector('#choices');
const lform = document.forms["list"];
const lchoice = lform.querySelector('#choices');

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
  proPage.style.display = "flex";
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

//modal for each tab

proBtn.addEventListener('click', function() {
  pmodal.style.display = "block";
  pchoice.textContent = "Project Title:";
})

btn2.addEventListener('click', function() {
  nmodal.style.display = "block";
  nchoice.textContent = "Note Title:";
})

btn3.addEventListener('click', function() {
  lmodal.style.display = "block";
  lchoice.textContent = "List Title:";
})

pclosebtn.addEventListener('click', function() {
  pmodal.style.display = "none";
})
  
nclosebtn.addEventListener('click', function() {
  nmodal.style.display = "none";
})

lclosebtn.addEventListener('click', function() {
  lmodal.style.display = "none";
})

//object creation for each tab


storedData();
storedNoteData();
storedListData();
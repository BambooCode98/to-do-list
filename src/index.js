'use strict';


import './style.css';

//generate the individual sections
import './listDOM.js';
import './notesDOM.js';
import './projectDOM.js';



//tab selection from dom

const protab = document.querySelector('#protab');
const notetab = document.querySelector('#notetab');
const listtab = document.querySelector('#listtab');

// display choices of tab

protab.addEventListener('click', function() {
  proPage.classList.remove('hidden');
  notePage.classList.add('hidden');
  listPage.classList.add('hidden');
})

notetab.addEventListener('click', function() {
  proPage.classList.add('hidden');
  notePage.classList.remove('hidden');
  listPage.classList.add('hidden');
})

listtab.addEventListener('click', function() {
  proPage.classList.add('hidden');
  notePage.classList.add('hidden');
  listPage.classList.remove('hidden');
})


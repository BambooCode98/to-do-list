'use strict';

import './notesObjects.js';

//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes
const notePage = document.createElement('div');
const btn2 = document.createElement('button');

const noteHeader = document.createElement('h1');
const notebox = document.createElement('div');
const noteTitle = document.createElement('h4');
const noteDesc = document.createElement('p');
const noteDate = document.createElement('p');
const notePriority = document.createElement('p');

notePage.classList.add('notePage');
btn2.classList.add('btn2');

//add elemtns to page

content.append(notePage);
notePage.append(noteHeader);
notePage.append(btn2);
// notePage.append(notebox);

//text

noteHeader.innerHTML = "Notes";
btn2.textContent = "+Notes";

















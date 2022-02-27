'use strict';

//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes
const notePage = document.createElement('div');

const noteHeader = document.createElement('h1');
const notebox = document.createElement('div');
const noteTitle = document.createElement('h4');
const noteDesc = document.createElement('p');
const noteDate = document.createElement('p');
const notePriority = document.createElement('p');

notePage.classList.add('notePage');


//add elemtns to page

content.append(notePage);
notePage.append(noteHeader);
notePage.append(notebox);

//text

noteHeader.innerHTML = "Notes";

















'use strict';

//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes
const proPage = document.createElement('div');

const projectHeader = document.createElement('h1');
const projectbox = document.createElement('div');
const projectTitle = document.createElement('h4');
const projectDesc = document.createElement('p');
const projectDate = document.createElement('p');
const projectPriority = document.createElement('p');

proPage.classList.add('proPage');


//add elemtns to page

content.append(proPage);
proPage.append(projectHeader);
proPage.append(projectbox);


//text

projectHeader.innerHTML = "Project";




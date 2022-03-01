'use strict';

// import './projectObjects.js';

//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes
const proPage = document.createElement('div');
const newbtn = document.createElement('button');

const projectHeader = document.createElement('h1');
// const projectbox = document.createElement('div');
// const projectTitle = document.createElement('h4');
// const projectDesc = document.createElement('p');
// const projectDate = document.createElement('p');
// const projectPriority = document.createElement('p');

proPage.classList.add('proPage');
newbtn.classList.add('proBtn');
projectHeader.classList.add()
// projectbox.classList.add('pbox');
// projectTitle.classList.add('ptitle');
// projectDesc.classList.add('pdesc');
// projectDate.classList.add('pdate');



//add elements to page

content.append(proPage);
proPage.append(projectHeader);
proPage.append(newbtn);
// proPage.append(projectbox);

//text

projectHeader.innerHTML = "Project";
newbtn.textContent = "+New Project";





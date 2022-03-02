'use strict';

import { projectList } from './projectObjects.js';

//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes
const proPage = document.createElement('div');
const newbtn = document.createElement('button');
// const deleteBtn = document.createElement('button');
const modal = document.querySelector('.modal');
const projectHeader = document.createElement('h1');

proPage.classList.add('proPage');
newbtn.classList.add('proBtn');
projectHeader.classList.add('.pheader');

export function projectElements(project) {
  const projectbox = document.createElement('div');
  const ptitle = document.createElement('h4');
  const pdesc = document.createElement('p');
  const pdate = document.createElement('p');
  const deleteBtn = document.createElement('button');


  projectbox.classList.add('pbox');

  modal.style.display = 'none';

  proPage.append(projectbox);
  projectbox.append(ptitle);
  ptitle.textContent = 'Project: ' + project.title;
  projectbox.append(pdesc);
  pdesc.textContent = 'Description: ' + project.description;
  projectbox.append(pdate);
  pdate.textContent = 'Date: ' + project.date;
  projectbox.append(deleteBtn);
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function() {
    projectbox.remove(this);
    projectList.pop(this);
    console.log(projectList);
    
  })
}

//add elements to page

content.append(proPage);
proPage.append(projectHeader);
proPage.append(newbtn);
// proPage.append(projectbox);

// add text parts

projectHeader.innerHTML = "Project";
newbtn.textContent = "+New Project";





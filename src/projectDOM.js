'use strict';

import { projectList, getData } from './projectObjects.js';

//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes

const proPage = document.createElement('div');
const projectHeader = document.createElement('h1');
const newbtn = document.createElement('button');
// const deleteBtn = document.createElement('button');
const modal = document.querySelector('.modal');

proPage.classList.add('proPage');
projectHeader.classList.add('pheader');
newbtn.classList.add('proBtn');

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
// proPage.append(newbtn);
proPage.append(newbtn);
// proPage.append(projectbox);

// add text parts

projectHeader.textContent = "Project";
newbtn.textContent = "+New Project";



export function storedData() {
  let data = getData();
  console.log(data);
  for(let i = 0; i < data.length; i++) {

    const databox = document.createElement('div');
    const dataTitle = document.createElement('h4');
    const dataDesc = document.createElement('p');
    const dataDate = document.createElement('p');
    const deleteBtn = document.createElement('button');
  
  
    databox.classList.add('pbox');
  
    modal.style.display = 'none';
  
    proPage.append(databox);
    databox.append(dataTitle);
    dataTitle.textContent = 'Project: ' + data[i].title;
    databox.append(dataDesc);
    dataDesc.textContent = 'Description: ' + data[i].description;
    databox.append(dataDate);
    dataDate.textContent = 'Date: ' + data[i].date;
    databox.append(deleteBtn);
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function() {
      databox.remove(this);
      projectList.pop(this);
      console.log(projectList);
      
    })
  }
}

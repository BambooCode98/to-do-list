'use strict';

//project creation

export function createProject(title, description, date) {
  return {
    title, 
    description,
    date,
  };
}

// class example - working
// class Project {
//   constructor(title, description, date) {
//     this.title = title; 
//     this.description = description; 
//     this.date = date;
//   }
// }

//get elements
const form = document.forms["addbook"];
const proPage = document.querySelector('.proPage');
console.log(proPage);

//create project

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = form.querySelector('input[id="title"]').value;
  const description = form.querySelector('textarea[id="description"]').value;
  const date = form.querySelector('input[id="date"]').value;

  const project = createProject(title, description, date);
  // const project = new Project(title, description, date);
  console.log(project);

  const projectbox = document.createElement('div');
  const ptitle = document.createElement('h4');
  const pdesc = document.createElement('p');
  const pdate = document.createElement('p');

  projectbox.classList.add('pbox')

  proPage.append(projectbox);
  projectbox.append(ptitle);
  ptitle.textContent = 'Project: ' + project.title;
  projectbox.append(pdesc);
  pdesc.textContent = 'Description: ' + project.description;
  projectbox.append(pdate);
  pdate.textContent = 'Date: ' + project.date;


})



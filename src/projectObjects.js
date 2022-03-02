'use strict';

import { projectElements } from "./projectDOM";

//get elements

const form = document.forms["addbook"];
const proPage = document.querySelector('.proPage');

export let projectList = [];

//project creation

export function createProject(title, description, date) {
  return {
    title, 
    description,
    date,
  };
}

function makeProject() {
  const title = form.querySelector('input[id="title"]').value;
  const description = form.querySelector('textarea[id="description"]').value;
  const date = form.querySelector('input[id="date"]').value;

  const project = createProject(title, description, date);
  projectList.push(project);

  projectElements(project);

}

function saveData() {
  sessionStorage.setItem('projects', JSON.stringify(projectList));
}


//create projects

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  makeProject();
  saveData();
  console.log(projectList);
})


export function getData() {
  let data = JSON.parse(sessionStorage.getItem('projects'));
  // console.log(data);
  return data;
}

// getData();

// console.log(getData());

console.log(projectList);




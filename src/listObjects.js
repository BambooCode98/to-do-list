'use strict';

import { listElements } from "./listDOM";
import { formCreater } from './forms.js';

formCreater("list");

//get elements

const form = document.forms["list"];

export let theList = [];

//project creation

export function createList(title, description, date) {
  return {
    title, 
    description,
    date,
  };
}

function saveListData() {
  sessionStorage.setItem('lists', JSON.stringify(theList));
}

function makeList() {
  const title = form.querySelector('input[id="title"]').value;
  const description = form.querySelector('textarea[id="descriptionBox"]').value;
  const date = form.querySelector('input[id="date"]').value;

  const list = createList(title, description, date);
  theList.push(list);

  listElements(list);
  saveListData();

}



//create projects

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  makeList();
})


export function getListData() {
  let ldata = JSON.parse(sessionStorage.getItem('lists'));
  return ldata;
}

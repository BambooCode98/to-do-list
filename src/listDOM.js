'use strict';

import "./listObjects.js";

let p = document.createElement('p')
p.innerHTML = "hi"//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes
const listPage = document.createElement('div');

const listHeader = document.createElement('h1');
const listbox = document.createElement('div');
const listTitle = document.createElement('h4');
const listDesc = document.createElement('p');
const listDate = document.createElement('p');
const listPriority = document.createElement('p');

listPage.classList.add('listPage');




// add elements to page

content.append(listPage);
listPage.append(listHeader);

//text

listHeader.innerHTML = "Lists";

















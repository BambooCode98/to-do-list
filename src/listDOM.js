'use strict';

import "./listObjects.js";

let p = document.createElement('p')
p.innerHTML = "hi"//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes
const listPage = document.createElement('div');
const btn3 = document.createElement('button');

const listHeader = document.createElement('h1');
const listbox = document.createElement('div');
const listTitle = document.createElement('h4');
const listDesc = document.createElement('p');
const listDate = document.createElement('p');
const listPriority = document.createElement('p');

listPage.classList.add('listPage');
btn3.classList.add('btn3');



// add elements to page

content.append(listPage);
listPage.append(listHeader);
listPage.append(btn3);

//text

listHeader.innerHTML = "Lists";
btn3.textContent = "+New List";

















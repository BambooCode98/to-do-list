'use strict';

import { noteList, getNoteData } from './notesObjects.js';



//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes
const notePage = document.createElement('div');
const btn2 = document.createElement('button');
const modal = document.querySelector('.modal');
const noteHeader = document.createElement('h1');

export function noteElements(note) {
  const notebox = document.createElement('div');
  const ntitle = document.createElement('h4');
  const ndesc = document.createElement('p');
  const ndate = document.createElement('p');
  const deleteBtn = document.createElement('button');


  notebox.classList.add('nbox');

  modal.style.display = 'none';

  notePage.append(notebox);
  notebox.append(ntitle);
  ntitle.textContent = 'Title: ' + note.title;
  notebox.append(ndesc);
  ndesc.textContent = 'Note Description: ' + note.description;
  notebox.append(ndate);
  ndate.textContent = 'Date: ' + note.date;
  notebox.append(deleteBtn);
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function() {
    notebox.remove(this);
    noteList.pop(this);
    
  })
}


notePage.classList.add('notePage');
noteHeader.classList.add('nheader')
btn2.classList.add('btn2');

//add elemtns to page

content.append(notePage);
notePage.append(noteHeader);
notePage.append(btn2);
// notePage.append(notebox);

//text

noteHeader.innerHTML = "Notes";
btn2.textContent = "+New Note";



export function storedNoteData() {
  let ndata = getNoteData();
  console.log(ndata);
  for(let i = 0; i < ndata.length; i++) {

    const ndatabox = document.createElement('div');
    const ndataTitle = document.createElement('h4');
    const ndataDesc = document.createElement('p');
    const ndataDate = document.createElement('p');
    const ndeleteBtn = document.createElement('button');
  
  
    ndatabox.classList.add('nbox');
  
    modal.style.display = 'none';
  
    notePage.append(ndatabox);
    ndatabox.append(ndataTitle);
    ndataTitle.textContent = 'Title: ' + ndata[i].title;
    ndatabox.append(ndataDesc);
    ndataDesc.textContent = 'Note Description: ' + ndata[i].description;
    ndatabox.append(ndataDate);
    ndataDate.textContent = 'Date: ' + ndata[i].date;
    ndatabox.append(ndeleteBtn);
    ndeleteBtn.textContent = 'Delete';

    ndeleteBtn.addEventListener('click', function() {
      ndatabox.remove(this);
      noteList.pop(this);
      console.log(noteList);
      
    })
  }
}





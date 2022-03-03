'use strict';

//form templates

// let id = "";
const content = document.querySelector('.content-body');

export function formCreater(id) {

  const modal = document.createElement("div");
  const modalContent = document.createElement("div");
  const closebtn = document.createElement('span');
  const form = document.createElement('form');
  const input1 = document.createElement('input');
  const textArea = document.createElement('textarea');
  const input3 = document.createElement('input');
  const choices = document.createElement('p');
  const description = document.createElement('p');
  const date = document.createElement('p');
  const lb1 = document.createElement('br');
  const lb2 = document.createElement('br');
  const lb3 = document.createElement('br');
  const button = document.createElement('button');

  modal.classList.add(id);
  modalContent.classList.add('modal-content');
  closebtn.classList.add(id + "x");
  form.setAttribute("id", id);
  input1.setAttribute("id", "title");
  textArea.setAttribute("id", "descriptionBox");
  textArea.setAttribute("form", id);
  textArea.setAttribute("placeholder", "Enter a description...");
  textArea.setAttribute("rows", "4");
  textArea.setAttribute("columns", "25");
  input3.setAttribute("id", "date");
  choices.setAttribute("id", "choices");
  description.setAttribute("id", "description");
  date.setAttribute("id", "date");
  button.setAttribute("id", "buttonModal");

  content.append(modal);
  modal.append(modalContent);
  modalContent.append(closebtn);
  modalContent.append(form);
  form.append(choices);
  form.append(input1);
  form.append(lb1);
  form.append(description);
  form.append(textArea);
  form.append(lb2);
  form.append(date);
  form.append(input3);
  form.append(lb3);
  form.append(button);

  closebtn.textContent = "X";
  description.textContent = "Description:";
  date.textContent = "Date:";
  button.textContent = "Add";

}

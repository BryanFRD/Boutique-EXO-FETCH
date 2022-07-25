import { DataManager } from "../helpers/DataManager.helper.js";

const dataManager = new DataManager(['category', 'product']);
//dataManager.initDataStorage();

let categories = dataManager.getAll('category');

let test = dataManager.getOne('category', 1);

console.log(test.title);

test.setProp('title', 'nouveau titre');

dataManager.update(test);

console.log(test.title);

init();

function init() {
  for(const category of categories){
    {
      let template = navBarLink.querySelector(".template").cloneNode(true);
      template.hidden = false;
      template.classList.remove("template");
    
      let templateA = template.querySelector("a");
      templateA.href += category.id;
      templateA.innerText = category.title;
    
      navBarLink.appendChild(template);
    }
    
    {
      let template = categoryDiv.querySelector(".template").cloneNode(true);
      template.hidden = false;
      template.classList.remove("template");
      
      let templateA = template.querySelector("a");
      templateA.href += category.id;
      
      template.querySelector(".card-img-top").src = category.image;
      template.querySelector(".card-title").innerText = category.title;
      template.querySelector(".card-text").innerText = category.description
      
      categoryDiv.appendChild(template);
    }
  }
}
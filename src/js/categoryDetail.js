import { DataManager } from "../helpers/DataManager.helper";

const params = new URLSearchParams(document.location.search);
const shownCategory = params.get("categoryId");

const dataManager = new DataManager();
let categories = dataManager.getAll('category');
let products = dataManager.getAll('product');

init();

function init() {
  for(const category of categories){
    let template = navBarLink.querySelector(".template").cloneNode(true);
    template.hidden = false;
    template.classList.remove("template");
    
    let templateA = template.querySelector("a");
    templateA.href += category.id;
    templateA.innerText = category.title;
  
    navBarLink.appendChild(template);
  }
  
  title.innerText = dataManager.getOne('category', shownCategory).title;
  
  for(const product of products){
    if(product.category_id != shownCategory){
      continue;
    }
    
    let template = productDiv.querySelector(".template").cloneNode(true);
    template.hidden = false;
    template.classList.remove("template");
    
    let templateA = template.querySelector("a");
    templateA.href += product.id;
      
    template.querySelector(".card-img-top").src = product.image;
    template.querySelector(".card-title").innerText = product.title;
    template.querySelector(".card-text").innerText = product.description
      
    productDiv.appendChild(template);
  }
}
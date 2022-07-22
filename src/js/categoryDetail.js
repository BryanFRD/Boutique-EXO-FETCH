import { DataManager } from "../helpers/DataManager.helper";

const dataManager = new DataManager();
let categories = dataManager.getAll('category');
let products = dataManager.getAll('product');

const params = new URLSearchParams(document.location.search);
const shownCategory = dataManager.getOne('category', params.get("categoryId"));

document.title = shownCategory.title;

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
  
  title.innerText = shownCategory.title;
  
  for(const product of shownCategory.getProducts()){
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
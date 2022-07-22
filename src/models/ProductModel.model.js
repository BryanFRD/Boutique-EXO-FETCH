import { Model } from "./Model.model.js";

export class Product extends Model {
  
  id = -1;
  title = '';
  price = NaN;
  description = '';
  image = '';
  category_id = '';
  
  constructor(props){
    super();
    
    this.assign(props);
  }
  
  getCategory(){
    return this.dataManager.getOne('category', this.category_id);
  }
  
}
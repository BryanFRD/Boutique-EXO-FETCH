import { Model } from "./Model.model.js";

export class Category extends Model {
  
  id = -1;
  title = '';
  description = '';
  image = '';
  
  constructor(props){
    super();
    
    this.assign(props);
  }
  
  getProducts(){
    return this.dataManager.getAll('product')?.filter(item => item.category_id == this.id);
  }
  
}
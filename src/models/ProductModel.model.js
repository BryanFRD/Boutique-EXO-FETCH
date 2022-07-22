import { DataManager } from "../helpers/DataManager.helper.js";
import { Model } from "./Model.model.js";

export class Product extends Model {
  
  id = -1;
  title = '';
  price = NaN;
  description = '';
  image = '';
  category_id = '';
  
  constructor(props){
    super(props);
    
    for(const item in props){
      if(!this.hasOwnProperty(item)){
        delete props[item];
      }
    }
    
    Object.assign(this, props);
  }
  
  getCategory(){
    return new DataManager().getOne('category', this.category_id);
  }
  
}
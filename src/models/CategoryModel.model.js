import { DataManager } from "../helpers/DataManager.helper.js";
import { Model } from "./Model.model.js";

export class Category extends Model {
  
  id = -1;
  title = '';
  description = '';
  image = '';
  
  constructor(props){
    super(props);
    
    for(const item in props){
      if(!this.hasOwnProperty(item)){
        delete props[item];
      }
    }
    
    Object.assign(this, props);
  }
  
}
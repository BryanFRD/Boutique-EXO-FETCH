import { DataManager } from "../helpers/DataManager.helper.js";

export class Model {
  
  constructor(){
    this.dataManager = new DataManager();
  }
  
  assign = (props) => {
    for(const item in props){
      if(!this.hasOwnProperty(item)){
        delete props[item];
      }
    }
    
    Object.assign(this, props);
  }
  
  setProp(key, value){
    if(key == 'id'){
      return;
    }
    
    this[key] = value;
  }
  
}
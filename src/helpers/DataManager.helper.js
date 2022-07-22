import { Product } from "../models/ProductModel.model.js";
import { Category } from "../models/CategoryModel.model.js";

export class DataManager {
  
  folder = '';
  files;
  
  constructor(files, folder = 'data'){
    this.files = files;
    this.folder = folder;
  }
  
  initDataStorage = async () => {
    let data = {};
    for(const file of this.files){
      data[file + 'Data'] = await this.readJsonFile(file);
    }
    localStorage.setItem('data', JSON.stringify(data));
    
  }
  
  readJsonFile = async (file) => {
    let items = [];
    
    await fetch(`./src/${this.folder}/${file}.json`)
      .then(response => items = response.json());
      
    return items;
  }
  
  getAll = (table) => {
    const data = JSON.parse(localStorage.getItem('data'));
    
    const row = data[table + 'Data']?.map(item => {
      switch(table){
        case 'category':
          return new Category(item);
        case 'product':
          return new Product(item);
      }
    });
    
    return row;
  }
  
  getOne = (table, id) => {
    const data = JSON.parse(localStorage.getItem('data'));
    
    const item = data[table + 'Data']?.find(item => item.id == id);
    if(!item){
      return null;
    }
    
    switch(table){
      case 'category':
        return new Category(item);
      case 'product':
        return new Product(item);
    }
  }
  
}
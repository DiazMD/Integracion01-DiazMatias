import { productsModel } from "../models/products.model.js";

class ProductsManager {
    async findAll (){
        const response = await productsModel.find().lean()
        return response;
    }
    async findById (id){
        const response = await productsModel.findById(id)
        return response;
    }
    async createOne (obj){
        const response = await productsModel.create(obj);
        return response;
    }
    async updateOne (id, obj){
        const response = await productsModel.updateOne({_id:id}, obj)
        return response;
    }
    async deleteOne (id){
        const response = await productsModel.deleteOne({_id:id})
        return response;
    }
}

export const productsManager = new ProductsManager()
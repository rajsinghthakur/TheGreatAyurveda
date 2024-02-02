import Product from '../Models/product.model.js';

export const addProduct = (request, response, next) => {
    let filename = request.file.filename;
    let title = request.body.title;
    let brand = request.body.brand;
    let price = request.body.price;
    let description = request.body.description;
    let imageUrl = "images/" + filename;
    let categoryId = request.body.categoryId;

    let product = new Product(null, title, brand, price, description, imageUrl, categoryId);

    product.addProduct()
        .then(result => {
            return response.status(200).json({ message: 'addProduct Success' });
        }).catch(err => {
            return response.status(500).json({ error: 'Internal Server Error', error: err });
        });
}

export const removeProduct = (request, response, next) => {
    let id = request.body.id;

    Product.removeProduct(id)
        .then(result => {
            if (result.affectedRows)
                return response.status(200).json({ message: 'removeProduct Success' });
            return response.status(401).json({ message: 'unauthorized request......' });
        }).catch(err => {
            return response.status(500).json({ error: 'Internal Server Error', error: err });
        });
}

export const updateProduct = (request, response, next) => {
    let filename = request.file.filename;
    let id = request.body.id;
    let title = request.body.title;
    let brand = request.body.brand;
    let price = request.body.price;
    let description = request.body.description;
    let imageUrl = "images/" + filename;
    let categoryId = request.body.categoryId;

    let product = new Product(id, title, brand, price, description, imageUrl, categoryId);

    product.updateProduct()
        .then(result => {
            if (result.affectedRows != 0)
                return response.status(200).json({ message: "updatedProduct Success" });
            return response.status(401).json({ message: "unauthorized request......" });
        }).catch(err => {
            return response.status(500).json({ error: 'Internal Server Error', error: err });
        });
}

export const viewAllProduct = (request, response, next) => {

    Product.viewAllProduct()
        .then(result => {
            return response.status(200).json({ Data: result });
        }).catch(err => {
            return response.status(500).json({ error: 'Internal Server Error', error: err });
        });
}

export const viewParticularProducts = (request, response, next) => {
    let title = request.body.title;
    Product.viewParticularProducts(title)
        .then(result => {
            if (result.length)
            return response.status(200).json({ Data: result });
            return response.status(401).json({ message: 'unauthorized request......' });
        }).catch(err => {
            return response.status(500).json({ error: 'Internal Server Error', error: err });
        });
}
import Category from '../Models/category.model.js';

export const addCategory = (request, response, next) => {
    let categoryName = request.body.categoryName;

    let category = new Category(null, categoryName);

    category.addCategory()
        .then(result => {
            return response.status(200).json({ message: 'CategoryAdd Success' });
        }).catch(err => {
            return response.status(500).json({ error: 'Internal Server Error', error: err });
        });
}

export const searchCategory = (request, response, next) => {
    let categoryName = request.body.categoryName;

    let category = new Category(null, categoryName);

    category.searchCategory()
        .then(result => {
            if (result.length)
                return response.status(200).json({ Data: result });
            return response.status(401).json({ category: 'unauthorized request.....' });
        }).catch(err => {
            return response.status(500).json({ error: 'Internal Server Error', error: err });
        });
}
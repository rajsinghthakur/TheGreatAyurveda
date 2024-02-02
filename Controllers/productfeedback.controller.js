import Feedback from '../Models/productfeedback.model.js';

export const feedback = (request, response, next) => {
    let ratingStar = request.body.ratingStar;
    let reviewText = request.body.reviewText;
    let userId = request.body.userId;
    let productId = request.body.productId;

    let feedback = new Feedback(null, ratingStar, reviewText, userId, productId);

    feedback.productfeedback()
        .then(result => {
            return response.status(200).json({ message: 'productfeedback Success' });
        }).catch(err => {
            return response.status(500).json({ error: 'Internal Server Error', error: err });
        });
}
import Admin from '../Models/admin.model.js';

export const signUp = (request, response, next) => {
    let adminName = request.body.adminName;
    let password = request.body.password;
    let email = request.body.email;

    // admin :{adminName: 'test', password: '12345'}
    let admin = new Admin(null, adminName, password, email);

    admin.signUp()
        .then(result => {
            return response.status(200).json({ message: 'Signup success' });
        }).catch(err => {
            return response.status(500).json({ error: 'Internal Server Error', error: err });
        });
}

export const signIn = (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    let admin = new Admin(null, null, password, email);

    admin.signIn()
        .then(result => {
            console.log(result);
            if (result.length != 0)
                return response.status(200).json({ message: 'Sign in success', data: result[0] });
            return response.status(401).json({ error: 'Unauthorized user' });
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error", error: err });
        });
}
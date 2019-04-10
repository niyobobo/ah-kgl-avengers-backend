// here we create the user and catch the token
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

/*
* login Method
* Log in the User to get the token that can be used in other files
* The method will be called where needed the token after login.
*/
const getToken = () => {
  const user = {
    username: 'prince',
    email: 'prince@gmail.com',
    password: 'hello',
  };
  return chai.request(app)
    .post('/api/users/signup')
    .send(user);
};

export default getToken;

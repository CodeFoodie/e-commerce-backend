/* eslint-disable func-names */
import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';
import fs from 'fs';
// eslint-disable-next-line no-unused-vars
import app from '../../src/app';
import { status, messages } from '../../src/utils';


chai.use(chaiHttp);

chai.should();
const { expect } = chai;

const api = chai.request('http://localhost:5000');

const signUpRoute = '/api/v1/users/signup';
const signInRoute = '/api/v1/users/signin';
const forgotPasswordRoute = '/api/v1/users/forgotpassword';
const updatePasswordRoute = '/api/v1/users/updatepassword';

const password = faker.internet.password();

let theToken;

const theUser = {
  email: faker.internet.email(),
  mobile_number: faker.phone.phoneNumber(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  password,
  confirmPassword: password,
};

const dummyUser = {};

describe('Users Authentication Tests', () => {
  // User Sign up Validation Test
  it('should NOT let user sign up without email', (done) => {
    const user = {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: 'invalidMail',
      mobile_number: faker.phone.phoneNumber(),
    };
    api.post(signUpRoute).send(user).end((err, res) => {
      res.should.have.status(status.unprocessable);
      res.body.should.have.property('errors');
      const hasEmailErr = !!res.body.errors.email;
      hasEmailErr.should.equal(true);
      done();
    });
  });

  it('Should remove white spaces', (done) => {
    const user = {
      first_name: '             ',
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      mobile_number: faker.phone.phoneNumber(),
    };
    api.post(signUpRoute).send(user).end((err, res) => {
      res.should.have.status(status.unprocessable);
      res.body.should.have.property('errors');
      const hasFirstNameProp = !!res.body.errors.first_name;
      hasFirstNameProp.should.equal(true);
      done();
    });
  });

  it('Should return error for missing parameters: last_name', (done) => {
    const user = dummyUser;
    user.last_name = '';
    api.post(signUpRoute).send(user).end((err, res) => {
      res.should.have.status(status.unprocessable);
      res.body.should.have.property('errors');
      const hasLastNameProp = !!res.body.errors.last_name;
      hasLastNameProp.should.equal(true);
      done();
    });
  });

  it('Should return error for missing parameters: mobile_number', (done) => {
    const user = dummyUser;
    user.mobile_number = '';
    api.post(signUpRoute).send(user).end((err, res) => {
      res.should.have.status(status.unprocessable);
      res.body.should.have.property('errors');
      const hasMobileNumberProp = !!res.body.errors.mobile_number;
      hasMobileNumberProp.should.equal(true);
      done();
    });
  });

  it('should let users sign up successfully', function (done) {
    this.timeout(20000);
    api.post(signUpRoute).send(theUser).end((_err, res) => {
      res.should.have.status(status.created);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('email');
      res.body.data.should.have.property('first_name');
      res.body.data.should.have.property('last_name');
      res.body.data.should.have.property('mobile_number');
      res.body.data.should.have.property('updatedAt');
      res.body.data.should.have.property('createdAt');
      res.body.data.should.have.property('is_verified');
      res.body.data.should.have.property('token');
      done();
    });
  });

  it('Should conflict when user already exist', async () => {
    api.post(signUpRoute).send(theUser).end((_err, res) => {
      res.should.have.status(status.conflict);
    });
  });

  // User Sign in Validation Test
  it('Should return error for missing parameters', (done) => {
    const user = {
      email: faker.internet.email(),
    };
    api.post(signInRoute).send(user).end((_err, res) => {
      res.should.have.status(status.unprocessable);
      res.body.should.have.property('errors');
      done();
    });
  });

  it('Should return a response if user is not found', (done) => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    api.post(signInRoute).send(user).end((_err, res) => {
      res.should.have.status(status.unauthorized);
      res.body.should.be.a('object');
      res.body.should.have.property('status').eql(status.unauthorized);
      res.body.should.have.property('message').eql(messages.signIn.invalid);
      done();
    });
  });

  it('Should return a response if user is not verified', (done) => {
    const user = {
      email: theUser.email,
      password: theUser.password
    };
    api.post(signInRoute).send(user).end((_err, res) => {
      res.should.have.status(status.unauthorized);
      res.body.should.be.a('object');
      res.body.should.have.property('status').eql(status.unauthorized);
      res.body.should.have.property('message').eql(messages.signIn.unverified);
      done();
    });
  });

  it('Should validate Email for forgot-password request', (done) => {
    const user = {
      email: 'invalidEmail',
    };
    api.post(forgotPasswordRoute).send(user).end((_err, res) => {
      res.should.have.status(status.unprocessable);
      res.body.should.have.property('errors');
      const hasEmailErr = !!res.body.errors.email;
      hasEmailErr.should.equal(true);
      done();
    });
  });

  it('Should send forgot-password email successfully', function (done) {
    this.timeout(20000);
    const user = {
      email: theUser.email,
    };
    api.post(forgotPasswordRoute).send(user).end((_err, res) => {
      res.body.should.have.property('status');
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('first_name');
      res.body.data.should.have.property('email');
      res.body.data.should.have.property('token');
      fs.writeFileSync(`${__dirname}/../fakeData/token.txt`, res.body.data.token, () => {
      });
      done();
    });
  });

  it('Should return error for updating with invalid token', async () => {
    theToken = await fs.readFileSync(`${__dirname}/../fakeData/token.txt`);

    const user = {
      password: 'xxx',
    };
    api.put(updatePasswordRoute).set('authorization', 'xxxxxxx').send(user).end((_err, res) => {
      res.should.have.status(status.unauthorized);
      res.body.should.have.property('message').eql('Access denied.');
    });
  });

  it('Should return error for updating with weak password', async () => {
    const user = {
      password: 'xxx',
    };
    api.put(updatePasswordRoute).set('authorization', `bearer ${theToken}`).send(user).end((_err, res) => {
      res.should.have.status(status.unprocessable);
      res.body.should.have.property('errors');
      const hasPasswordErr = !!res.body.errors.password;
      hasPasswordErr.should.equal(true);
    });
  });

  it('Should return error for updating without password confirmation', async () => {
    const user = {
      password: theUser.password,
    };
    api.put(updatePasswordRoute).set('authorization', `bearer ${theToken}`).send(user).end((_err, res) => {
      res.should.have.status(status.unprocessable);
      res.body.should.have.property('errors');
      res.body.errors.should.have.property('confirmPassword').eql('Password confirmation does not match');
    });
  });

  it('Should update user password successfuly', function (done) {
    this.timeout(20000);
    const user = {
      password: theUser.password,
      confirmPassword: theUser.confirmPassword
    };
    api.put(updatePasswordRoute).set('authorization', `bearer ${theToken}`).send(user).end((_err, res) => {
      res.should.have.status(status.success);
      res.body.should.have.property('message').eql('Password Updated successful. login to update your profile');
      res.body.data.should.have.property('is_verified').eql(true);
      done();
    });
  });

  it('Should return error for invalid User Sign In data', (done) => {
    const user = {
      email: 'invalidMail',
      password: faker.internet.password()
    };
    api.post(signInRoute).send(user).end((_err, res) => {
      res.should.have.status(status.unprocessable);
      res.body.should.have.property('errors');
      const hasEmailErr = !!res.body.errors.email;
      hasEmailErr.should.equal(true);
      done();
    });
  });

  it('It response if user password is not valid', function (done) {
    this.timeout(20000);
    const user = {
      email: theUser.email,
      password: faker.internet.password()
    };
    api.post(signInRoute).send(user).end((_err, res) => {
      res.should.have.status(status.unauthorized);
      res.body.should.have.property('message').eql(messages.signIn.invalid);
      done();
    });
  });

  it('Should Successfuly sign in user', function (done) {
    this.timeout(20000);
    const user = {
      email: theUser.email,
      password: theUser.password,
    };
    api.post(signInRoute).send(user).end((_err, res) => {
      res.should.have.status(status.success);
      res.body.should.have.property('message').eql(messages.signIn.success);
      expect(res.body)
        .to.have.nested.property('data')
        .that.includes.all.keys(['id', 'email', 'first_name', 'last_name', 'mobile_number', 'is_verified', 'local_government_area', 'state', 'address',
          'token']);
      done();
    });
  });
});

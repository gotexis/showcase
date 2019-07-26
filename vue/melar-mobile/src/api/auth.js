// as per github: vue-django-rest-auth

import session from './session';

export default {
  createAccount(username, password, email) {
    return session.post('/registration/', { username, password, email });
  },
  changeAccountPassword(password1, password2) {
    return session.post('/auth/password/change/', { password1, password2 });
  },
  sendAccountPasswordResetEmail(email) {
    return session.post('/auth/password/reset/', { email });
  },
  resetAccountPassword(uid, token, password) { // eslint-disable-line camelcase
    return session.post('/auth/password/reset/confirm/', { uid, token, password });
  },
  getAccountDetails() {
    return session.get('/auth/user/');
  },
  updateAccountDetails(data) {
    return session.patch('/auth/user/', data);
  },
  verifyAccountEmail(key) {
    return session.post('/registration/verify-email/', { key });
  },
};

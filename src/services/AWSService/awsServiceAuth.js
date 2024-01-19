import awsconfig from './aws-exports';
import Amplify, { Auth } from 'aws-amplify';
Amplify.configure(awsconfig);

export default {
  signIn(username, password) {
    const user = Auth.signIn(username, password).then((value) => {
      return true;
    })
      .catch((e) => {
        return false;
      });
    return user
  },
  signOut() {
    const user = Auth.signOut();
    return user
  },
  signUp(username, name, family_name, password, email) {

    const user = Auth.signUp({
      username,
      password,
      attributes: {
        name, family_name, email
      }
    })
    return user
  },
  confirmSignUp(username, code) {
    const result = Auth.confirmSignUp(username, code)
    return result
  },
  resendSignUp(username) {
    const result = Auth.resendSignUp(username)
    return result
  },
  forgotPassword(username) {
    const result = Auth.forgotPassword(username)
    return result
  },
  forgotPasswordSubmit(username, code, new_password) {
    const result = Auth.forgotPasswordSubmit(username, code, new_password)
    return result
  },
  currentSession() {
    const result = Auth.currentSession()
    return result
  }
}
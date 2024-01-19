import Api from '../Api';

export default {
  getCenters() {
    let token = localStorage.getItem('TOKEN_USER');
    return Api(token).get(`/user/v1/centers/`).then(response => { return response.data; }).catch(function (error) {
      return error.request.status
    });
  },
};
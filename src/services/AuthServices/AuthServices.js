import Api from './Api';
import config from '@/config';
import itpServices from "@/services/ItpServices/itpServices";


const auth = `{
	"client_id": "${config.oauth.clientId}",
	"client_secret": "${config.oauth.clientSecret}",
	"grant_type": "${config.oauth.grantType}"
  }`

async function init() {
  await itpServices.getToken();
}

init()

export default {
  requestTokenUser() {
    return Api().post('/user/oauth2/token', auth).then(response => {
      localStorage.setItem('TOKEN_USER', response.data.access_token);
      return response.data;
    })
  },
  requestTokenSkills() {
    return Api().post('/skills/oauth2/token', auth).then(response => {
      localStorage.setItem('TOKEN_SKILLS', response.data.access_token);
      return response.data;
    })
  }
};

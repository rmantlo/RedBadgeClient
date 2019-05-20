export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {

  case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:3000'
    break;

  //running on heroku
  //case is heroku url of client
  case 'fitness-together-client.herokuapp.com':
    //set url to heroku server url
    APIURL = 'https://fitness-together.herokuapp.com'

}

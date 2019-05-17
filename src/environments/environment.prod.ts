export let APIURL = '';

switch (window.location.hostname) {
  case 'fitness-together-client.heroku.com':
    APIURL = 'https://fitness-together.heroku.com'
    break;
  default:
    APIURL = 'http://localhost:3000';
}
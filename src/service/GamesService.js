import axios from 'axios';
import log from 'electron-log';

export default class GamesService {

  // HTTP GET request to 
  async getGamesByDate(params = {}) {
    log.info('Calling service for games results of a given date');
    const config = {
      ...this.Config,
      ...{
        method: 'get',
        url: 'http://127.0.0.1:5000/date',
        params,
      },
    };
    return axios(config);
  }
  // HTTP POST request for 
  async postData(data) {
    log.info('Calling service to post ...');
    const config = {
      ...this.Config,
      ...{
        method: 'post',
        url: 'http://127.0.0.1:5000/sth',
        data,
      },
    };
    return axios(config);
  }
  }

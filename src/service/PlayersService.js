import axios from "axios";

export default class PlayersService {
  // HTTP GET request to
  async getPlayerById(id) {
    console.log("Calling service for games results of a given date");
    const config = {
      ...this.Config,
      ...{
        method: "get",
        url: `http://127.0.0.1:5000/stats/player/${id}`,
      },
    };
    return await axios(config);
  }

  async getPlayers() {
    console.log("Calling service for games results of a given date");
    const config = {
      ...this.Config,
      ...{
        method: "get",
        url: `http://127.0.0.1:5000/stats/player`,
      },
    };
    return await axios(config);
  }

  // HTTP POST request for
  async postData(data) {
    console.log("Calling service to post ...");
    const config = {
      ...this.Config,
      ...{
        method: "post",
        url: "http://127.0.0.1:5000/sth",
        data,
      },
    };
    return axios(config);
  }
}

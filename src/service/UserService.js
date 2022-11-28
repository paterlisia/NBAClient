import axios from "axios";

export default class UserService {
  // HTTP GET request to
  async login(date) {
    console.log("Calling service for users login");
    const config = {
      ...this.Config,
      ...{
        method: "get",
        url: `http://3.143.232.110:5011/api/games/${date}`,
      },
    };
    return await axios(config);
  }
  // HTTP POST request for users signup
  async signup(data) {
    console.log("Calling service to signup");
    const config = {
      ...this.Config,
      ...{
        method: "post",
        url: "https://ec2-18-219-149-124.us-east-2.compute.amazonaws.com:5011/api/create",
        data,
      },
    };
    return axios(config);
  }
}

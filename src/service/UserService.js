import axios from "axios";

export default class UserService {
  // HTTP GET request to login with email and pwd
  async login(data) {
    console.log("Calling service for users login");
    const config = {
      ...this.Config,
      ...{
        method: "post",
        url: `https://ec2-18-219-149-124.us-east-2.compute.amazonaws.com:5011/account`,
        data
      },
    };
    return await axios(config);
  }
  // HTTP GET request to login with google
  async loginGoogle() {
    console.log("Calling service for users login");
    const config = {
      ...this.Config,
      ...{
        headers: {
          "access-control-allow-origin": "*",
        },
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: "get",
        url: `https://ec2-18-219-149-124.us-east-2.compute.amazonaws.com:5011/index`,
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

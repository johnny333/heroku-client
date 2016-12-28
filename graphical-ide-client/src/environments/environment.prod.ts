export const environment = {
  production: true,
  NG_PROTOCOL: "http",
  API_PROTOCOL: "http",
  NG_HOST: "127.0.0.1",
  NG_PORT: 4012,
  API_HOST: "127.0.0.1",
  API_PORT: 3000,
  getApiAddress: ()=> {
    return `${this.API_PROTOCOL}://${this.API_HOST}:${this.API_PORT}/`;
  },
  getNgAddress: ()=> {
    return `${this.NG_PROTOCOL}://${this.NG_HOST}:${this.NG_PORT}/`;
  }
};

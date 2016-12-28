// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
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

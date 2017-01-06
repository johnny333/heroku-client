import {IUrlPrefix} from "../settings/url-prefix/i-url-prefix";
import {EAppUrlParts} from "./e-app-url-parts.enum";
export class AppUrlPrefix implements IUrlPrefix {
  environment = {
    production: true,
    NG_PROTOCOL: "http",
    API_PROTOCOL: "http",
    NG_HOST: "127.0.0.1",
    NG_PORT: 4012,
    API_HOST: "127.0.0.1",
    API_PORT: 9001,
    getApiAddress: ()=> {
      return "http://127.0.0.1:9001/";
    },
    getNgAddress: ()=> {
      return "http://127.0.0.1:4012/";
    }
  };


  getHostUrlWithParams(urlParams): string {
    let prepareURL = this.getHostURL();
    urlParams.forEach(item => {
      prepareURL.concat(EAppUrlParts[item]);
    });
    return prepareURL;
  }

  getWebUrlWithParams(urlParams): string {
    let prepareURL = this.getWebURL();
    urlParams.forEach(item => {
      prepareURL.concat(EAppUrlParts[item]);
    });
    return prepareURL;
  }

  getHostURL(): string {
    return `${this.environment.getApiAddress()}`;
  }

  getWebURL(): string {
    return `${this.environment.getNgAddress()}`;
  }
}

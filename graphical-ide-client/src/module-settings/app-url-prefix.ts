import {IUrlPrefix} from "../settings/url-prefix/i-url-prefix";
import {EAppUrlParts} from "./e-app-url-parts.enum";
import {environment} from "../environments/environment";
export class AppUrlPrefix implements IUrlPrefix {
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
    return `${environment.getApiAddress()}`;
  }

  getWebURL(): string {
    return `${environment.getNgAddress()}`;
  }
}

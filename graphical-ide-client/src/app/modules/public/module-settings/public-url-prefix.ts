import {IUrlPrefix} from "../../../../settings/url-prefix/i-url-prefix";
import {EPublicUrlParts} from "./e-public-url-parts.enum";
import {AppUrlPrefix} from "../../../../module-settings/app-url-prefix";
export class PublicUrlPrefix implements IUrlPrefix {
  private appPrefixer: IUrlPrefix;

  constructor() {
    this.appPrefixer = new AppUrlPrefix();
  }

  getHostUrlWithParams(urlParams): string {
    let prepareURL = this.getHostURL();
    urlParams.forEach(item => {
      prepareURL.concat(EPublicUrlParts[item]);
    });
    return prepareURL;
  }

  getWebUrlWithParams(urlParams): string {
    let prepareURL = this.getWebURL();
    urlParams.forEach(item => {
      prepareURL.concat(EPublicUrlParts[item]);
    });
    return prepareURL;
  }

  getHostURL(): string {

    return `${this.appPrefixer.getHostURL()}${EPublicUrlParts[EPublicUrlParts.PUBLIC]}`;
  }

  getWebURL(): string {
    return `${this.appPrefixer.getWebURL()}${EPublicUrlParts[EPublicUrlParts.PUBLIC]}`;
  }
}

import {IUrlPrefix} from "../../../../settings/url-prefix/i-url-prefix";
import {EAdminUrlParts} from "./e-admin-url-parts.enum";
import {AppUrlPrefix} from "../../../../module-settings/app-url-prefix";
export class AdminUrlPrefix implements IUrlPrefix {
  private appPrefixer: IUrlPrefix;

  constructor() {
    this.appPrefixer = new AppUrlPrefix();
  }

  getHostUrlWithParams(urlParams): string {
    let prepareURL = this.getHostURL();
    urlParams.forEach(item => {
      prepareURL.concat(EAdminUrlParts[item]);
    });
    return prepareURL;
  }

  getWebUrlWithParams(urlParams): string {
    let prepareURL = this.getWebURL();
    urlParams.forEach(item => {
      prepareURL.concat(EAdminUrlParts[item]);
    });
    return prepareURL;
  }

  getHostURL(): string {
    return `${this.appPrefixer.getHostURL()}${EAdminUrlParts[EAdminUrlParts.ADMIN]}`;
  }

  getWebURL(): string {
    return `${this.appPrefixer.getWebURL()}${EAdminUrlParts[EAdminUrlParts.ADMIN]}`;
  }
}

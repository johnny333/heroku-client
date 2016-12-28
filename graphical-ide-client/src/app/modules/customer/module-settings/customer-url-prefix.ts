import {IUrlPrefix} from "../../../../settings/url-prefix/i-url-prefix";
import {ECustomerUrlParts} from "./e-customer-url-parts.enum";
import {AppUrlPrefix} from "../../../../module-settings/app-url-prefix";
export class CustomerUrlPrefix implements IUrlPrefix {
  private appPrefixer: IUrlPrefix;

  constructor() {
    this.appPrefixer = new AppUrlPrefix();
  }

  getHostUrlWithParams(urlParams): string {
    let prepareURL = this.getHostURL();
    urlParams.forEach(item => {
      prepareURL.concat(ECustomerUrlParts[item]);
    });
    return prepareURL;
  }

  getWebUrlWithParams(urlParams): string {
    let prepareURL = this.getWebURL();
    urlParams.forEach(item => {
      prepareURL.concat(ECustomerUrlParts[item]);
    });
    return prepareURL;
  }

  getHostURL(): string {
    return `${this.appPrefixer.getHostURL()}${ECustomerUrlParts[ECustomerUrlParts.CUSTOMER]}`;
  }

  getWebURL(): string {
    return `${this.appPrefixer.getWebURL()}${ECustomerUrlParts[ECustomerUrlParts.CUSTOMER]}`;
  }
}

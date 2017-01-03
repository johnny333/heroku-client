import {IUrlPrefix, IBackendPrefix} from "../../../../settings/url-prefix/i-url-prefix";
import {AppUrlPrefix} from "../../../../module-settings/app-url-prefix";
import {EApiUrlParts} from "./e-api-url-parts";
/**
 * Created by jakub on 03.01.17.
 */
export class ApiUrlPrefix implements IBackendPrefix{
  private appPrefixer: IUrlPrefix;

  constructor() {
    this.appPrefixer = new AppUrlPrefix();
  }

  getHostURL(): string {
    return `${this.appPrefixer.getHostURL()}${EApiUrlParts[EApiUrlParts.API]}`;
  }

  getHostUrlWithParams(urlParams): string {
    let prepareURL = this.getHostURL();
    urlParams.forEach(item => {
      prepareURL.concat(EApiUrlParts[item]);
    });
    return prepareURL;
  }
}

export interface IUrlPrefix extends IBackendPrefix,IFrontendPrefix{

}
export interface IBackendPrefix {
  getHostURL(): string,
  getHostUrlWithParams(...urlParams): string,
}
export interface IFrontendPrefix {
  getWebURL(): string,
  getWebUrlWithParams(...urlParams): string
}

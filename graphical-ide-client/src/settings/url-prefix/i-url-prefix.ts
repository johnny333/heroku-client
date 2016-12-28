export interface IUrlPrefix {
  getHostURL(): string,
  getWebURL(): string,
  getHostUrlWithParams(...urlParams): string,
  getWebUrlWithParams(...urlParams): string
}

import qs from 'qs';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { merge } from 'lodash';
import { HttpClientOptions } from './Interfaces';

export class HttpClient {
  private options: HttpClientOptions;

  private http: AxiosInstance;

  constructor(options: HttpClientOptions) {
    this.options = options;

    this.http = axios.create({
      baseURL: this.options.baseUrl,
      timeout: this.options.timeout,
    });
  }

  public get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<object>> {
    return this.http.get(url, merge({
      paramsSerializer: (params: object) => {
        return qs.stringify(params, {
          arrayFormat: 'brackets',
          encodeValuesOnly: true,
        });
      },
    }, config));
  }
}

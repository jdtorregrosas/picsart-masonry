import axios, { AxiosInstance } from "axios";
import { config } from "../config";

export class HttpClient {
  private static httpClient: AxiosInstance;

  private constructor() {}

  static getClient() {
    if (this.httpClient) {
      return this.httpClient;
    }
    this.httpClient = axios.create({
      baseURL: config.PEXELS_BASE_URL,
      timeout: 1000,
      headers: { Authorization: config.PEXELS_API_KEY },
    });
    return this.httpClient;
  }
}

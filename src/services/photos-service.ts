import { AxiosInstance } from "axios";
import { HttpClient } from "./http-client";
import { Photo } from "./types";

export class PhotosService {
  httpClient: AxiosInstance;

  public constructor() {
    this.httpClient = HttpClient.getClient();
  }

  public async fetchAll(
    query: string = "nature",
    page: number = 1
  ): Promise<Photo[]> {
    const response = await this.httpClient.get(
      `/search?query=${encodeURIComponent(query)}&page=${page}&per_page=30`
    );
    return response.data?.photos || [];
  }

  public async fetchSingle(id: string): Promise<Photo> {
    const response = await this.httpClient.get(`/photos/${id}`);
    return response.data;
  }
}

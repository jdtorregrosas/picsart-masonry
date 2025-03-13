import axios, { AxiosInstance } from "axios";
import { afterEach, describe, expect, it, vi } from "vitest";
import { config } from "../config";
import { HttpClient } from "../services/http-client";

vi.mock("axios");

describe("HttpClient", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should create a new Axios instance if none exists", () => {
    const mockCreate = vi.spyOn(axios, "create").mockReturnValueOnce({
      name: "axiosInstance",
    } as unknown as AxiosInstance);
    const client = HttpClient.getClient();

    expect(mockCreate).toHaveBeenCalledWith({
      baseURL: config.PEXELS_BASE_URL,
      timeout: 1000,
      headers: { Authorization: config.PEXELS_API_KEY },
    });
    expect(client).toBeDefined();
  });

  it("should return the existing Axios instance if already created", () => {
    const client1 = HttpClient.getClient();
    const client2 = HttpClient.getClient();

    expect(client1).toBeDefined();
    expect(client1).toBe(client2);
  });
});

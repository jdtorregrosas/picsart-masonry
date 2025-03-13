import { AxiosInstance } from "axios";
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { HttpClient } from "../services/http-client";
import { PhotosService } from "../services/photos-service";

vi.mock("axios");

describe("PhotosService", () => {
  let mockHttpClient: AxiosInstance;
  let photosService: PhotosService;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn(),
    } as unknown as AxiosInstance;
    vi.spyOn(HttpClient, "getClient").mockReturnValue(mockHttpClient);
    photosService = new PhotosService();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch all photos with default parameters", async () => {
    const mockPhotos = [
      { id: "1", src: { medium: "url" }, photographer: "John Doe" },
    ];
    (mockHttpClient.get as Mock).mockResolvedValue({
      data: { photos: mockPhotos },
    });

    const photos = await photosService.fetchAll();

    expect(mockHttpClient.get).toHaveBeenCalledWith(
      "/search?query=nature&page=1&per_page=30"
    );
    expect(photos).toEqual(mockPhotos);
  });

  it("should fetch a single photo by ID", async () => {
    const mockPhoto = {
      id: "1",
      src: { large: "url" },
      photographer: "Jane Doe",
    };
    (mockHttpClient.get as Mock).mockResolvedValue({ data: mockPhoto });

    const photo = await photosService.fetchSingle("1");

    expect(mockHttpClient.get).toHaveBeenCalledWith("/photos/1");
    expect(photo).toEqual(mockPhoto);
  });

  it("should return an empty array if no photos are found", async () => {
    (mockHttpClient.get as Mock).mockResolvedValue({ data: { photos: [] } });

    const photos = await photosService.fetchAll("random", 2);

    expect(photos).toEqual([]);
  });
});

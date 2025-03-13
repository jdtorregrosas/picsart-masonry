import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router"; // To wrap the component in a router for the link
import { describe, expect, it } from "vitest";
import { PhotoDetail } from ".";
import { Photo } from "../../models/photo.model";

describe("PhotoDetail", () => {
  const mockPhoto = {
    src: { large: "http://example.com/photo.jpg" },
    alt: "A beautiful landscape",
    photographer: "John Doe",
    width: 1200,
    height: 1600,
  } as Photo;

  it("should render the photo detail correctly", () => {
    render(
      <MemoryRouter>
        <PhotoDetail photo={mockPhoto} />
      </MemoryRouter>
    );

    expect(screen.getByText("⇇ Go Back home")).toBeInTheDocument();

    expect(screen.getByText("A beautiful landscape")).toBeInTheDocument();
    expect(screen.getByText("Photo by John Doe")).toBeInTheDocument();
    expect(screen.getByText("Dimensions: 1200 x 1600")).toBeInTheDocument();
  });
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "@/app";

// The full app renders the marketing pages; only jsdom APIs that components touch
// on mount (IntersectionObserver in <Reveal>, canvas) need to be tolerated.
function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("App routing", () => {
  it("renders the home page at /", () => {
    renderAt("/");
    expect(screen.getByText(/Wir verbinden/i)).toBeInTheDocument();
  });

  it("renders the contact page at /kontakt", () => {
    renderAt("/kontakt");
    expect(screen.getByText(/Lassen Sie uns sprechen/i)).toBeInTheDocument();
  });

  it("shows the 404 page for an unknown route", () => {
    renderAt("/gibt-es-nicht");
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});

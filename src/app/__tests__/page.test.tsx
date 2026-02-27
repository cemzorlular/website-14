import { render, screen } from "@testing-library/react";
import Home from "../page";

// Mock next/image since it's not available in the test environment
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    priority: _priority,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe("Home", () => {
  it("renders the page", () => {
    render(<Home />);
    expect(
      screen.getByText("To get started, edit the page.tsx file.")
    ).toBeInTheDocument();
  });

  it("renders the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/next.svg");
  });

  it("renders the Deploy Now link", () => {
    render(<Home />);
    const deployLink = screen.getByText("Deploy Now");
    expect(deployLink).toBeInTheDocument();
    expect(deployLink.closest("a")).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/new")
    );
    expect(deployLink.closest("a")).toHaveAttribute("target", "_blank");
    expect(deployLink.closest("a")).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
  });

  it("renders the Documentation link", () => {
    render(<Home />);
    const docsLink = screen.getByText("Documentation");
    expect(docsLink).toBeInTheDocument();
    expect(docsLink.closest("a")).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs")
    );
    expect(docsLink.closest("a")).toHaveAttribute("target", "_blank");
  });

  it("renders the Templates link", () => {
    render(<Home />);
    const templatesLink = screen.getByText("Templates");
    expect(templatesLink).toBeInTheDocument();
    expect(templatesLink.closest("a")).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/templates")
    );
  });

  it("renders the Learning link", () => {
    render(<Home />);
    const learningLink = screen.getByText("Learning");
    expect(learningLink).toBeInTheDocument();
    expect(learningLink.closest("a")).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/learn")
    );
  });

  it("renders the Vercel logomark in Deploy Now button", () => {
    render(<Home />);
    const vercelLogo = screen.getByAltText("Vercel logomark");
    expect(vercelLogo).toBeInTheDocument();
    expect(vercelLogo).toHaveAttribute("src", "/vercel.svg");
  });
});

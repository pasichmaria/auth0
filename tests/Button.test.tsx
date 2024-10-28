import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "reflect-metadata";

import { Button } from "../src/shared";

describe("Button Component", () => {
  it("display label as children", () => {
    render(<Button>text</Button>);
    expect(screen.getByRole("button").textContent).toBe("text");
  });

  it("onClick event", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(<Button className="class">button</Button>);
    expect(screen.getByRole("button").classList).toContain("class");
  });
});

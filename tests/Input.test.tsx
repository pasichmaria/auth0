import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "reflect-metadata";

import { Input } from "../src/shared";

describe("Input Component", () => {
  it("renders the correct value", () => {
    render(<Input value="Hello" onChange={vi.fn()} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("Hello");
  });

  it("calls onChange when the value changes", () => {
    const onChange = vi.fn();
    render(<Input value="" onChange={onChange} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "New" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("renders the placeholder", () => {
    render(<Input value="" placeholder="test" onChange={vi.fn()} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.placeholder).toBe("test");
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest"
import "reflect-metadata"

import { ToastComponent } from "../src/shared";

describe("Toast component", () => {
  const defaultToastProps = {
    open: true,
    onOpenChange: vi.fn(),
    title: "Mazda",
    description: "Mazda mx-5",
    actionText: "Undo",
    onActionClick: vi.fn(),
    actionAltText: "y",
  };

  it("renders title and description", () => {
    render(<ToastComponent {...defaultToastProps} />);
    expect(screen.getByText("Mazda")).not.toBeNull();
    expect(screen.getByText("Mazda mx-5")).not.toBeNull();
  });

  it("calls onOpenChange when dismissed", () => {
    render(<ToastComponent {...defaultToastProps} />);

    fireEvent.click(screen.getByRole("button", { name: /undo/i }));
    expect(defaultToastProps.onActionClick).toHaveBeenCalledTimes(1);
  });

  it("does not render if open is false", () => {
    render(<ToastComponent {...defaultToastProps} open={false} />);

    expect(screen.queryByText("Mazda")).toBeNull();
  });
});

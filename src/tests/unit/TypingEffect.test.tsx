import React from "react";
import { render, screen } from "@testing-library/react-native";
import TypingEffect from "../../src/components/TypingEffect";
import { useAuth, AuthProvider } from "../../src/AuthContext";
import { act } from "react-test-renderer";

jest.useFakeTimers();

test("TypingEffect deve exibir texto corretamente", async () => {
  render(<TypingEffect text="Hello, world!" speed={10} />);

  // Simula o avanço do tempo para a animação ocorrer
  act(() => {
    jest.advanceTimersByTime(100);
  });

  expect(screen.getByText(/Hello, world!/i)).toBeTruthy();
});
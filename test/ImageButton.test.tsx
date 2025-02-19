import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ImageButton from "../src/components/shared/ImageButton";

describe("ImageButton Component", () => {
  const mockHandleLogin = jest.fn();

  test("deve renderizar corretamente com texto e imagem", () => {
    const { getByText, getByTestId } = render(
      <ImageButton
        handleLogin={mockHandleLogin}
        imageSource="https://example.com/image.jpg"
        buttonText="Entrar"
        id="login-button"
      />
    );

    expect(getByText("Entrar")).toBeTruthy();
    expect(getByTestId("login-button")).toBeTruthy();
  });

  test("deve chamar handleLogin ao pressionar o botão", () => {
    const { getByTestId } = render(
      <ImageButton
        handleLogin={mockHandleLogin}
        imageSource="https://example.com/image.jpg"
        buttonText="Entrar"
        id="login-button"
      />
    );

    fireEvent.press(getByTestId("login-button"));

    expect(mockHandleLogin).toHaveBeenCalledTimes(1);
  });

  test("deve renderizar a imagem com o source correto", () => {
    const { getByTestId } = render(
      <ImageButton
        handleLogin={() => {}}
        imageSource="https://example.com/image.png"
        buttonText="Login"
        id="image-button"
      />
    );

    const image = getByTestId("image-button").findByType("Image");
    expect(image.props.source.uri).toBe("https://example.com/image.png");
  });
});

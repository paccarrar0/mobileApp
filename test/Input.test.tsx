import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Input from "../src/components/shared/Input";

describe("Input Component", () => {
  test("deve renderizar corretamente", () => {
    const { getByTestId } = render(
      <Input
        password={false}
        placeholder="Digite seu nome"
        value=""
        id="input-id"
        onChangeText={() => {}}
      />
    );
    expect(getByTestId("input-id")).toBeTruthy();
  });

  test("deve chamar onChangeText corretamente", () => {
    const mockOnChangeText = jest.fn();
    const { getByTestId } = render(
      <Input
        password={false}
        placeholder="Digite seu nome"
        value=""
        id="input-id"
        onChangeText={mockOnChangeText}
      />
    );

    fireEvent.changeText(getByTestId("input-id"), "Novo Texto");

    expect(mockOnChangeText).toHaveBeenCalledWith("Novo Texto");
  });

  test("deve renderizar o campo de senha corretamente", () => {
    const { getByTestId } = render(
      <Input
        password={true}
        placeholder="Digite sua senha"
        value=""
        id="input-id"
        onChangeText={() => {}}
      />
    );

    const input = getByTestId("input-id");
    expect(input.props.secureTextEntry).toBe(true);
  });

  test("não deve ser um campo de senha quando 'password' for falso", () => {
    const { getByTestId } = render(
      <Input
        password={false}
        placeholder="Digite seu nome"
        value=""
        id="input-id"
        onChangeText={() => {}}
      />
    );

    const input = getByTestId("input-id");
    expect(input.props.secureTextEntry).toBe(false);
  });
});

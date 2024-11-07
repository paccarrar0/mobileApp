import Card from "@/components/containers/Card";
import CardHeader from "@/components/CardHeader";
import Scrollable from "@/components/containers/Scrollable";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text} from "react-native";
import CardBody from "@/components/CardBody";

export default function index() {

  return (
    <Scrollable>

      <Card>
        <CardHeader shopName="Oficial Choice"></CardHeader>
        <CardBody title="Adaptador SATA Para USB 3.0 6 ..."></CardBody>
        <Text>Ver todos os cupons da loja</Text>
      </Card>


    </Scrollable>
  );
}

const styles = StyleSheet.create({

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#00ff00',
  },
});
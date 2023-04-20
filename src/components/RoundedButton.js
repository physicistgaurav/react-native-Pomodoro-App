import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props // these are props
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles(size).radius, style]}
    >
      <Text style={[styles(size / 1.3).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#fff",
      borderWidth: 2,
    },
    text: {
      color: "#fff",
      fontSize: size / 3,
    },
  });

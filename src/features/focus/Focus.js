import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, paddingSizes } from "../../utils/sizes";
import { colors } from "../../utils/color";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.focusText}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingSizes.md,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  focusText: {
    fontSize: fontSizes.lg,
    color: colors.white,
    fontWeight: "600",
  },
  inputContainer: {
    paddingTop: paddingSizes.md,
    flexDirection: "row",
    alignItems: "center",
  },
});

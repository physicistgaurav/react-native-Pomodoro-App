import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";

import { fontSizes, paddingSizes } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.HistoryItem(item.status)}>{item.subject}</Text>;
};

// {JSON.stringify(item)}

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>

            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  HistoryItem: (status) => ({
    color: status == 1 ? "#bfc1a1" : "#e0ec34",
    fontSize: fontSizes.lg,
    marginTop: 5,
  }),
  title: {
    color: "white",
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: "center",
    padding: paddingSizes.md,
  },
});

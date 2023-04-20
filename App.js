import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Focus } from "./src/features/focus/Focus";
import { FocusHistory } from "./src/features/focus/FocusHistory";
import { colors } from "./src/utils/color";
import { Timer } from "./src/features/timer/Timer";
import { paddingSizes } from "./src/utils/sizes";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.StatusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const STATUS = {
  COMPLETE: 1,
  CANCELLED: 0,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  const [focusHistory, setFocusHistory] = useState([]);

  // useEffect(() => {
  //   if (focusSubject) {
  //     setFocusHistory([...focusHistory, focusSubject]);
  //   }
  // });

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }]);
  };

  const onClear = () => {
    setFocusHistory([]);
  };

  return (
    <>
      <MyStatusBar backgroundColor="#e28743" barStyle="light-content" />
      <View style={styles.container}>
        {focusSubject ? (
          <Timer
            focusSubject={focusSubject}
            onTimerEnd={() => {
              addFocusHistorySubjectWithState(focusSubject, STATUS.COMPLETE);
              setFocusSubject(null);
            }}
            clearSubject={() => {
              addFocusHistorySubjectWithState(focusSubject, STATUS.CANCELLED);
              setFocusSubject(null);
            }}
          />
        ) : (
          <>
            <Focus addSubject={setFocusSubject} />
            <FocusHistory
              focusHistory={focusHistory}
              onClear={() => {
                onClear();
              }}
            />
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingTop: Platform.OS === "ios" ? paddingSizes.md : paddingSizes.lg,
  },
  StatusBar: {
    height: 25,
  },
});

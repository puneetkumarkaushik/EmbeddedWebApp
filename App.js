import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button, BackHandler } from "react-native";
import { WebView } from "react-native-webview";

import { apiEndPoint } from "./data.config";
import WebApp from "./src/WebApp";
import Info from "./src/Info";

export default function App() {
  const [URL, setUrl] = React.useState("");
  const [showWeb, setShowWeb] = React.useState(false);

  const getURL = () => {
    fetch(apiEndPoint)
      .then((response) => response.json())
      .then((data) => setUrl(data))
      .catch((err) => {
        setUrl("https://www.google.com");
      });
  };

  React.useEffect(() => {
    getURL();
  }, []);

  const backAction = () => {
    if (showWeb) {
      setShowWeb(false);
      BackHandler.removeEventListener("hardwareBackPress", backAction);
      return true;
    }
    return false;
  };

  BackHandler.addEventListener("hardwareBackPress", backAction);

  if (showWeb) {
    return <WebApp source={URL} />;
  } else {
    return (
      <View style={styles.container}>
        <Button title="Open Web" onPress={() => setShowWeb(true)} />
        <Info />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

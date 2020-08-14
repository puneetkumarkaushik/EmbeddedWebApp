import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function WebApp({ source }) {
  return (
    <WebView
      style={styles.WebViewStyle}
      source={{ uri: source }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  WebViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = (props) => {
  return (
    <View
      key={props.id}
      style={styles.container}
    >
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    border: "solid",
    borderWidth: 1,
    borderColor: "#e1e4e8",
    borderRadius: 10,
  },
  language: {
    padding: 4,
    color: "#fff",
    backgroundColor: "#0366d6",
    alignSelf: "flex-start", 
    borderRadius: 4,
    overflow: "hidden"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  }
});

export default RepositoryItem;

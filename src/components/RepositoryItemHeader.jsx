import React from "react";
import { StyleSheet, Image, View } from "react-native";
import StyledText from "./StyledText";

const RepositoryItemHeader = (props) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2, gap: 10 }}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      <View style={{flex: 1}}>
        <StyledText fontWeight="bold" fontSize="subheading">
          {props.fullName}
        </StyledText>
        <StyledText color="secondary">{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  language: {
    padding: 3,
    color: "#fff",
    backgroundColor: "#0366d6",
    alignSelf: "flex-start",
    borderRadius: 4,
    marginVertical: 4,
    overflow: "hidden",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    alignSelf: "center"
  },
});

export default RepositoryItemHeader;

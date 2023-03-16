import React from "react";
import StyledText from "./StyledText";
import { View } from "react-native";

const RepositoryStats = (props) => {
  const parseThousands = (num) => {
    return num > 1000 ? (num / 1000).toFixed(1) + "k" : String(num);
  };

  return (
    <View style={{ flexDirection: "row", gap: 20 }}>
      <View>
        <StyledText fontWeight="bold">Stars</StyledText>
        <StyledText align="center">
          {parseThousands(props.stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Forks</StyledText>
        <StyledText align="center">
          {parseThousands(props.forksCount)}
        </StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Reviews</StyledText>
        <StyledText align="center">{props.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Rating</StyledText>
        <StyledText align="center">{props.ratingAverage}</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;

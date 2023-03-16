import React from "react";
import { View, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <FlatList
      style={{paddingHorizontal: 4, marginBottom: 65, marginTop: 5}}
      data={repositories}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    >
    </FlatList>
  );
};

export default RepositoryList;

import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";

const Main = () => {
  return (
    <View>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route path="/review" exact element={<Text>Trabajando en el componente review</Text>} />
        <Route path="/signin" exact element={<Text>Trabajando en el componente sign in</Text>} />
        <Route path="/signup" exact element={<Text>Trabajando en el componente sign up</Text>} />
        <Route path="/linkedin" exact element={<Text>Trabajando en el componente linkedin</Text>} />
      </Routes>
    </View>
  );
};

export default Main;

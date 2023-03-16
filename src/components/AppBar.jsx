import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  const textStyles = [styles.text, active && styles.active];

  return (
    <Link to={to} underlayColor="transparent">
      <StyledText fontWeight="bold" fontSize="subheading" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/review">Create a review</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
        <AppBarTab to="/signup">Sign up</AppBarTab>
        <AppBarTab to="/linkedin">My Linkedin</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: "row",
  },
  text: {
    color: theme.appBar.textPrimary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textActive,
  },
});

export default AppBar;

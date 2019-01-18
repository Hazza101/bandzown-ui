import React, { Component } from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Text, Button } from "react-native";

export class LoginView extends Component {
  static navigationOptions = {
    title: 'home',
  };

  render() {
    return (
      <SafeAreaView style = {styles.safeContent}>
        <StatusBar
          barStyle="light-content"

        />
        <View style = {styles.viewContent}>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Login')}
            color="#54FFCD"
          />

          <Button
            title="Signup"
            onPress={() => this.props.navigation.navigate('Signup')}
            color ="#C484D4"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContent: {
    flex: 1
  },
  viewContent: {
    marginTop: 100,
    marginBottom: 100,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  viewTitle: {
    fontSize: 30
  }
});

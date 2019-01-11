import React, { Component } from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Text, Button } from "react-native";

export class HomeView extends Component {
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
            title="Find Musicians"
            onPress={() => this.props.navigation.navigate('Bands')}
            color="#841584"
          />



          <Button
            title="My account"
            onPress={() => this.props.navigation.navigate('MyAccount')}
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

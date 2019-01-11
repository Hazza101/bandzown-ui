import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Button } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import bandsReducer from '../reducers/bands';
import BandsList from '../components/bandslist';

const client = axios.create({
  baseURL: 'https://music505.herokuapp.com',
  responseType: 'json'
});

const store = createStore(bandsReducer, applyMiddleware(axiosMiddleware(client)));

export class BandsView extends Component {

  static navigationOptions = ({ navigation }) => {
      return {
        headerTitle: "Bands",
        headerRight: (
          <Button
            onPress={() => navigation.navigate('NewBand')}
            title="Add"
            color="#f4511e"
          />
        ),
      };
    };


  render() {
    return (
      <SafeAreaView style = {styles.safeContent}>
        <StatusBar
          barStyle="light-content"

        />
        <Provider store={store}>
          <View style={styles.container}>
            <BandsList />
          </View>
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContent: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: '#fff'
  }
});

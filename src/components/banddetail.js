import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { getBandDetail } from '../reducers/banddetail';

export class BandDetail extends Component {

  componentDidMount() {
    const _id = this.props.navigation.getParam('_id', 'no_id');
    console.log("mounting band details: %s", _id)
    this.props.getBandDetail(_id);
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.row}>
          <Text style = {styles.label}>
            Name:
          </Text>
          <Text style = {styles.item}>
            {this.props.detail.name}
          </Text>
        </View>
        <View style = {styles.row}>
          <Text style = {styles.label}>
            Genre:
          </Text>
          <Text style = {styles.item}>
            {this.props.detail.genre}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    padding: 16,
    height: 40
  },
  label: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    height: 30,
  },
  item: {
    flex: 2,
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    height: 30,
  }
});

const mapStateToProps = state => {
  let bandDetail = state.detail
  if(bandDetail) {
    return {
      detail: bandDetail
    };
  } else {
    console.log("no band details");
    return {};
  }

};

const mapDispatchToProps = {
  getBandDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(BandDetail));

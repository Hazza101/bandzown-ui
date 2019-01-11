import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { HomeView } from "./views/homeview";
import { BandsView } from "./views/bandsview";
import { NewBandView } from "./views/newbandview";
import { BandDetailsView } from "./views/banddetailsview";
import {MyAccountView} from "./views/myaccountview";

const AppNavigator = createStackNavigator(
  {
    Home: HomeView,
    Bands: BandsView,
    NewBand: NewBandView,
    BandDetails: BandDetailsView,
    MyAccount: MyAccountView
  },
  {
    defaultNavigationOptions:
    {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
  }
);

export default createAppContainer(AppNavigator);

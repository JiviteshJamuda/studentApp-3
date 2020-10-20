import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import AllAssignments from "../screens/AllAssignments";
// import CheckAssignment from "../screens/CheckAssignment";
import ViewAssignmentDetails from "../screens/ViewAssignmentDetails";
import { DrawerNavigator } from "./DrawerNavigator";

export const StackNavigator = createStackNavigator({
  Home : {
    screen : AllAssignments,
    navigationOptions:{
      headerShown : false
    }
  },
  ViewAssignmentDetails : {
    screen : ViewAssignmentDetails,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'Home'
  },
);

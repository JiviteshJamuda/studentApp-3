import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import db from "../config";
import firebase from "firebase";
import { Header, Icon, ListItem } from "react-native-elements";

export default class MarkedAssignments extends React.Component {
    render(){
        return(
            <ScrollView style={{flex:1}}>
                <View>
                    <Header
                        placement="left"
                        leftComponent={<Icon name="menu" onPress={()=>{this.props.navigation.toggleDrawer()}} color="white"/>}
                        centerComponent={{text:"Marked Assignments", style:{fontSize:25, fontWeight:"bold", color:"white"}}} 
                        backgroundColor="purple"
                    />
                    
                </View>
            </ScrollView>
            
        )
    }
}
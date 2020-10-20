import React from "react";
import { View, Text, StyleSheet, Button, ScrollView  } from "react-native";
import { Card, Header, Icon } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import { TextInput } from "react-native";

export default class ViewAssignmentDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
            docId : "",
            question : this.props.navigation.getParam("details")["question"],
            subject : this.props.navigation.getParam("details")["subject"],
            answer : "",
        }
    }   // this.props.navigation.getParam("details")["request_id"],

    render(){
        return(
            <ScrollView style={{flex:1}}>
                <View>
                    <Header
                        placement="left"
                        leftComponent={<Icon name="arrow-left" type="font-awesome" onPress={()=>{this.props.navigation.goBack()}}/>}
                        centerComponent={{text:"Assignment Details", style:{fontSize:25, fontWeight:"bold"}}}
                        backgroundColor="purple"
                    />
                </View>
                <View>
                    <Card>
                        <Text style={styles.question}>{this.state.question}</Text>
                        <Text>{this.state.subject}</Text>
                        <View style={{marginTop:30}}>
                            {/* Future progress 
                            
                            <TextInput style={styles.answerBox}
                                placeholder="type your answer/paste link from google drive"
                                value={this.state.answer}
                                onChangeText={(text)=>{ this.setState({ answer : text }) }}
                                multiline
                            />
                            <Button title="submit" onPress={()=>{ return alert(this.state.answer) }} /> */}
                        </View>
                        
                    </Card>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    question : {
        fontWeight:"bold",
        fontSize:20,
    },
    answerBox : {
        borderWidth : 1,
        height : 150,      
    }
})
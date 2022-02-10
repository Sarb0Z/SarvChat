import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const blue='blue';
const grey='lightgrey'
const myID='u1'
const Message =({message})=>{
    const isUser=message.user.id===myID;

    return (
        <View style={[styles.box, isUser?styles.userBox:styles.otherBox]}>
            <Text style={{color:isUser?'white':'black'}}>{message.content}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    box:{
        padding:10,
        margin:5,
        borderRadius:10,
        maxWidth:'70%',
    },
    otherBox:{
        backgroundColor:'lightgrey',
        marginRight:'auto',
        marginLeft:10
    },
    userBox:{
        backgroundColor:'blue',
        marginRight:10,
        marginLeft:'auto'
    }

});

export default Message;
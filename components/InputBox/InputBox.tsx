import { useState } from 'react';
import React from 'react';
import {View, Pressable, StyleSheet, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
const Input =({})=>{
    const [text, onChangeText]=React.useState("");
    const sendMessage=()=>{
        console.warn("Message: ", text);
        onChangeText("");
    }
    const sendVoice=()=>{
        console.warn("Send voice ");
    }
    const onPress=()=>{
        if (text){
            sendMessage();
        }
        else {
            sendVoice();
        }
    }

    return (
        <KeyboardAvoidingView style={styles.base} behavior={Platform.OS==='ios'?"padding":"height"}>
            <View style={styles.inputBox}>
                <AntDesign name="dribbble" size={25} color="darkgrey" style={styles.icon}/>
                <TextInput style={styles.text} onChangeText={onChangeText} value={text} placeholder='Input Message'/>
                <Feather name="camera" size={25} color="darkgrey" style={styles.icon}/>

            </View>
            <Pressable onPress={onPress} style={styles.sendbox}>
            { text?
            <Feather name="send" size={30} color="black" />:
            <Feather name="mic" size={25} color="black" />
            }
            </Pressable>
           
        </KeyboardAvoidingView>
    )
}

const styles=StyleSheet.create({
    base:{
        flexDirection:'row'
    },
    inputBox:{
        borderRadius:30,
        backgroundColor:'lightgrey',
        flex:1,
        alignItems:'center',
        borderWidth:1,
        borderColor:'lightgrey',
        marginRight:5, 
        flexDirection:'row',
        padding:10
    },
    sendbox:{
        height:50,
        width:50,
        backgroundColor:'red',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        flex:1,
        marginLeft:2
    },
    sendText:{
        color:'white',
        fontSize:25

    },
    icon:{
        marginHorizontal:1
    }



});

export default Input;
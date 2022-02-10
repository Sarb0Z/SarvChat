import React from "react";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/core";

import chatRoomData from '../assets/dummy-data/Chats';
import Message from "../components/MessageContainer";
import Input from "../components/InputBox/InputBox";

export default function ChatScreen(){
    const route=useRoute();
    return (<SafeAreaView style={styles.page}>
        <FlatList
        data={chatRoomData.messages}
        renderItem={({item})=><Message message={item}/>}
        inverted
        />
        <Input/> 

    </SafeAreaView>)
}

const styles=StyleSheet.create({
    page:{
        backgroundColor:'orange',
        flex:1
    }
});
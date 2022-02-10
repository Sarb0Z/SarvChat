import React from "react";
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/core";


export default function chatBox(props){
  const { chatRoom } = props;
  const user=chatRoom.users[1];
  const navigation=useNavigation();
  const onPress=()=>{
    console.warn("pressed");
    navigation.navigate('ChatScreen', {id:chatRoom.id});
  }

    return (
        <Pressable onPress={onPress} style={styles.chatBox}>
        <Image source={{uri:`https://source.unsplash.com/random/80x80?sig=${Math.random()}`}} style={styles.icon}/>
        <View style={styles.rightBox}>
          <View style={styles.row}>
            <Text style={styles.name}> {user.name}</Text>
            <Text style={styles.text}> {chatRoom.lastMessage.createdAt}</Text>
          </View>
          <View style={styles.row}>
          <Text style={styles.text} numberOfLines={1}>{chatRoom.lastMessage.content}</Text>
          {chatRoom.newMessages?<View style={styles.messageCount}>
            <Text style={styles.countNum}>{chatRoom.newMessages}</Text>
          </View>:null}
          </View>
        </View>
      </Pressable>
    );
}
const styles =StyleSheet.create({
    chatBox:{
      flexDirection:'row',
      padding: 10,
      borderWidth:1,
      borderColor:'orange',
    },
    rightBox:{
      //backgroundColor:'orange',
      flex:1,
      justifyContent:'center'
    },
    messageCount:{
      backgroundColor:'orange',
      width:25,
      height:25,
      borderRadius:50,
      position:'absolute',
      right:2,
      justifyContent:'center',
      alignItems:'center',
    },
    countNum:{
      color:'white',
      fontSize:15,
      justifyContent:'center'
    },
    icon:{
      width:60,
      height:60,
      borderRadius:50,
      marginRight:20
    },
    text:{
      fontSize:15,
      color:'grey',
      //marginLeft:'auto'
    },
    row:{
      flexDirection:'row',
      justifyContent: 'space-between',
      //backgroundColor: 'white'
    },
    name:{
      fontWeight:'bold',
      fontSize:20,
      //marginBottom:5
      //flex:1
  
    }
  })
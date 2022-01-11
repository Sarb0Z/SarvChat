import React from "react";
import { Text, StyleSheet, View, Image } from 'react-native';

export default function chatBox(props){
  const { chatRoom } = props;
  const user=chatRoom.users[1];
    return (
        <View style={styles.chatBox}>
        <Image source={{uri:`https://source.unsplash.com/random/80x80?sig=${Math.random()}`}} style={styles.icon}/>
        <View style={styles.rightBox}>
          <View style={styles.row}>
            <Text style={styles.name}> {user.name}</Text>
            <Text style={styles.text}> {chatRoom.lastMessage.createdAt}</Text>
          </View>
          <Text style={styles.text} numberOfLines={2}>{chatRoom.lastMessage.content}</Text>
          {chatRoom.newMessages?<View style={styles.messageCount}>
            <Text style={styles.countNum}>{chatRoom.newMessages}</Text>
          </View>:null}
        </View>
      </View>
    );
}
const styles =StyleSheet.create({
    chatBox:{
      flexDirection:'row',
      padding: 10,
      borderWidth:1,
      borderColor:'grey'
      //backgroundColor:'orange'
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
      borderWidth:1,
      borderColor:'white',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      left:195,
      bottom:5,
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
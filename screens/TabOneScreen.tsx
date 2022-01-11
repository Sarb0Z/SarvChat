import React from 'react';
import { RootTabScreenProps } from '../types';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';

import ChatBox from '../components/ChatBox';
import ChatRoomsData from '../assets/dummy-data/ChatRooms';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.page}>
      <FlatList 
      data={ChatRoomsData}
      renderItem={({item})=>
        <ChatBox chatRoom={item}/>
      }
      showsVerticalScrollIndicator={false}
      />

    </View>

  );
}

const styles =StyleSheet.create({
  page:{
    backgroundColor:'white',
    flex:1
  }
})
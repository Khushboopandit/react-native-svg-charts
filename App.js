/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Main from'./components/main'

const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <View>
          <Text style={styles.heading}>Graphs</Text>
        </View>
        <ScrollView>
          <Main/>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading:{
    textAlign:"center",
    margin:20,
    fontSize:40,
    fontWeight:'bold',
    color:"#0847a6",
  }
});

export default App;

import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import List from '../components/List';
import { useStateValue } from '../components/state';
//import moment from 'moment';

const getCurrentMessageWindow = () => {
  const [{ theme }, dispatch] = useStateValue();
  let rValue = theme.desc;
  let f = '';
  let x = 0;
  for (let y = 0; y < rValue.length; y++) {
    if (x > 20) {
      f = f + rValue[y] + "\n";
      x = 0;
    }
    else {
      x++;
      f = f + rValue[y];
    };
  };
  return f;
}
const getCurrentImage = () => {
  const [{ theme }, dispatch] = useStateValue();
  let pValue = theme.pic;
  return pValue;
}
const MessageWindow = (param) => {
  let im = getCurrentImage();
  console.log("Return from CurrentMessageWindow " + im);
  let initVal = param.data;
  let val = 'https://res.cloudinary.com/lcbklf5b3/image/upload/v1561664574/doctors_afcsuu.jpg';
  let valx = 'https://res.cloudinary.com/lcbklf5b3/image/upload/v1468021812/corvette_dwf3oe.jpg';

  return (
    <View>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: im
          }}
        />
      </View>

      <View>
        <Text>
          {initVal}
        </Text>
      </View>
    </View>
  )
}

const GetStuff = () => {
  return (
    <Text>
      Successful so far
    </Text>
  )
}

export default function LinksScreen() {

  return (

    <View style={styles.container} >
      <View style={styles.topchild}>
        <View >
          <Text style={styles.TextStyle}>
            Gallery Listing
          </Text>

        </View>
      </View>

      <View style={styles.child}>
        <View style={styles.topchild2}>
          <List />
        </View>

        <ScrollView style={styles.topchild2}>
          <MessageWindow data={getCurrentMessageWindow()} />
        </ScrollView>

      </View>

      <View style={styles.nextchild}>
        <View >

        </View>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FBC8F',
  },
  FormulaButtonStyle: {
    marginTop: 5,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    width: 300
  },
  SubmitButtonStyle: {
    marginBottom: 15,
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
    //height: 20,
    borderColor: '#fff'
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  child: {
    flex: 3,
    //marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#E9967A'
  },
  nextchild: {
    flex: 1,
    //paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white',
  },
  nextchild2: {
    flex: 1,
    //paddingTop: 5,
    //flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green'
  },
  topchild: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#E9967A'
  },
  TextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500'
  },
  textStuff: {
    width: 50,
    height: 100
  },
  logo: {
    width: 150,
    height: 200,
  },

});

/*
return (
  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

  </ScrollView>
);


const DisplayAnImage = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  )
}

*/
/*
function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}
*/

import { ScrollView } from 'react-native';
import { Image, Platform, StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { nullLiteral } from '@babel/types';
import { ToastAndroid } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const customFonts = {
  'ComicSans': require('../assets/fonts/comicSans.ttf')
};

export default function DataBaseScreen() {

  const [textValue, setTextValue] = useState('');
  const [msgValue, setMsgValue] = useState('');

  const testDoctors =
    [{ "physician": "Ed Soumi" }, { "physician": "John Soumi" }, { "physician": "Matthew Pham" }];

  const [message, setMessage] = useState('Starting App');
  const [doctors, setDoctors] = useState([]);
  const [dataStuff, setDataStuff] = useState([]);

  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFontsAsync = () => {
    Font.loadAsync(customFonts);
    setFontsLoaded(true );
  }

  const updateTextValue = async (text) => {
    setTextValue(text);
  }

  const updateMsgValue = async (text) => {
    setMsgValue(text);
  }

  async function addData(param) {
    /*
    alert(
      param.id + '\n' +
      param.name + '\n' +
      param.email + '\n' +
      param.description + '\n' +
      param.imageurl + '\n' +
      textValue
    );
    */
    setMessage("Adding data");
    const ul = "https://kwoodall.herokuapp.com/postsql";

    const newobj = '{"oid":' + param.id + ',"name":"' + param.name + '","email":"' + msgValue + '","description":"' + textValue + '","imageurl":"http://res.cloudinary.com/lcbklf5b3/image/upload/v1430171645/encode-2015-04-27-21-54-04.png"}';

    let ob = JSON.parse(newobj);
    let obstr = JSON.stringify(ob);

    await fetch(ul, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: obstr
    }).then(function (response) {
      response.status     //=> number 100–599
      response.statusText //=> String
      response.headers    //=> Headers
      response.url        //=> String
      console.log("Status " + response.status)
      //console.log("Status " + response.statusText)
      console.log("Insert ok again")
      setMessage("Data added to Heroku");

      return response.status

    }, function (error) {
      console.log("Status error " + error.message)
      error.message //=> String
      setMessage(error.message);
    })  
  }

  async function fetchData() {

    const URL = 'https://desolate-shelf-9039.herokuapp.com/getphysicians';
    const urlmore = "https://kwoodall.herokuapp.com/gettext";
    setMessage("Loading data");

    await fetch(urlmore)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        setDataStuff(responseJson);
        setMessage("Loaded from Heroku");
      })
      .catch((error) => {
        setMessage("URL not available");
        //ToastAndroid.show(error.toString(), ToastAndroid.LONG);
      });

  }
  useEffect(() => {
    loadFontsAsync(),
    fetchData()
    
  }, []);

  const NoButton = () => {
    setMsgValue(" ");
    setTextValue(" ");
  }

  const UpdateButton = async (param) => {
    await addData(param);
    await fetchData();
    setMsgValue(" ");
    setTextValue(" ");
  }

  const DoSomething = (param) => {

    Alert.alert(
      'Changes to Note',
      'Make changes now ?',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'NO', onPress: () => NoButton()},
        {text: 'OK', onPress: () => UpdateButton(param)},
      ],
      { cancelable: false }
    );  
  }
  const ShowData = () => {
    if (dataStuff.length > 0) {
      let strDoc = JSON.stringify(dataStuff[0]);
      let docs = JSON.parse(strDoc);   
      return (
        <View>
          {
            dataStuff.map((item, index) => (

              <TouchableOpacity
                key={item.name}
                style={styles.container2}
                onPress={() => DoSomething(item)}>

                <Text style={styles.instructions}>
                  {item.id} {'\n'}
                  {item.name} {'\n'}
                  {item.email} {'\n'}
                  {item.description} {'\n'}

                </Text>
              </TouchableOpacity>
            ))
          }
        </View>
      )
    }
    else return null
  }

  return (  
    <ScrollView style={styles.container}>
    
      <Text style={styles.CustomStuff}>
        Message One
      </Text>

      <TextInput style={styles.FormulaButtonStyle}
        value={textValue}
        placeholderTextColor='black'
        onChangeText={(text) => updateTextValue(text)}
      />

      <Text style={styles.CustomStuff}>
        Message Two
      </Text>

      <TextInput style={styles.FormulaButtonStyle}
        value={msgValue}
        placeholderTextColor='black'
        onChangeText={(text) => updateMsgValue(text)}
      />

      <Text style={styles.CustomStuff}>
        Info: {message}
      </Text>

      <ShowData />
    </ScrollView>
  );
}
DataBaseScreen.navigationOptions = {
  title: 'DataBase',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#03fc3d'
  },
  container2: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  instructions: {
    fontFamily: 'ComicSans', 
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 40,      
    color: '#333333'
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
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'ComicSans',
  },
  CustomStuff: {    
    textAlign: 'center',
    alignItems: 'center',    
    fontSize: 18,
    color: 'purple',
    fontFamily: 'ComicSans', 
  },  
  TextStyle: {
    textAlign: 'center',
    alignItems: 'center',     
    fontSize: 18,    
    fontWeight: '500',
    color: 'purple',      
  },
});

  /*

  
  const ImagesExample = () => (
    <Image source={{ uri: 'https://res.cloudinary.com/lcbklf5b3/image/upload/v1561664574/doctors_afcsuu.jpg' }}

      style={{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center', marginLeft: 110,
        width: 150, height: 150, marginBottom: 10, marginTop: 20
      }} />
  )

  function MyLinkButton() {
    // be careful to never call useNavigation in the press callback. Call hooks directly from the render function!
    const { navigate } = useNavigation();
    return (
      <Button
        onPress={() => {
          navigate('Settings');
        }}
        title="Go to Settings"
      />
    );
  }


  
    //const { navigate } = useNavigation();
  //import { ExpoLinksView } from '@expo/samples';
  //import List from '../components/List.js'
//import { useNavigation, useNavigationParam }
//  from 'react-navigation-hooks';
//import React from 'react';
//import Map from '@bit/sanzhardanybayev.ui-components.map';
//export default (
//	<Map/>
//)
  
   fetch(`http://localhost/rest_api_myblog/api/post/create.php`,
    { method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(someValue)})
    .then(res => {console.log(res)
    })
   .catch(e => console.log(e));
   this.setState({
     author: " ", 
     title: "",
  
   });
  
  
  
    await fetch(ul, ob)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        setDataStuff(responseJson);
        setMessage("Added data to Heroku");
      })
      .catch((error) => {
        setMessage("Trouble adding data");
        //ToastAndroid.show(error.toString(), ToastAndroid.LONG);
        console.log(error.toString(), ToastAndroid.LONG);
      });
     */

    /*
   await fetch(URL)
     .then((response) => response.json())
     .then((responseJson) => {
       setDoctors(responseJson);
       setMessage("Data loaded");
     })
     .catch((error) => {
       setMessage("URL not available");
       //ToastAndroid.show(error.toString(), ToastAndroid.LONG);
     });
   */

  /**
   * 
   * 
   * //fontStyle: "sans-serif",
       //fontFamily: 'SpaceMono-Regular',  
      //fontFamily: 'Comic Sans MS',  
      //fontFamily: 'Ubuntu-Bold', 

    //font-family: 'lucida grande', tahoma, verdana, arial, sans-serif,
    //font-family: "verdana",
    //fontFamily: 'Comic Sans MS',cursive		
    
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       * 
       *  //onChangeText={text => onChangeText(text)}
       */


  //alertItemName = (item) => {
  //  alert(item.physician)
  //}
  /*


  
  var ul = "http://kwoodall.herokuapp.com/postsql";
                                    //$http.post(ul,tj);
                                    $http.post(ul, tj).
                                        success(function (data, status, headers, config) {
                                            alert("update ok " + status);
                                        }).error(function (data, status) {
                                            alert("update not ok " + status);
                                        });
  */
/*

 onPress={() => navigate('Settings', { msg: item.physician })}>

<View style={styles.container2}>
          <Text style={styles.TextStyle}>{docs[0].physician}</Text>
          <Text style={styles.TextStyle}>{docs[1].physician}</Text>
          <Text style={styles.TextStyle}>{docs[2].physician}</Text>

        </View>


<View>
                {
                    doctors.map((item) => (
                        <TouchableOpacity
                            style={styles.container}
                            onPress={() => this.alertItemName(item)}>
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>




<View>
        <Text style={styles.TextStyle}>
          {testDoctors[0].physician}
        </Text>
        <Text style={styles.TextStyle}>
          {testDoctors[1].physician}
        </Text>
        <Text style={styles.TextStyle}>
          {testDoctors[2].physician}
        </Text>
      </View>
<TextInput>{JSON.stringify(doctors)}</TextInput>
async function GetDoctors() {
    const URL = 'https://desolate-shelf-9039.herokuapp.com/getphysicians';
    try {
      let response = await fetch(URL
      );
      let responseJson = await response.json();
      //return responseJson
    } catch (error) {
      console.log(error);
    }
  }

const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));

    //setDoctors: testDoctors;
    //alert("test " + testDoctors[0].physician);
    //setDoctors(testDoctors);
    //alert("test " + doctors.length + " " + testDoctors.length);
ambilData(){
	console.log('req list product');
	fetch("http")
	.then((response) => response.json())
	.then((responseJson) => {
		console.log(responseJson);
		this.setState( { data: responseJson });

	})
	.catch((error) => {
		console.error(error);
	});
}

<TextInput>{JSON.stringify(planets)}</TextInput>

<ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>


      import React, { Component } from 'react';
import {
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';export default class App extends Component {
  button() {
    Alert.alert(
      'Alert Title',
      'Alert message here...',
      [
        {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
        {text: 'YES', onPress: () => console.warn('YES Pressed')},
      ]
    );
  }render() {
    return (
        <TouchableOpacity onPress={() => this.button()}>
          <Text>Button</Text>
        </TouchableOpacity>
    );
  }
}

Alert.alert(
  'Alert Title',
  'Alert message here...',
  [
    {text: 'Ask me later', onPress: () => console.warn('Ask me later pressed')},
    {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.warn('OK Pressed')},
  ],
  { cancelable: false }
);


import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts = {
  'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  'Inter-SemiBoldItalic':
    'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Platform Default</Text>
          <Text style={{ fontFamily: 'Inter-Black' }}>Inter Black</Text>
          <Text style={{ fontFamily: 'Inter-SemiBoldItalic' }}>
            Inter SemiBoldItalic
          </Text>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}



*/


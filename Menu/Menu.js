import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Msg = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCars, setOpenCars] = useState(false);
  const [openSplash, setOpenSplash] = useState(false);

  const onPressMenu = () => {
    setOpenMenu(true);
    setOpenCars(false);
    setOpenSplash(false);
  };

  const onPressCars = () => {
    setOpenMenu(false);
    setOpenCars(true);
    setOpenSplash(false);
  };

  const onPressSignOut = () => {
    setOpenMenu(false);
    setOpenSplash(true);
  };

  let val =
    "https://res.cloudinary.com/lcbklf5b3/image/upload/v1468021812/corvette_dwf3oe.jpg";

  const ShowNext = () => {
    if (openMenu) {
      return (
        <View>
          <Text style={styles.Card2} onPress={onPressCars}>
            Cars
          </Text>
          <Text style={styles.Card3}>Settings</Text>
          <Text style={styles.Card4} onPress={onPressSignOut}>
            Sign Out
          </Text>
        </View>
      );
    } else return null;
  };

  const ShowCars = () => {
    if (openCars) {
      return (
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: val
            }}
          />
        </View>
      );
    } else return null;
  };

  const ShowSplash = () => {
    if (openSplash) {
      return (
        <View>
          <Image
            style={{ width: 300, height: 300, marginTop: 15 }}
            source={require("../assets/images/splashScreen.jpg")}
          />
        </View>
      );
    } else return null;
  };

  return (
    <View>
      <ScrollView>
        <View>
          <Text style={styles.TextMore} onPress={onPressMenu}>
            Menu
          </Text>
        </View>
        <View>
          <ShowNext />
        </View>
        <View>
          <ShowCars />
        </View>
        <View>
          <ShowSplash />
        </View>
      </ScrollView>
    </View>
  );
};

export default function Menu() {
  return <Msg />;
}

const styles = StyleSheet.create({
  BackColor: {
    backgroundColor: "#8FBC8F"
  },
  TextMore: {
    marginTop: 10,
    color: "black",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500"
  },
  logo: {
    width: 300,
    height: 200
  },
  Card1: {
    marginTop: 10,
    textAlign: "center",
    height: 40,
    width: "100%",
    backgroundColor: "black",
    color: "white",
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  Card2: {
    marginTop: 10,
    textAlign: "center",
    height: 40,
    width: "100%",
    backgroundColor: "#9b5de5",
    color: "white",
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  Card3: {
    marginTop: 10,
    textAlign: "center",
    height: 40,
    width: "100%",
    backgroundColor: "#f15bb5",
    color: "black",
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  Card4: {
    marginTop: 10,
    textAlign: "center",
    height: 40,
    width: "100%",
    backgroundColor: "red",
    borderRadius: 15,
    color: "black",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 30
  }
});
//-------------------------------------------------------------------------

/*
const Stuff = ({ value }) => {
  return (
    <View>
      <Text style={styles.TextMore}>
        {value}
      </Text>
    </View>
  );
};

//const message = "Testing more stuff";
//const message2 = "Testing things";

//<Stuff value={message} />

//const [stuff, setStuff] = useState(0);
// data
//import data from "../data.json";

// router
//import { withRouter } from "react-router-dom";

// styling
//import "/RNOKAY/Menu/Menu.css";

/*
const Dashboard = () => {  
  return <h5>Dashboard option</h5>;
}

const Services = () => {
  return <h5>Services option</h5>;
}

const About = () => {
  return <h5>About option</h5>;
}



onst MenuStuff = props => {
  // conditionally render dropdown affect based on this boolean
  const [openMenu, setOpenMenu] = useState(false);

  // takes route string as parameter
  //const pushToRoute = route => {
  //  props.history.push(route);
  //  setOpenMenu(false); //false
  //};

  // render each menu item after initial Menu button
  const renderMenuItems = data => {
    const colorArr = ["#9b5de5", "#f15bb5", "#00BBF9"];

    let colorCounter = -1;

    //return { MenuStuff };
  };
};

 <View>
        <Text>TESTING OK maybe</Text>
      </View>

    return data.menu.map((item, index) => {
      // if counter is over 2, resets to 0
      // for colorArr bracket notation to get sequence of colors
      colorCounter < 2 ? colorCounter++ : (colorCounter = 0);

      // dynamic styles for each menu item
      const itemStyle = {
        top: `${index * 1.8}em`,
        backgroundColor: colorArr[colorCounter]
      };
      //onClick={() => pushToRoute(item.route)}>
      //onClick={() => alert(item.id + ' ' + item.name + ' ' + item.route)}>
    });

    */

/*
  return (
    <div className="Menu">
      <div className={"m-item m-logo"} onClick={() => setOpenMenu(!openMenu)}>
        Menu
      </div>

      {renderMenuItems(data)}
    </div>
  );
};


import img from './img/bg.gif';

const Content = styled.div
border: 1px solid #000;
background-image: url(${img});
width: 2000px;
height: 2000px;
;



*/

//export default withRouter(Menu);
//export default Menu;
/*
  return (
    <div className="Menu">
      <div className={"m-item m-logo"} onClick={() => setOpenMenu(!openMenu)}>
        Menu
      </div>

      {renderMenuItems(data)}
    </div>
  );

*/

//Mitem: {
//position: absolute,
//top: 0,
//width: "5.5em",
//backgroundColor: "#301a4b"
//boxShadow: "1px 2px 2px #301a4b",

//padding: "0.2em",

//borderRadius: "1em",

//display: flex,
//alignItems: center,
//justifyContent: center,

//ontSize: "1.5em",
//color: "#edffec"
//cursor: pointer,

//transition: "1s"
//}
//MitemHover: {
//border: "1px solid black"
//}
/*
  mlogo: {
    //zindex: 1
  },
  open1: {
    //top: "1.8em",
    backgroundColor: "#9b5de5"
  },
  open2: {
    //top: "3.6em",
    backgroundColor: "#f15bb5"
  },
  open3: {
    //top: "5.4em",
    backgroundColor: "#00bbf9"
  }
  */

/*
      return (
        <div
          className="Mitem"
          key={item.id}
          style={openMenu ? itemStyle : null}
          onClick={() => alert("hey")}
        >
          {item.name}
        </div>
      );

      */

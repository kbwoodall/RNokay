import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useStateValue } from '../components/state';

const updateMessage = (param, theme, dispatch) => {
    //console.log("show color " + theme.primary);
    //console.log("show message " + theme.msg);
    console.log("return from Lists" + " " + param.pic);

    dispatch({
        type: 'changeTheme', newTheme: {
            primary: 'blue',
            msg: param.name,
            pic: param.pic,
            desc: param.desc
        }
    })
    return ("return from Lists" + " " + param.name);
}
export default function List() {

    const [{ theme }, dispatch] = useStateValue();

    const state = {
        names: [
            {
                id: 0,
                name: 'Corvette',
                pic: 'https://res.cloudinary.com/lcbklf5b3/image/upload/v1468021812/corvette_dwf3oe.jpg',
                desc: 'The Chevrolet Corvette, colloquially known as the Vette, is a two-door, two-passenger sports car manufactured and marketed by Chevrolet across more than 60 years of production and eight design generations. From 1953 to 2019, it was front-engined, and since 2020, it is mid-engined.'
            },
            {
                id: 1,
                name: 'Doctors',
                pic: 'https://res.cloudinary.com/lcbklf5b3/image/upload/v1561664574/doctors_afcsuu.jpg',
                desc: 'Show doctors'
            },
            {
                id: 2,
                name: 'Operating Room',
                pic: 'https://res.cloudinary.com/lcbklf5b3/image/upload/v1565924543/surgery_cm7vsu.jpg',
                desc: 'Actual operating room at St Rose'
            },
            {
                id: 3,
                name: 'Maine Coon',
                pic: 'https://res.cloudinary.com/lcbklf5b3/image/upload/v1565924527/natcho_o2ci7f.jpg',
                desc: 'The Maine Coon is a large and sociable cat, hence its nickname, "the gentle giant". It is characterized by a prominent ruff along its chest, robust bone structure, rectangular body shape, an uneven two-layered coat with longer guard hairs over a silky satin undercoat, and a long, bushy tail.'
            }
        ]
    }

    return (
        <View>
            {
                state.names.map((item, index) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.container}
                        onPress={() => updateMessage(item, theme, dispatch)}>
                        <Text style={styles.text}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 15,
        marginTop: 3,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    },
})

//onPress={() => this.alertItemName(item)}>

/*
const setValue = (param) => {
    const [{ theme }, dispatch] = useStateValue();
    dispatch({ type: 'changeTheme', newTheme: { primary: 'blue', msg: param.name } })
    let rValue = theme.msg;
    console.log("from setValue List.js " + rValue);
    return rValue;
}

const alertItemName = (item) => {
    const [{ theme }, dispatch] = useStateValue();
    alert(item.name + " ");
}


const updateMessage = async (param, theme, dispatch) => {
    console.log("show color " + theme.primary);
    console.log("show message " + theme.msg);
    const date = moment()
        .utcOffset('+17:00')
        .format(' hh:mm:ss a');
    console.log(date);

    await dispatch({ type: 'changeTheme', newTheme: { primary: 'blue', msg: date } })
    console.log("show message " + theme.msg);
}

const ShowButton = () => {
    const [{ theme }, dispatch] = useStateValue();
    let val = "wassup";
    return (
        <View>
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                //onPress={() => updateMessage("hey bub")}
                onPress={() => updateMessage(val, theme, dispatch)}
            >
                <Text style={styles.TextStyle}> Get Stuff</Text>
            </TouchableOpacity>
        </View>
    )
}


*/
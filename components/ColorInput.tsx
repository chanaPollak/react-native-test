import React from 'react'
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'

const ColorInput = (props: { color: string, onColorChanged: (value: string) => void }) => {

    const selectedColor = ''

    const viewColorHandler = () => {
        console.log('button pressed: ' + this.selectedColor)
        if (/^[0-9A-Fa-f]+$/.test(this.selectedColor)) {
            console.log('good color')
            props.onColorChanged(this.selectedColor)
        } else {
            alert('Color input is not an hex syntex!')
            console.log('bad color')
        }
        console.log('---------------*******---------------')
    };


    return (
        <View style={styles.view}>
            <Text style={styles.title}>Enter hexadecimal color:</Text>
            <View style={styles.inputView}>
                <TextInput placeholder='enter text here' style={styles.inputText}
                    onChangeText={value => { this.selectedColor = value }} />
                <TouchableOpacity style={styles.button} onPress={viewColorHandler}>
                    <Text style={styles.buttonText}>GO</Text>
                </TouchableOpacity>                
            </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 18,
        color: 'steelblue',
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    inputText: {
        width: '70%',
        height: 40,
        borderColor: 'steelblue',
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 10,
        color: 'steelblue'
    },
    button: {
        width: '25%',
        borderTopRightRadius: 5,
        padding: 10,
        backgroundColor: 'steelblue',
        height: 40,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    buttonText: { color: 'white', },   
});

export default ColorInput;
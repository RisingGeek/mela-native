import React from 'react';
import { ImageBackground, Text, Dimensions, StyleSheet, View } from 'react-native';
import KurtiDiscount from '../assets/images/KurtiDiscount.png';

export default function KurtiStore() {
    const { width } = Dimensions.get('window');
    const ratio = width / 541;

    return (
        <ImageBackground source={KurtiDiscount} style={{ width: width, height: 362 * ratio }}>
            <View style={styles.view}>
                <Text style={styles.upto}>Upto</Text>
                <Text style={styles.discount}>25% Off</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    view: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 40,
        justifyContent:'center',
    },
    upto: {
        color: '#ffffff',
        fontStyle: 'italic',
        fontSize: 32
    },
    discount: {
        color: '#ffffff',
        fontSize: 35,
        fontWeight: 'bold'
    }
})
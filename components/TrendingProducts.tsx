import React from 'react';
import { ImageBackground, Dimensions, Text, View, ToastAndroid, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Trending from '../assets/images/Trending.png';

export default function TrendingProducts() {
    const { width } = Dimensions.get('window');
    const ratio = width / 541;

    const showToast = () => {
        ToastAndroid.show("Products will be available soon!",
            ToastAndroid.CENTER)
    }

    return (
        <ImageBackground source={Trending} style={{ width: width, height: 362 * ratio }}>
            <View style={styles.trending}>
                <Text style={styles.heading}>Trending Products</Text>
                <TouchableOpacity onPress={showToast}>
                    <View style={styles.button}>
                        <LinearGradient colors={['#ff4c86', '#ff902b']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles['linear-button']}>
                            <Text style={styles['btn-text']}>Shop Now</Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
                <Text style={styles.discount}>Upto 60% off</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    trending: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    button: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 10
    },
    ['linear-button']: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20
    },
    ['btn-text']: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    discount: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    }
});
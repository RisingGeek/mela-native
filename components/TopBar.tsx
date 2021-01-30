import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TopBar() {
    return (
        <View style={styles['top-bar']}>
            <View style={styles.store}>
                <TouchableOpacity style={styles.back}>
                    <Text style={styles.back}>&lt;-</Text>
                </TouchableOpacity>
                <Text style={styles.heading}>Kurti Store</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ['top-bar']: {
        backgroundColor: '#4c102b',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    store: {
        flexDirection: 'row',
    },
    back: {
        color: '#ffffff',
        fontSize: 20,
        marginRight: 5,
    },
    heading: {
        color: '#ffffff',
        fontSize: 20,
    }
});
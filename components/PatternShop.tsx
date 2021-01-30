import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageSourcePropType } from 'react-native';
import Necklace from '../assets/images/Necklace.png';

export default function PatternShop() {
    const patternProducts: { text: string, img: ImageSourcePropType }[] = [{ text: 'A-Line', img: Necklace }, { text: 'Anarkali', img: Necklace },
    { text: 'Angrakha', img: Necklace }, { text: 'Long staight', img: Necklace },
    { text: 'Overlay', img: Necklace }, { text: 'Flared', img: Necklace }]

    return (
        <View style={styles.wrapper}>
            <View style={styles.inline}>
                <Text style={styles.heading}>Shop by Pattern</Text>
            </View>

            {/* Shop by pattern list */}
            <View style={styles.list}>
                {
                    patternProducts.map(product => (
                        <View key={product.text} style={styles['list-item']}>
                            <Image source={product.img} style={styles['list-item-img']} />
                            <Text style={styles['list-item-text']}>{product.text}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
    },
    inline: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    heading: {
        fontSize: 18,
        color: '#e53838',
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: '#f5cdab',
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    ['list-item']: {
        width: '47%',
        marginLeft: 4,
        marginRight: 4,
        marginTop: 10,
    },
    ['list-item-img']: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    ['list-item-text']: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#e53838',
    }
});
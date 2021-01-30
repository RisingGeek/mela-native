import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Necklace from '../assets/images/Necklace.png';

export default function TopBrands() {
    const patternProducts: { text: string, img: ImageSourcePropType }[] = [
        { text: '7 Seasons', img: Necklace }, { text: 'Ajmera Fashion', img: Necklace },
        { text: 'Kinjovilla Fashion', img: Necklace }, { text: 'Meet Fashion', img: Necklace },
        { text: 'Radhika Fashion', img: Necklace }, { text: 'Mannat Fashion', img: Necklace }];
        
    return (
        <View style={styles.wrapper}>
            <View style={styles.inline}>
                <Text style={styles.heading}>Top Brands</Text>
            </View>

            {/* Top Brands list */}
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
        flexWrap: 'wrap',
    },
    ['list-item']: {
        width: '30%',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    ['list-item-img']: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 10,
    },
    ['list-item-text']: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#778299',
    }
});
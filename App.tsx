import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import KurtiStore from './components/KurtiStore';
import PatternShop from './components/PatternShop';
import TrendingProducts from './components/TrendingProducts';
import TopBrands from './components/TopBrands';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar></StatusBar>
        <TopBar />
        <KurtiStore />
        <PatternShop />
        <TrendingProducts />
        <TopBrands />
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

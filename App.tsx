import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StoreCard from './src/ui/components/store-card';
import { Skin } from './src/types/skin';
import StoreScreen from './src/ui/screens/store-screen';


const MOCK_SKINS: Skin[] = [
  {
    uuid: '1',
    name: 'Reaver Vandal',
    picture: 'https://media.valorant-api.com/weaponskinlevels/4504f23a-4d92-0587-485e-35951402eeda/displayicon.png',
    price: 1775,
  },
  {
    uuid: '2',
    name: 'Prime Spectre',
    picture: 'https://media.valorant-api.com/weaponskinlevels/4504f23a-4d92-0587-485e-35951402eeda/displayicon.png',
    price: 1775,
  },
  {
    uuid: '3',
    name: 'Glitchpop Phantom',
    picture: 'https://media.valorant-api.com/weaponskinlevels/4504f23a-4d92-0587-485e-35951402eeda/displayicon.png',
    price: 2175,
  },
  {
    uuid: '4',
    name: 'Elderflame Operator',
    picture: 'https://media.valorant-api.com/weaponskinlevels/4504f23a-4d92-0587-485e-35951402eeda/displayicon.png',
    price: 2475,
  },
];

export default function App() {
  return <StoreScreen skins={MOCK_SKINS} />;
}
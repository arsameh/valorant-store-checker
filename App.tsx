import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StoreCard from './src/ui/components/store-card';
import { Skin } from './src/types/skin';
import StoreScreen from './src/ui/screens/store-screen';
import LoginScreen from './src/ui/screens/login-screen';
import PromptAndParseLogin from './src/auth/prompt-and-parse-login.native';
import { Cookies } from '@preeternal/react-native-cookie-manager';
import { AuthTokens } from './src/types/auth-tokens';
import { getEntitlement } from './src/auth/get-entitlement';
import { getShard } from './src/auth/get-shard';
import { getSkinInfo } from './src/api/get-skin-info';
import { getStore } from './src/api/get-skin-offers';
import { RiotInfo } from './src/types/riot-info';
import { parseSkinOffers } from './src/api/parse-skin-offers';
import { throwExpression } from './src/util/throw-expression';
import { processLogout } from './src/auth/process-logout';

export default function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isLoadingStore, setIsLoadingStore] = useState(false);
  const [storeData, setStoreData] = useState<any[] | null>(null);
  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(null);

  const handleLoginSuccess = async (tokens: AuthTokens, cookies: Cookies) => {

    setIsLoginVisible(false);
    setIsLoadingStore(true);

    try {
      console.log('1. Fetching Entitlement...');
      const entitlementToken = await getEntitlement(tokens);
      console.log('Entitlement:', entitlementToken ? 'OK' : 'MISSING');

      console.log('2. Fetching Shard...');
      const shard = await getShard(tokens);
      console.log('Shard:', shard);
      
      const userSession: RiotInfo = {
        authTokens: tokens,
        entitlementToken: entitlementToken,
        shard: shard,
        sessionCookies: cookies,
      }

      console.log('3. Fetching Store...');
      const skinOffers = await getStore(userSession);
      const parsedSkinOffers = await parseSkinOffers(skinOffers);

      console.log('4. Fetching Skin Info...');
      const skins = await getSkinInfo(parsedSkinOffers);

      setStoreData(skins);
    }
    catch (error) {
      throwExpression('Failed to load store pipeline:' + error);
    } finally {
      setIsLoadingStore(false);
    }
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const handleLogout = () => {
    processLogout();
    setAuthTokens(null);
    setStoreData(null);
  }

  
  if (isLoadingStore) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff4655" />
        <Text style={styles.loadingText}>LOADING STOREFRONT...</Text>
      </View>
    );
  }

  if (storeData) {
    return <StoreScreen skins={storeData} onLogout={handleLogout} />;
  }

  return (
    <View style={styles.container}>
      <LoginScreen onLoginPress={() => setIsLoginVisible(true)} />

      <PromptAndParseLogin
        visible={isLoginVisible}
        onSuccess={handleLoginSuccess}
        onClose={handleLoginClose}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1923' },
  loadingContainer: { 
    flex: 1, 
    backgroundColor: '#0f1923', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  loadingText: { 
    color: '#ece8e1', 
    marginTop: 16, 
    fontWeight: 'bold', 
    letterSpacing: 1 
  },
});
import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { parseAuthTokens } from './parse-auth-tokens';
import { throwExpression } from '../util/throw-expression';
import { parseSessionCookies } from './parse-session-cookies';
import { AuthTokens } from '../types/auth-tokens';
import { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';

const LOGIN_URL = 'https://auth.riotgames.com/authorize?client_id=play-valorant-web-prod&nonce=1&redirect_uri=https://playvalorant.com/opt_in&response_type=token%20id_token&scope=account%20openid';
const REDIRECT_URL = 'https://playvalorant.com/opt_in';

interface PromptAndParseLoginProps {
  visible: boolean;
  onSuccess: (authTokens: AuthTokens, sessionCookies: Record<string, string>) => void;
  onClose: () => void;
}

export default function promptAndParseLogin({ visible, onSuccess, onClose }: PromptAndParseLoginProps) {

  const handleRedirect = async (url: string) => {
    try {
      const extractedTokens = await parseAuthTokens(url);
      const cookies = await parseSessionCookies();

      onSuccess(extractedTokens, cookies);
      
    } catch (error) {
      throwExpression('Error occured: ' + error);
      onClose();
    }
  };

  const handleShouldStartLoadWithRequest = (request: ShouldStartLoadRequest) => {
    const link = request.url;
    if (link.startsWith(REDIRECT_URL) && link.includes('access_token')) {
      handleRedirect(request.url);
      
      return false;
    }

    return true;
  }

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: LOGIN_URL }}
          onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
          incognito={false}
          thirdPartyCookiesEnabled={true}
          sharedCookiesEnabled={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1923',
  },
});
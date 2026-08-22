import { SafeAreaView } from "react-native-safe-area-context";
import { Skin } from "../../types/skin";
import { Text, FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import StoreCard from "../components/store-card";

interface StoreScreenProps {
  skins: Skin[];
  onLogout: () => void;
}

export default function StoreScreen({ skins, onLogout }: StoreScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          <FlatList
            data={skins}
            keyExtractor={(item) => item.uuid}
            renderItem={({ item }) => <StoreCard {...item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listPadding}
          />
        </View>

        <View style={styles.navbar}>
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout} activeOpacity={0.7}>
            <Text style={styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f1923',
  },
  container: {
    flex: 1,
  },
  cardsContainer: {
    height: '90%',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  listPadding: {
    paddingBottom: 16,
  },
  navbar: {
    height: '10%',
  },
  logoutButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#2b3135',
    borderRadius: 6,
  },
  logoutText: {
    color: '#ff4655',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
});
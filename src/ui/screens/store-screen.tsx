import { SafeAreaView } from "react-native-safe-area-context";
import { Skin } from "../../types/skin";
import { FlatList, View, StyleSheet } from "react-native";
import StoreCard from "../components/store-card";

export default function StoreScreen({ skins }: { skins: Skin[] }) {
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

        <View style={styles.navbar} />

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
});
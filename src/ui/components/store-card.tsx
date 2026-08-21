import { Dimensions, View, Image, Text, StyleSheet } from "react-native";
import { Skin } from "../../types/skin";

export default function StoreCard(skin: Skin) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image 
          source={{ uri: skin.picture }} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.skinName} numberOfLines={1}>
          {skin.name}
        </Text>
        <Text style={styles.price}>{skin.price} VP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 140,
    backgroundColor: '#1f2326',
    borderRadius: 12,
    padding: 12,
    marginBottom: 32,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#2b3135',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
  },
  image: {
    width: '85%',
    height: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  skinName: {
    color: '#ece8e1',
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  price: {
    color: '#ff4655',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
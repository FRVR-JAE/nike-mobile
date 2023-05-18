import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import products from "../data/products";

const ProductScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemConatiner}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemConatiner: {
    width: "50%",
    padding: 1,
  },
  image: {
    // change to 100% when you want to display it on your phone
    width: "300px",
    aspectRatio: 1,
  },
});

export default ProductScreen;

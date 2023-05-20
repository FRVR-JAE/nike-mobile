import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import products from "../data/products";

const ProductScreen = ({ navigation }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate('Product Details')}
          style={styles.itemConatiner}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
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
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductScreen;

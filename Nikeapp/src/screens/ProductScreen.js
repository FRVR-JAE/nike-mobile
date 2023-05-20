import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";

import { productSlice } from "../store/productSlice";

const ProductScreen = ({ navigation }) => {

const dispatch = useDispatch()

const products = useSelector((state) => state.products.products)

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // UPDATE selected product
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate('Product Details')}}
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

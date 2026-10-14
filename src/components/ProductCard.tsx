
import { Alert, Image, Pressable, StyleSheet, Text } from 'react-native';

type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Pressable
      style={styles.productCard}
      onPress={() =>
        Alert.alert(
          product.name,
          `Price: ${product.price}\nCategory: ${product.category}`
        )
      }
    >
      <Image
        source={{ uri: product.image }}
        style={styles.productImage}
        resizeMode="cover"
      />

      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.categoryText}>{product.category}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 14,
    elevation: 5,
    marginHorizontal: 5,
  },
  productImage: {
    width: '100%',
    height: 115,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    color: '#222222',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginTop: 6,
    marginBottom: 6,
  },
  categoryText: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 6,
  },
});

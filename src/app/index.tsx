
import { useState } from 'react';
import { Alert,FlatList,Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { products }from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Accessories',
  'Home',
];


function SectionHeader({ title }: { title: string }) {
  return <Text style={styles.sectionTitle}>{title}</Text>;
}

function CategoryItem({
  name,
  onPress,
  selected,
}: {
  name: string;
  onPress: () => void;
  selected: boolean;
}) {
  return (
    <Pressable
      style={[
        styles.category,
        selected && { backgroundColor: '#4F46E5' },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.categoryText,
          selected && { color: '#FFFFFF' },
        ]}
      >
        {name}
      </Text>
    </Pressable>
  );
}

export default function HomeScreen() {
const [selectedCategory, setSelectedCategory] = useState('All');
const [searchText, setSearchText] = useState('');

const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === 'All' || product.category === selectedCategory;

  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchText.toLowerCase());

  return matchesCategory && matchesSearch;
});
  return(
<FlatList
    style={styles.container}
    contentContainerStyle={styles.content}
    data={filteredProducts}
    keyExtractor={(item) => item.id}
    numColumns={2}
    columnWrapperStyle={styles.productsGrid}
    renderItem={({ item }) => <ProductCard product={item} />}
    ListHeaderComponent={
      <View>
      <View style={styles.headerRow}>
        <Text style={styles.storeName}>StyleCart</Text>
      </View>

      <Text style={styles.welcome}>Welcome back, shopper! 👋</Text>

      <TextInput style={styles.searchInput} placeholder="Search products..." value={searchText} onChangeText={setSearchText}/>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Big Shopping Days!</Text>
        <Text style={styles.bannerText}>
          Discover your favorites at amazing prices.
        </Text>
      </View>

      <SectionHeader title="Shop by Category" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryRow}>
          {categories.map((category) => (
            <CategoryItem 
            key={category} 
            name={category} 
            selected={selectedCategory === category}
            onPress={()=>setSelectedCategory(category)}
            />
          ))}
        </View>
      </ScrollView>
      </View>
      }
      ListEmptyComponent={
        <Text style={{textAlign:'center',marginTop:20}}>
          No products found in this category.
        </Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },
  content: {
    padding: 16,
    paddingTop: 55,
    paddingBottom: 35,
  },
  storeName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  welcome: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
    marginBottom: 20,
  },
  searchInput: {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#DDDDDD',
  borderRadius: 12,
  paddingHorizontal: 15,
  paddingVertical: 12,
  fontSize: 16,
  marginBottom: 20,
},
  banner: {
    backgroundColor: '#4F46E5',
    padding: 22,
    borderRadius: 16,
    marginBottom: 24,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 21,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 14,
    marginTop: 8,
  },
  categoryRow: {
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 22,
  },
  category: {
    backgroundColor: '#E8E7FF',
    paddingVertical: 13,
    paddingHorizontal: 17,
    borderRadius: 12,
  },
  categoryText: {
    color: '#4338CA',
    fontWeight: '600',
  },
  productsGrid: {
    justifyContent:'space-between',
    marginBottom:16,
  },
  productCard: {
    flex:1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 14,
    elevation:15,
    marginHorizontal:5,
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
    color: '#222',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginTop: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerRow: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 8,
},

});
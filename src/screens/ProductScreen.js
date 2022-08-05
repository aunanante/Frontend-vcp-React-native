import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchProduit from '../components/SearchProduit';
import Products from '../components/Products';

async function getList(id) {
  try {
    //const serverUrl = Platform.OS == 'ios' ? "localhost" : "10.0.2.2:80";
    let urlForAxios = `http://localhost:8080/api/test/all/categories_products/${id}`;
    const { data: response } = await axios.get(urlForAxios);
    return response;

  } catch (error) {
    console.log(error);
    console.log('tout ne va pas bien');
  }
}

const ProductScreen = ({ route, navigation }) => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const { id, categoryName } = route.params;

  useEffect(() => {
    let mounted = true;
    getList(id).then(items => {
      //console.log(items);
      setMasterData(items);
      setFilterData(items);
    });
    return () => mounted = false;
  }, []);

  return (
    <View  style={styles.container}>
      <SearchProduit setFilterData={setFilterData} masterData={masterData}/>
      <Products filterData={filterData} categoryName={categoryName}/>
      
      
    </View>
  )
}

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(241, 255, 237)",
    flex: 1,
  },
});
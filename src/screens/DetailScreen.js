import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchDetail from '../components/SearchDetail';
import Details from '../components/Details';

async function getList(id) {
  try {
    //const serverUrl = Platform.OS == 'ios' ? "localhost" : "10.0.2.2:80";
    let urlForAxios = `http://localhost:8080/api/test/all/products_details/${id}`;
    const { data: response } = await axios.get(urlForAxios);
    return response;

  } catch (error) {
    console.log(error);
    console.log('tout ne va pas bien');
  }
}

const DetailScreen = ({ route, navigation }) => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const { id, name} = route.params;

  useEffect(() => {
    let mounted = true;
    getList(id).then(items => {
      console.log(items);
      setMasterData(items);
      setFilterData(items);
    });
    return () => mounted = false;
  }, []);

  return (
    <View style={{flex: 1}}>
      {/* <SearchDetail setFilterData={setFilterData} masterData={masterData}/> */}
      <Details filterData={filterData} name={name}/>
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({});
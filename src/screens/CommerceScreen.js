import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Commerces from '../components/Commerces';
import SearchCommerce from '../components/SearchCommerce';

async function getList(id) {
  try {
    //const serverUrl = Platform.OS == 'ios' ? "localhost" : "10.0.2.2:80";
    let urlForAxios = `http://localhost:8080/api/test/all/villes_commerces/${id}`;
    const { data: response } = await axios.get(urlForAxios);
    return response;

  } catch (error) {
    console.log(error);
    console.log('tout ne va pas bien');
  }
}

const CommerceScreen = ({ route, navigation }) => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const { id, laVille } = route.params;

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
    <View style={styles.container}>
      <SearchCommerce setFilterData={setFilterData} masterData={masterData}/>
      <Commerces filterData={filterData} laVille={laVille} />
    </View>
  )
}

export default CommerceScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(241, 255, 237)",
    flex: 1,
  },
});
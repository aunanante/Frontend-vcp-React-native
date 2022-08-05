import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import SearchCategory from '../components/SearchCategory';

async function getList(id) {
    try {
        //const serverUrl = Platform.OS == 'ios' ? "localhost" : "10.0.2.2:80";
        let urlForAxios = `http://localhost:8080/api/test/all/commerces_categories/${id}`;
        const { data: response } = await axios.get(urlForAxios);
        return response;

    } catch (error) {
        console.log(error);
        console.log('tout ne va pas bien');
    }
}

const CategoryScreen = ({ route, navigation }) => {
    const [filterData, setFilterData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const { id, commerceName } = route.params;

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
            <SearchCategory setFilterData={setFilterData} masterData={masterData}/>
            <Categories filterData={filterData} commerceName={commerceName}/>
        </View>
    )
}

export default CategoryScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgb(241, 255, 237)",
      flex: 1,
    },
  });
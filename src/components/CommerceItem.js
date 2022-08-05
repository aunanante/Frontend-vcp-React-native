import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { elevation } from '../common/styles';
import { useNavigation } from '@react-navigation/native';


const CommerceItem = ({ commerce }) => {
  const navigation = useNavigation();

  return (

    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Category', {
          id: commerce.id,
          commerceName: commerce.commerceName,
        });
      }}
    >
      <View style={[styles.elevation, styles.container]} >
        {/* <Image style={styles.image} source={{ uri: commerce.image_url }} /> */}
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{commerce.commerceName}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{commerce.proprietaireName}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.rating}>{commerce.adresse}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.rating}>{commerce.telephone}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.rating}>{commerce.email}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CommerceItem;

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 120,
    alignSelf: "stretch",
    // borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,

  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color:'purple'
  },
  info: {
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "gold"
  },
});
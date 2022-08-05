import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { elevation } from '../common/styles';
import { useNavigation } from '@react-navigation/native';


const VilleItem = ({ ville }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Commerce', {
          id: ville.id,
          laVille: ville.villeName
        });
      }}
    >
      <View style={[styles.elevation, styles.container]} >

        <View style={styles.infoContainer}>
          <Text style={styles.header}>{ville.villeName}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default VilleItem;

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 50,
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
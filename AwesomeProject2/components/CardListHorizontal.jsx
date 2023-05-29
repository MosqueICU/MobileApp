import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

const CardListHorizontal = () => {
  const [items, setItems] = useState([
    {
      title: 'Item 1',
    },
    {
      title: 'Item 2',
    },
    {
      title: 'Item 3',
    },
    {
      title: 'Item 4',
    },
    {
      title: 'Item 5',
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        horizontal={true}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'black',
    width: 100,
    height: 40,
    borderRadius: 10,
    margin: 5,
  },
  title: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CardListHorizontal;

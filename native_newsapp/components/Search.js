import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context';
import { Entypo } from "@expo/vector-icons";
import SingleNews from './SingleNews';

const Search = () => {
  const { news: { articles } } = useContext(NewsContext);
  const [searchResult, setSearchResult] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();
  const handleSearch = (text) => {
    if (!text) {
      setSearchResult([]);
      return;
    }
    setSearchResult(articles.filter((query) => query.title.includes(text)))
  }

  const handleModal = (n) => {
    setModalVisible(true)
    setCurrentNews(n)
  }
  return (
    <View style={{...styles.searchContainer}}>
      <TextInput
        style={{...styles.search, backgroundColor: "#282C35", color: "white" }}
        onChangeText={(text) => handleSearch(text)}
        placeholder='Search for news'
        placeholderTextColor="white"
      />
      <View style={{...styles.searchResult}}>
        {searchResult.slice(0, 10).map((n) => (
            <TouchableOpacity key={n.title} activeOpacity={0.7} onPress={() => handleModal(n)}>
              <Text style={{...styles.singleResult, backgroundColor: "#282C35", color: "white"}}>{n.title}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <Modal
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.closeIcon}>
          <Entypo size={30} color="white" name='circle-with-cross' />
        </TouchableOpacity>
        <View style={{ height: "100%", transform: [{ scaleY: -1 }] }}>
          <SingleNews item={currentNews} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    position: "relative",
  },
  search: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 5
  },
  searchResult: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 50
  },
  singleResult: {
    borderRadius: 5,
    shadowColor: "black",
    padding: 10,
    margin: 0.5,
    elevation: 5
  },
  closeIcon: {
    position: 'absolute',
    zIndex: 2,
    right: 0,
    margin: 20
  }
})

export default Search
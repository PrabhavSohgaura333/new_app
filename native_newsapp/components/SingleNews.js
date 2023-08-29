import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
const SingleNews = ({ item, index }) => {
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ width: windowWidth, height: "45%", resizeMode: "cover" }}
      />
      <View style={{ ...styles.description }}>
        <Text style={{ ...styles.title, color: "white" }}>{item.title}</Text>
        <Text style={{ ...styles.content, color: "white" }}>
          {item.description}
        </Text>
        <Text style={{ color: "white" }}>
          Short By
          <Text> {item.author ?? "unknown"} </Text>
              </Text>
              <ImageBackground
                  blurRadius={30}
                  source={{ uri: item.urlToImage }}
                  style={styles.footer}
              >
                  <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                      <Text style={{ fontSize: 15, color: 'white'}}>
                          '{item?.content?.slice(0,45)}...'
                      </Text>
                      <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold'}}>
                          Read more
                      </Text>
                  </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
  },
  description: {
      backgroundColor: "#282C35",
      flex: 1,
      padding: 15
    },
    footer: {
        height: 80,
        width: windowWidth,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'd7be69',
        justifyContent: 'center',
        paddingHorizontal: 20
  }
});

export default SingleNews;

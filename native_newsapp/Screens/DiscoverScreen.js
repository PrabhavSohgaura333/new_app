import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useContext } from "react";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";
import { categories, sources } from "../API/api";
import Search from "../components/Search";

const DiscoverScreen = () => {
  const { setCategory, setSource } = useContext(NewsContext);
  const windowWidth = Dimensions.get("window").width;
  const slideWidth = Math.floor(windowWidth / 3.5);
  return (
    <View styles={{ ...styles.discover }}>
      {/* search */}
      <Search />
      <Text style={{ ...styles.subtitle, color: "white" }}>Categories</Text>
      <Carousel
        layout="default"
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              style={{ ...styles.category }}
            >
              <Image
                source={{ uri: item.pic }}
                style={{ ...styles.categoryImage }}
              />
              <Text style={{ ...styles.name, color: "white" }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={slideWidth}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />

      <Text style={{ ...styles.subtitle, color: "white" }}>sources</Text>
      <View style={{ ...styles.sources }}>
        {sources.map((source) => {
          return (
            <TouchableOpacity
              style={{ ...styles.sourceContainer }}
              key={source.id}
              onPress={() => setSource(source.id)}
            >
              <Image
                source={{ uri: source.pic }}
                style={{ ...styles.sourceImage }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    paddingBottom: 8,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});

export default DiscoverScreen;

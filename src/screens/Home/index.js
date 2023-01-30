import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png";
import { FlatList } from "react-native-gesture-handler";
import { MoviesCard } from "../../components/movieCard";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import {NavigationContainer} from "@react-navigation/native"
// import moviesURL from "../../utils"

export const Home = ({navigation}) => {
  const navigate = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
        <Image style={styles.amazonLogoImg} source={AmazonLogo} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>
     
      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMoves}>
       
        <TouchableOpacity 
        title="go to films"
        onPress={() => navigation.navigate('filmScreen')}
        style={styles.TheWheel}
        >
          <Image style={styles.movieTheWheelImage} source={MovieTheWheel} />
        </TouchableOpacity>

        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "700",
            padding: 15,
          }}
        >
          Continue Watching
        </Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "700",
            padding: 15,
          }}
        >
          Crime Movies
        </Text>
        <FlatList
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "700",
            padding: 15,
          }}
        >
          Watch in your language
        </Text>
        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start",
  },
  header: {
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
    width: "30%",
    height: 60,
  },
  primeLogoImg: {
    width: "34%",
    height: 24,
  },
  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 26,
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  TheWheel: {
    width: "100%",
    alignItems: "center",
  },
  movieTheWheelImage: {
    width: "100%",
  },
  contentList: {
    paddingLeft: 18,
    paddingRight: 20,
  },
  contentMoves: {
    width: "100%"
  }
});

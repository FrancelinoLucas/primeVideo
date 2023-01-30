import { useLinkProps } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity } from "react-native";



export const MoviesCard = (props) => {
    return (
        <TouchableOpacity>
            <Image  style={Styles.img} source={props.movieURL} /> 
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    img: {
        marginLeft: 20,
    },
});
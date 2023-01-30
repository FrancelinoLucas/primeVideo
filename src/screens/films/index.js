import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png"
import persona from "../../assets/perfil.png"

const Films = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: "700",
                    color: "white",
                    marginLeft: 20,
                }}>Prime video</Text>
            </View>
            <View style={{width: "100%", alignItems: "center",}} >
                <Image style={{width: "100%"}} source={MovieTheWheel} />
            </View>
            <View>
                <Text style={{
                    color: "#A2A2A2",
                    marginLeft: 8,
                }}>#1 no Brasil</Text>
                <Text style={{
                    color: "white",
                    fontSize: 20,
                    marginLeft: 8,
                }}>The</Text>
                <Text style={{
                    marginLeft: 8,
                    marginTop: -10,
                    color: "white",
                    fontSize: 26,
                    fontWeight: "600",
                    letterSpacing: -2,
                }} >WHEEL OF TIME</Text>
            </View>
            <View style={styles.containerAssistir}>
                <TouchableOpacity style={styles.buttonAssistir}>
                    <Text style={{
                        fontWeight: "900",
                    }} >Assistir agora</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBaixar}>
                    <Text style={{
                        fontWeight: "900",
                        color: "white"
                    }} > Baixar o filme</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                width: "100%",
                alignItems: "center",
            }} >
                <Text style={{
                    width: "90%",
                    margin: 20,
                    color: "white",
                }} >A trama acompanha Moiraine (Rosamund Pike), membro de uma organização extremamente poderosa de mulheres praticantes de magia conhecida como Aes Sedai. Ela tem a importante missão de viajar junto com cinco jovens do vilarejo de Dois Rios em uma jornada perigosa e emocionante.</Text>
            </View>
        </View>
    );
};

export default Films;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: 'flex-start',
    },
    header: {
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        // alignItems: "center",
        justifyContent: "space-evenly",
    },
    containerAssistir:{
        width: "100%",
        alignItems: "center",

    },
    buttonAssistir: {
        width: "90%",
        backgroundColor: "white",
        alignItems: "center",
        padding: 15,   
        margin: 5,         
        borderRadius: 8,
    },
    buttonBaixar: {
        width: "90%",
        backgroundColor: "grey",
        alignItems: "center",
        padding: 15,
        borderRadius: 8,        
    },
});
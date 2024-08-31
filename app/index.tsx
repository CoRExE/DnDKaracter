import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to DnDKaracter</Text>
            <Link href="/app/characters" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>View Characters</Text>
                </TouchableOpacity>
            </Link>
            <Link href="/create" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create New Character</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});
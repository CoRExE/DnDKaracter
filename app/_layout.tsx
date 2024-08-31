import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="characters" options={{ title: "Characters" }} />
            <Stack.Screen name="create" options={{ title: "Create Character" }} />
            {/* TODO : Correct characters options */}
            <Stack.Screen
                name="characters/[id]"
                options={({ route }) => ({ title: `Character: ${route.params.id}` })}
            />
        </Stack>
    );
}
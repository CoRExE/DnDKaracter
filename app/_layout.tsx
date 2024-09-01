import { Stack } from "expo-router";
import { RouteProp, ParamListBase } from '@react-navigation/native';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="characters" options={{ title: "Characters" }} />
            <Stack.Screen name="create" options={{ title: "Create Character" }} />
            {/* TODO : Correct characters options */}
            <Stack.Screen
                name="characters/[id]"
                options={({ route }: { route: RouteProp<ParamListBase, string> }) => {
                    const id = (route.params as { id?: string })?.id;
                    const title = id ? `Character: ${id}` : "Unknown";
                    return { title };
                }}
            />
        </Stack>
    );
}

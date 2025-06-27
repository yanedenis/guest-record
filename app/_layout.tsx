import { colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Учёт гостей",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.text,
          }}
        />
      </Stack>
    </>
  );
}

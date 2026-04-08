import { View, Text, Pressable } from "react-native";
import useSocialAuth from "../hooks/useSocialAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

export default function SignInScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();
  const isGoogleClicked = loadingStrategy === "oauth_google";
  const isGithubClicked = loadingStrategy === "oauth_github";
  const isAppleClicked = loadingStrategy === "oauth_apple";

  const isLoading = isGoogleClicked || isGithubClicked || isAppleClicked;
  return (
    <SafeAreaView className="flex-1 bg-primary dark:bg-secondary" edges={["top"]}>
      <View className="h-56 w-56 bg-primary/80 dark:bg-background/40 rounded-full absolute -left-16 top-12" />
      <View className="h-72 w-72 bg-primary/70 dark:bg-background/35 rounded-full absolute right-[-74px] top-40" />

      <View className="px-6 py-4">
        <Text className="text-center  text-5xl font-extrabold tracking-tight text-primary-foreground uppercase font-mono dark:text-secondary-foreground">
          Grocify
        </Text>
        <Text className="mt-1 text-center text-[14px] text-muted-foreground">
          Plan smarter. Shop happier.
        </Text>
        <View className="mt-6 rounded-[30px] border border-white/20 bg-white/10 p-3">
          <Image
            source={require("../../assets/images/auth.png")}
            style={{ width: "100%", height: 300 }}
            contentFit="contain"
          />
        </View>
      </View>

      <View className="mt-8 flex-1 rounded-t-[36px] bg-card pb-8 pt-6">
        <View className="self-center rounded-full bg-secondary px-3 py-1">
          <Text className="text-xs  font-semibold uppercase tracking-[1px] text-secondary-foreground">
            Welcome Back
          </Text>
        </View>


        <Text className="mt-2 text-center text-sm text-muted-foreground">
          Choose a social provider and jump into your personalized grocery
          experience!
        </Text>

        <View className="m-6 mt-12">
          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border bg-card px-4 active:opacity-90 ${
              isLoading ? "opacity-70" : ""
            }`}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_google")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
              <Image
                source={require("../../assets/images/google.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>

            <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground">
              {isGoogleClicked
                ? "Connecting Google..."
                : "Continue with Google"}
            </Text>
            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>
          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border bg-card px-4 active:opacity-90 ${
              isLoading ? "opacity-70" : ""
            }`}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_github")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
              <FontAwesome name='github' size={24} color='#111111' />
            </View>

            <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground">
              {isGithubClicked
                ? "Connecting github..."
                : "Continue with Github"}
            </Text>
            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>
          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border px-4 active:opacity-90 bg-white ${
              isLoading ? "opacity-70" : ""
            }`}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_apple")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
              <FontAwesome name='apple' size={24} color='#111111' />
            </View>

            <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground">
              {isAppleClicked
                ? "Connecting apple..."
                : "Continue with Apple"}
            </Text>
            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

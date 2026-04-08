import { Stack } from "expo-router";
import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import '../global.css'
import {useColorScheme} from 'react-native'
import {ThemeProvider, DarkTheme, DefaultTheme} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function RootLayout() {
  const colorScheme   = useColorScheme();
  return (
    <SafeAreaProvider>

    <ClerkProvider publishableKey = {publishableKey} tokenCache={tokenCache}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme: DefaultTheme}>

    <Stack screenOptions={{headerShown: false}} />
      </ThemeProvider>
    </ClerkProvider>
    </SafeAreaProvider>
  )
    
}

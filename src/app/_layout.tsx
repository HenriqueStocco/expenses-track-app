import '../../global.css'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SQLiteProvider } from 'expo-sqlite'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

const RootNavigation = () => (
  <Stack
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name='login' />
  </Stack>
)

export default function RootLayout() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GluestackUIProvider mode='light'>
        <SQLiteProvider databaseName='payvo.db'>
          <StatusBar style='dark' />
          <RootNavigation />
        </SQLiteProvider>
      </GluestackUIProvider>
    </SafeAreaProvider>
  )
}

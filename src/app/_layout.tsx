import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SQLiteProvider } from 'expo-sqlite'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'

import { useAuthContext } from '@/hooks/useAuthContext'
import { AuthContextProvider } from '@/contexts/auth/provider'

const RootNavigation = () => {
  const { authState } = useAuthContext()

  if (authState === 'loading') return null

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Protected guard={authState === 'unauthenticated'}>
        <Stack.Screen name='auth' />
      </Stack.Protected>
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SQLiteProvider databaseName='payvo.db'>
        <StatusBar style='dark' />

        <AuthContextProvider>
          <RootNavigation />
        </AuthContextProvider>
      </SQLiteProvider>
    </SafeAreaProvider>
  )
}

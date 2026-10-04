import { Redirect, Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useAuthContext } from '@/hooks/useAuthContext'

export default function PayvoLayout() {
  const { authState } = useAuthContext()

  if (authState !== 'authenticated') <Redirect href='/auth' />

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <Tabs
        initialRouteName='home'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen name='home' />
      </Tabs>
    </SafeAreaView>
  )
}

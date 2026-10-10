import { Text } from 'react-native'
import { Redirect, Tabs } from 'expo-router'
import { LayoutGrid } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { COLORS, TYPOGRAPHY } from '@/constants/themes'
import { useAuthContext } from '@/hooks/useAuthContext'

export default function PayvoLayout() {
  const { authState } = useAuthContext()

  if (authState !== 'authenticated') <Redirect href='/auth' />

  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{ flex: 1, backgroundColor: COLORS.default.background }}
    >
      <Tabs
        initialRouteName='home'
        screenOptions={{
          headerShown: false,
          animation: 'none',
          tabBarStyle: {
            height: 50,
            paddingTop: 2,
            paddingBottom: 10,
            backgroundColor: COLORS.default.foreground,
          },
          tabBarLabel: ({ color, children }) => (
            <Text
              style={{
                color,
                fontSize: TYPOGRAPHY.sizes.small,
                fontWeight: '600',
              }}
            >
              {children}
            </Text>
          ),
          tabBarActiveTintColor: COLORS.default.info,
          tabBarInactiveTintColor: COLORS.default.background,
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color, focused, size }) => (
              <LayoutGrid size={size} focusable={focused} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}

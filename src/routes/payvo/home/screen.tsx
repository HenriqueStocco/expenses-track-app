import { Text, View } from 'react-native'
import { styles } from './styles'
import { z } from 'zod'

export function HomeScreen() {
  const a = z.string()
  return (
    <View style={styles.container}>
      <Text>Home {a.parse('opa')}</Text>
    </View>
  )
}

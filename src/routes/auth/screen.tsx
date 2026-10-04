import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'
import { useAuthContext } from '@/hooks/useAuthContext'

export function AuthScreen() {
  const { login } = useAuthContext()

  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = () => {
    if (inputValue !== null && inputValue.length >= 1) {
      login(inputValue)
    }

    return
  }

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payvo</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formSection}>
          <Text style={styles.formInputLabel}>
            Entre com seu nome de usuario:
          </Text>

          <TextInput
            value={inputValue}
            defaultValue=''
            style={styles.formInput}
            placeholder='Nome de usuario'
            onChangeText={v => setInputValue(v)}
          />
        </View>

        <TouchableOpacity style={styles.formButton} onPress={handleSubmit}>
          <Text style={styles.formButtonLabel}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

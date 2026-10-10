import { Text, View } from 'react-native'

import { styles } from './styles'

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.ballanceCard}>
        <Text style={styles.ballanceCardTitle}>Saldo</Text>

        <View style={styles.ballanceCardValueSection}>
          <Text style={styles.ballanceCardCurrency}>R$</Text>

          <Text style={styles.ballanceCardValue}>7.700,00</Text>
        </View>

        <View style={styles.ballanceCardDiffSection}>
          <View style={styles.ballanceCardIncomeSide}>
            <Text style={styles.ballanceCardIncomeLabel}>Recebido</Text>

            <Text style={styles.ballanceCardIncomeValue}>8.000,00</Text>
          </View>

          <View style={styles.ballanceCardExpenseSide}>
            <Text style={styles.ballanceCardExpenseLabel}>Gastos</Text>
            <Text style={styles.ballanceCardExpenseValue}>900,00</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

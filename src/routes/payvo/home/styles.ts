import { StyleSheet } from 'react-native'

import { COLORS, SPACING, TYPOGRAPHY } from '@/constants/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    backgroundColor: COLORS.default.background,
  },
  ballanceCard: {
    flex: 1,
    backgroundColor: COLORS.default.foreground,
    padding: SPACING.md,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.lg,
  },
  ballanceCardTitle: {
    fontSize: TYPOGRAPHY.sizes.heading,
    fontWeight: '700',
    color: COLORS.default.background,
  },
  ballanceCardValueSection: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  ballanceCardCurrency: { color: COLORS.default.background },
  ballanceCardValue: { color: COLORS.default.background },
  ballanceCardDiffSection: {},
  ballanceCardIncomeSide: {},
  ballanceCardIncomeLabel: { color: COLORS.default.background },
  ballanceCardIncomeValue: { color: COLORS.default.background },
  ballanceCardExpenseSide: {},
  ballanceCardExpenseLabel: { color: COLORS.default.background },
  ballanceCardExpenseValue: { color: COLORS.default.background },
})

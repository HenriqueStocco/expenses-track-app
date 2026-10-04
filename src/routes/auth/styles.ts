import { StyleSheet } from 'react-native'

import { COLORS, SPACING, TYPOGRAPHY } from '@/constants/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: COLORS.default.background,
  },
  header: {
    flex: 0.4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xxl,
  },
  title: {
    color: COLORS.default.foreground,
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
  },
  formContainer: {
    flex: 2,
    flexGrow: 1,
    paddingHorizontal: SPACING.lg,
    flexDirection: 'column',
    alignItems: 'center',
    gap: SPACING.xl,
  },
  formSection: {
    width: '100%',
    gap: SPACING.lg,
  },
  formInputLabel: {
    color: '#4d4d4d',
    fontSize: TYPOGRAPHY.sizes.body,
    fontWeight: '500',
  },
  formInput: {
    minHeight: 50,
    backgroundColor: COLORS.default.background,
    paddingHorizontal: SPACING.sm,
    fontSize: TYPOGRAPHY.sizes.body,
    color: COLORS.default.foreground,
    borderRadius: 6,
    elevation: 10,
  },
  formButton: {
    width: '100%',
    minHeight: 50,
    borderRadius: 6,
    backgroundColor: COLORS.default.foreground,
    justifyContent: 'center',
  },
  formButtonLabel: {
    color: COLORS.default.background,
    textAlign: 'center',
    fontSize: TYPOGRAPHY.sizes.heading,
    fontWeight: '600',
    letterSpacing: 1,
  },
})

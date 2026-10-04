import KVStore from 'expo-sqlite/kv-store'
import { useCallback, useEffect, useState, type ReactNode } from 'react'

import { AuthContext, type AuthState } from './context.tsx'

type Props = {
  children: ReactNode
}

export function AuthContextProvider({ children }: Props) {
  const [authState, setAuthState] = useState<AuthState>('loading')

  useEffect(() => {
    async function init() {
      try {
        const username = await KVStore.getItemAsync('username')

        if (!username) {
          setAuthState('unauthenticated')
          return
        }

        setAuthState('authenticated')
      } catch (error) {
        console.error(error)

        setAuthState('unauthenticated')
      }
    }

    init()
  }, [])

  const login = useCallback(async (username: string) => {
    try {
      if (!username) {
        setAuthState('unauthenticated')
        return
      }

      await KVStore.setItemAsync('username', JSON.stringify(username))

      setAuthState('authenticated')

      return
    } catch (error) {
      console.error(error)

      return
    }
  }, [])

  const values = {
    login,
    authState,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

import { createContext } from 'react'

type State = 'authenticated' | 'loading' | 'unauthenticated'

type ContextProps = {
  authState: State
  login: (username: string) => void
} | null

const AuthContext = createContext<ContextProps>(null)

export { type State as AuthState, AuthContext }

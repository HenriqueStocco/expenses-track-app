import { z } from 'zod/v4'
import { useState } from 'react'

import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { AlertCircleIcon } from '@/components/ui/icon'
import { Input, InputField } from '@/components/ui/input'
import { Button, ButtonText } from '@/components/ui/button'
import {
  FormControl,
  FormControlLabel,
  FormControlError,
  FormControlHelper,
  FormControlLabelText,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelperText,
} from '@/components/ui/form-control'
import { LinearGradient } from 'expo-linear-gradient'
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar'
import ProfileImage from '../../assets/blank-profile-picture-973460_1280.jpg'

const nameSchema = z
  .string({
    error: 'Nome de usuario invalido',
  })
  .min(4, 'Nome de usuario muito curto')
  .max(32, 'Nome de usuario muito longo')

type NameSchema = z.infer<typeof nameSchema>

export default function Login() {
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [username, setUsername] = useState<NameSchema>('')
  const [inputError, setInputError] = useState<string | undefined>(undefined)

  const handleSubmit = () => {
    const parsedName = nameSchema.safeParse(username)

    if (parsedName?.error?.message !== undefined) {
      setIsInvalid(true)
      setInputError(parsedName.error.message)
    }

    setIsInvalid(false)
    setInputError(undefined)
  }

  return (
    <VStack
      space='2xl'
      className='flex-1 px-4 py-6 pt-20 items-center bg-emerald-100/60'
    >
      <LinearGradient
        colors={['rgba(0,255,200,0.2)', 'transparent']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        className='absolute top-0 bottom-0 left-0 right-0'
      />

      <VStack className='justify-center items-center' space='lg'>
        <Avatar size='2xl' className='bg-white'>
          <AvatarFallbackText className='text-foreground'>
            Profile
          </AvatarFallbackText>

          <AvatarImage source={ProfileImage} className='flex-1' />
        </Avatar>

        <Heading className='text-foreground font-extrabold text-3xl'>
          Login
        </Heading>
      </VStack>

      <VStack className='w-full flex justify-center gap-6 p-6'>
        <FormControl
          isInvalid={isInvalid}
          isDisabled={false}
          isReadOnly={false}
          isRequired={false}
        >
          <VStack className='gap-2'>
            <Input
              variant='outline'
              size='xl'
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
            >
              <InputField
                type='default'
                placeholder='Nome de usuario...'
                value={username}
                size='xl'
                onChangeText={(v: string) => setUsername(v)}
              />
            </Input>

            <FormControlHelper>
              <FormControlHelperText>
                Nome de usuario deve conter no minimo 4 caracteres
              </FormControlHelperText>
            </FormControlHelper>

            <FormControlError>
              <FormControlErrorIcon
                as={AlertCircleIcon}
                className='text-destructive'
              />

              <FormControlErrorText className='text-destructive'>
                {inputError}
              </FormControlErrorText>
            </FormControlError>
          </VStack>
        </FormControl>

        <Button onPress={handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </VStack>
    </VStack>
  )
}

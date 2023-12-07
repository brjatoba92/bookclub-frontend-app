import { LoginScreen, RegisterScreen, ForgotPasswordScreen, ResetPasswordScreen } from '../screen'

export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/login',
    element: <LoginScreen />
  },
  {
    path: '/sigup',
    element: <RegisterScreen />
  },
  {
    path: '/forgot-pwd',
    element: <ForgotPasswordScreen />
  },
  {
    path: '/reset-pwd',
    element: <ResetPasswordScreen />
  }
]

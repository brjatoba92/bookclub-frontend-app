import { HomeScreen, BookDetailScreen } from '../screen'

export const authRoutes = [
  {
    path: '/home',
    element: <HomeScreen />
  },
  {
    path: '/book-detail/:id',
    element: <BookDetailScreen />
  }
]

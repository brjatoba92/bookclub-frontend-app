import { HomeScreen, BookDetailScreen, FavoritesScreen } from '../screen'

export const authRoutes = [
  {
    path: '/home',
    element: <HomeScreen />
  },
  {
    path: '/book-detail/:id',
    element: <BookDetailScreen />
  },
  {
    path: '/favorites',
    element: <FavoritesScreen />
  }

]

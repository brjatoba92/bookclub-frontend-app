import { HomeScreen, BookDetailScreen, FavoritesScreen, SearchScreen, AuthorDetailScreen } from '../screen'

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
    path: '/author-detail/:id',
    element: <AuthorDetailScreen />
  },
  {
    path: '/favorites',
    element: <FavoritesScreen />
  },
  {
    path: '/search',
    element: <SearchScreen />
  }

]

import { Route, Routes } from 'react-router-dom'
import { Post } from './pages/Post'
import { Home } from './pages/Home'
export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/content/:number" element={<Post />} />
      </Route>
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/ui/Layout'
import Info from './pages/Info'
import Personal from './pages/Personal'
import Projectes from './pages/Projectes'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Projectes />} />
        <Route path="/projectes" element={<Projectes />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Layout>
  )
}

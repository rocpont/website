import { Layout } from './components/ui/Layout'

function App() {
  return (
    <Layout>
      <div className="flex gap-1 max-w-3xl">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop"
          alt="Commercial work — lamp on wall"
          className="h-[50vh] w-auto object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&h=700&fit=crop"
          alt="Commercial work — interior with bookshelf"
          className="h-[50vh] w-auto object-cover"
        />
      </div>
    </Layout>
  )
}

export default App

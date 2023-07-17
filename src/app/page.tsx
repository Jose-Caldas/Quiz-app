import App from '@/components/App'
import ToggleTheme from '@/components/ToggleTheme'
import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <App />
      <ToggleTheme />
    </main>
  )
}

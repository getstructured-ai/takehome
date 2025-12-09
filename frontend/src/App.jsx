import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const [apiMessage, setApiMessage] = useState(null)

  const apiUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetch(`${apiUrl}/`)
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(err => console.error('API not available:', err))
  }, [apiUrl])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <div className="flex gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 hover:drop-shadow-[0_0_2em_#61dafbaa]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">{import.meta.env.VITE_APP_NAME}</h1>
      <div className="flex flex-col items-center gap-4">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p className="text-muted-foreground">API: {apiMessage || 'Loading...'}</p>
      </div>
      <p className="text-sm text-muted-foreground">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

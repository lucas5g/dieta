import { App } from '@/App'
import { Provider } from '@/components/ui/provider'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
)

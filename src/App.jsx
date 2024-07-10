 
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import StakePage from './Pages/StakePage';
import { Toaster } from 'react-hot-toast'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config'

import { createWeb3Modal } from '@web3modal/wagmi/react'

const queryClient = new QueryClient()

const projectId = 'e4afaa996192e3d484b46d43a9f6f870' //aeecfbcaaf30576d781f3da13a186c26   // c86a583333393f73c3218e131a7d46fc

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-color-mix': '#00DCFF',
    '--w3m-color-mix-strength': 20,
  },
})

function App() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Toaster />
            <Routes>
              <Route path='*' element={<Navigate to='/' />} />
              <Route path='/' element={<HomePage />} />
              <Route path='/Stake' element={<StakePage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App

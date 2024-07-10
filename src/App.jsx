 
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import StakePage from './Pages/StakePage';
import { Toaster } from "react-hot-toast";
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {
  createWeb3Modal,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme,
} from '@web3modal/wagmi/react'

const queryClient = new QueryClient()

const projectId = 'e4afaa996192e3d484b46d43a9f6f870' //aeecfbcaaf30576d781f3da13a186c26   // c86a583333393f73c3218e131a7d46fc

const metadata = {
  name: 'Ramsena Stake',
  description:
    'Ramsena offers a paradigm shift in the way individuals or business connect, & communicate in todays digital landscape, that leverage the power of blockchain to enhance security, privacy, and flexibility in communication.',
  url: 'https://stake.voipfinance.com',
  icons: ['https://voip-web.netlify.app/assets/icon1-DGHckJj4.png'],
}

const wagmiConfig = defaultWagmiConfig({
  chains: [bsc, bscTestnet],
  projectId,
  metadata: {
    name: 'Web3Modal React Example',
    description: 'Web3Modal React Example',
    url: '',
    icons: [],
  },
  auth: {
    email: false,
  },
})

createWeb3Modal({
  wagmiConfig,
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
      <WagmiProvider config={wagmiConfig}>
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

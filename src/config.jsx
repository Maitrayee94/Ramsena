import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { bsc, bscTestnet } from 'wagmi/chains'

const metadata = {
  name: 'Ramsena Stake',
  description:
    'Ramsena offers a paradigm shift in the way individuals or business connect, & communicate in todays digital landscape, that leverage the power of blockchain to enhance security, privacy, and flexibility in communication.',
  url: 'https://stake.voipfinance.com',
  icons: ['https://voip-web.netlify.app/assets/icon1-DGHckJj4.png'],
}

const projectId = 'e4afaa996192e3d484b46d43a9f6f870'

export const config = defaultWagmiConfig({
  chains: [bsc, bscTestnet],
  projectId,
  metadata: metadata,
  auth: {
    email: false,
  },
})

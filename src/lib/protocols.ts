import { Chain, Protocol } from '@/types'

export const chains: Chain[] = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    logo: '⟠',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'bnb',
    name: 'BNB Chain',
    logo: '🟡',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'polygon',
    name: 'Polygon',
    logo: '🟣',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'avalanche',
    name: 'Avalanche',
    logo: '🔺',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum',
    logo: '🔵',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'optimism',
    name: 'Optimism',
    logo: '🔴',
    color: 'from-red-600 to-red-400'
  }
]

export const protocols: Protocol[] = [
  // Ethereum
  {
    id: 'aave-v3-eth',
    name: 'Aave V3',
    chain: 'ethereum',
    apy: 4.2,
    tvl: '$12.4B',
    riskLevel: 'Low',
    description: 'Leading decentralized money market protocol',
    category: 'Lending'
  },
  {
    id: 'compound-eth',
    name: 'Compound',
    chain: 'ethereum',
    apy: 3.8,
    tvl: '$8.2B',
    riskLevel: 'Low',
    description: 'Algorithmic money market protocol',
    category: 'Lending'
  },
  {
    id: 'yearn-eth',
    name: 'Yearn Finance',
    chain: 'ethereum',
    apy: 6.2,
    tvl: '$3.9B',
    riskLevel: 'Medium',
    description: 'Yield optimization protocol',
    category: 'Yield Farming'
  },
  {
    id: 'convex-eth',
    name: 'Convex',
    chain: 'ethereum',
    apy: 5.8,
    tvl: '$2.1B',
    riskLevel: 'Medium',
    description: 'Curve boosting platform',
    category: 'Yield Farming'
  },

  // BNB Chain
  {
    id: 'pancakeswap-bnb',
    name: 'PancakeSwap',
    chain: 'bnb',
    apy: 7.5,
    tvl: '$1.8B',
    riskLevel: 'Medium',
    description: 'Leading BSC DEX and yield farming',
    category: 'DEX'
  },
  {
    id: 'venus-bnb',
    name: 'Venus Protocol',
    chain: 'bnb',
    apy: 4.6,
    tvl: '$950M',
    riskLevel: 'Low',
    description: 'Decentralized money market on BSC',
    category: 'Lending'
  },
  {
    id: 'alpaca-bnb',
    name: 'Alpaca Finance',
    chain: 'bnb',
    apy: 8.2,
    tvl: '$420M',
    riskLevel: 'High',
    description: 'Leveraged yield farming protocol',
    category: 'Yield Farming'
  },
  {
    id: 'belt-bnb',
    name: 'Belt Finance',
    chain: 'bnb',
    apy: 6.9,
    tvl: '$180M',
    riskLevel: 'Medium',
    description: 'Multi-strategy yield optimizer',
    category: 'Yield Farming'
  },

  // Polygon
  {
    id: 'quickswap-polygon',
    name: 'QuickSwap',
    chain: 'polygon',
    apy: 8.1,
    tvl: '$650M',
    riskLevel: 'Medium',
    description: 'Leading Polygon DEX',
    category: 'DEX'
  },
  {
    id: 'aave-v3-polygon',
    name: 'Aave V3 Polygon',
    chain: 'polygon',
    apy: 3.9,
    tvl: '$820M',
    riskLevel: 'Low',
    description: 'Aave protocol on Polygon',
    category: 'Lending'
  },
  {
    id: 'balancer-polygon',
    name: 'Balancer',
    chain: 'polygon',
    apy: 5.4,
    tvl: '$340M',
    riskLevel: 'Medium',
    description: 'Automated portfolio manager',
    category: 'DEX'
  },
  {
    id: 'curve-polygon',
    name: 'Curve Polygon',
    chain: 'polygon',
    apy: 4.8,
    tvl: '$290M',
    riskLevel: 'Low',
    description: 'Stablecoin-focused DEX',
    category: 'DEX'
  },

  // Avalanche
  {
    id: 'trader-joe-avax',
    name: 'Trader Joe',
    chain: 'avalanche',
    apy: 9.3,
    tvl: '$480M',
    riskLevel: 'Medium',
    description: 'Premier Avalanche DEX',
    category: 'DEX'
  },
  {
    id: 'benqi-avax',
    name: 'Benqi',
    chain: 'avalanche',
    apy: 5.1,
    tvl: '$360M',
    riskLevel: 'Low',
    description: 'Avalanche lending protocol',
    category: 'Lending'
  },
  {
    id: 'pangolin-avax',
    name: 'Pangolin',
    chain: 'avalanche',
    apy: 7.8,
    tvl: '$220M',
    riskLevel: 'Medium',
    description: 'Community-driven DEX',
    category: 'DEX'
  },
  {
    id: 'yield-yak-avax',
    name: 'Yield Yak',
    chain: 'avalanche',
    apy: 8.6,
    tvl: '$180M',
    riskLevel: 'Medium',
    description: 'Auto-compounding yield optimizer',
    category: 'Yield Farming'
  },

  // Arbitrum
  {
    id: 'gmx-arbitrum',
    name: 'GMX',
    chain: 'arbitrum',
    apy: 12.4,
    tvl: '$520M',
    riskLevel: 'High',
    description: 'Decentralized perpetual exchange',
    category: 'Trading'
  },
  {
    id: 'radiant-arbitrum',
    name: 'Radiant Capital',
    chain: 'arbitrum',
    apy: 6.8,
    tvl: '$280M',
    riskLevel: 'Medium',
    description: 'Cross-chain money market',
    category: 'Lending'
  },
  {
    id: 'camelot-arbitrum',
    name: 'Camelot',
    chain: 'arbitrum',
    apy: 11.2,
    tvl: '$195M',
    riskLevel: 'High',
    description: 'Native Arbitrum DEX',
    category: 'DEX'
  },
  {
    id: 'jones-dao-arbitrum',
    name: 'Jones DAO',
    chain: 'arbitrum',
    apy: 9.7,
    tvl: '$140M',
    riskLevel: 'High',
    description: 'Options yield strategies',
    category: 'Options'
  },

  // Optimism
  {
    id: 'velodrome-optimism',
    name: 'Velodrome',
    chain: 'optimism',
    apy: 10.5,
    tvl: '$380M',
    riskLevel: 'Medium',
    description: 'Optimism DEX and liquidity marketplace',
    category: 'DEX'
  },
  {
    id: 'aave-v3-optimism',
    name: 'Aave V3 Optimism',
    chain: 'optimism',
    apy: 3.7,
    tvl: '$240M',
    riskLevel: 'Low',
    description: 'Aave protocol on Optimism',
    category: 'Lending'
  },
  {
    id: 'beethoven-x-optimism',
    name: 'Beethoven X',
    chain: 'optimism',
    apy: 7.2,
    tvl: '$160M',
    riskLevel: 'Medium',
    description: 'Balancer fork on Optimism',
    category: 'DEX'
  },
  {
    id: 'synthetix-optimism',
    name: 'Synthetix',
    chain: 'optimism',
    apy: 8.9,
    tvl: '$120M',
    riskLevel: 'High',
    description: 'Synthetic asset protocol',
    category: 'Derivatives'
  }
]
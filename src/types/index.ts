export interface Chain {
  id: string
  name: string
  logo: string
  color: string
}

export interface Protocol {
  id: string
  name: string
  chain: string
  apy: number
  tvl: string
  riskLevel: 'Low' | 'Medium' | 'High'
  description: string
  category: string
}

export interface LockPeriod {
  days: number
  label: string
  apy: number
}

export interface Investment {
  amount: number
  lockPeriod: number
  apy: number
  expectedReturn: number
  profit: number
}
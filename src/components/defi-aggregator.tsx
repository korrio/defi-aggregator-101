"use client"

import React, { useState, useEffect, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, TrendingUp, Lock, DollarSign, Network } from 'lucide-react'
import { Protocol, LockPeriod, Investment } from '@/types'
import { formatCurrency, formatPercent, cn } from '@/lib/utils'
import { chains, protocols } from '@/lib/protocols'
import ChainSelector from '@/components/chain-selector'

const lockPeriods: LockPeriod[] = [
  { days: 30, label: '30 days', apy: 4.5 },
  { days: 90, label: '90 days', apy: 5.2 },
  { days: 180, label: '180 days', apy: 6.1 },
  { days: 365, label: '365 days', apy: 7.8 },
]

export default function DefiAggregator() {
  const [amount, setAmount] = useState<string>('')
  const [selectedPeriod, setSelectedPeriod] = useState<LockPeriod>(lockPeriods[0])
  const [selectedChain, setSelectedChain] = useState<string | null>(null)
  const [investment, setInvestment] = useState<Investment | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const filteredProtocols = useMemo(() => {
    if (!selectedChain) return protocols
    return protocols.filter(protocol => protocol.chain === selectedChain)
  }, [selectedChain])

  const selectedChainData = useMemo(() => {
    return chains.find(chain => chain.id === selectedChain)
  }, [selectedChain])

  useEffect(() => {
    const numAmount = parseFloat(amount)
    if (numAmount && numAmount > 0) {
      const expectedReturn = numAmount * (1 + selectedPeriod.apy / 100 * selectedPeriod.days / 365)
      const profit = expectedReturn - numAmount
      
      setInvestment({
        amount: numAmount,
        lockPeriod: selectedPeriod.days,
        apy: selectedPeriod.apy,
        expectedReturn,
        profit
      })
    } else {
      setInvestment(null)
    }
  }, [amount, selectedPeriod])

  const handleInvest = async () => {
    if (!investment) return
    
    setIsLoading(true)
    // Simulate transaction
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    
    alert(`Investment of ${formatCurrency(investment.amount)} for ${selectedPeriod.days} days initiated!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ankr DeFi Aggregator
          </h1>
          <p className="text-slate-400 text-lg">
            Maximize your USDC yields across top DeFi protocols
          </p>
        </div>

        {/* Chain Selector */}
        <Card className="mb-6 bg-slate-800/50 backdrop-blur border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Network className="h-5 w-5" />
              Select Network
            </CardTitle>
            <CardDescription className="text-slate-400">
              Choose a blockchain network to view available protocols
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChainSelector 
              chains={chains}
              selectedChain={selectedChain}
              onChainSelect={setSelectedChain}
            />
            {selectedChainData && (
              <div className="mt-4 p-3 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{selectedChainData.logo}</span>
                  <span className="font-medium text-white">{selectedChainData.name}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-400">{filteredProtocols.length} protocols available</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Investment Input */}
          <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <DollarSign className="h-5 w-5" />
                Investment Details
              </CardTitle>
              <CardDescription className="text-slate-400">
                Enter your investment amount and select lock period
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Amount (USDC)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute right-3 top-3 text-slate-400 text-sm font-medium">USDC</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Lock Period</label>
                <div className="grid grid-cols-2 gap-2">
                  {lockPeriods.map((period) => (
                    <button
                      key={period.days}
                      onClick={() => setSelectedPeriod(period)}
                      className={cn(
                        "p-3 rounded-lg border text-sm font-medium transition-all",
                        selectedPeriod.days === period.days
                          ? "border-blue-500 bg-blue-500/20 text-blue-300"
                          : "border-slate-600 bg-slate-700 text-slate-300 hover:border-slate-500"
                      )}
                    >
                      <div>{period.label}</div>
                      <div className="text-xs opacity-80">{formatPercent(period.apy)} APY</div>
                    </button>
                  ))}
                </div>
              </div>

              {investment && (
                <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                  <h4 className="font-medium mb-2 text-white">Expected Returns</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>Investment:</span>
                      <span>{formatCurrency(investment.amount)}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Expected Return:</span>
                      <span>{formatCurrency(investment.expectedReturn)}</span>
                    </div>
                    <div className="flex justify-between text-green-400 font-medium">
                      <span>Profit:</span>
                      <span>+{formatCurrency(investment.profit)}</span>
                    </div>
                  </div>
                </div>
              )}

              <Button 
                onClick={handleInvest}
                disabled={!investment || isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Invest Now'}
              </Button>
            </CardContent>
          </Card>

          {/* Protocol Overview */}
          <Card className="lg:col-span-2 bg-slate-800/50 backdrop-blur border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="h-5 w-5" />
                Available Protocols
                {selectedChain && (
                  <span className="text-sm text-slate-400 font-normal">
                    on {selectedChainData?.name}
                  </span>
                )}
              </CardTitle>
              <CardDescription className="text-slate-400">
                {selectedChain 
                  ? `${filteredProtocols.length} DeFi protocols on ${selectedChainData?.name}`
                  : `${protocols.length} DeFi protocols across all networks`
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                {filteredProtocols.map((protocol) => {
                  const chainData = chains.find(c => c.id === protocol.chain)
                  return (
                    <div key={protocol.id} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-white">{protocol.name}</h4>
                          {!selectedChain && chainData && (
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                              {chainData.logo} {chainData.name}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className={cn(
                            "px-2 py-1 rounded text-xs font-medium",
                            protocol.riskLevel === 'Low' ? 'bg-green-500/20 text-green-400' :
                            protocol.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          )}>
                            {protocol.riskLevel} Risk
                          </span>
                          <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400">
                            {protocol.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mb-3">{protocol.description}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">APY: <span className="text-green-400 font-medium">{formatPercent(protocol.apy)}</span></span>
                        <span className="text-slate-300">TVL: <span className="font-medium">{protocol.tvl}</span></span>
                      </div>
                    </div>
                  )
                })}
              </div>
              {filteredProtocols.length === 0 && selectedChain && (
                <div className="text-center py-8 text-slate-400">
                  <Network className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No protocols available on {selectedChainData?.name}</p>
                  <p className="text-sm">Try selecting a different network</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Security Features */}
        <Card className="mt-6 bg-slate-800/50 backdrop-blur border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Audited Protocols</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Lock className="h-4 w-4 text-blue-400" />
                <span>Secure Smart Contracts</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <TrendingUp className="h-4 w-4 text-purple-400" />
                <span>Optimized Yields</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
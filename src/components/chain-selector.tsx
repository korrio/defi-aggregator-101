"use client"

import React from 'react'
import { Chain } from '@/types'
import { cn } from '@/lib/utils'

interface ChainSelectorProps {
  chains: Chain[]
  selectedChain: string | null
  onChainSelect: (chainId: string | null) => void
}

export default function ChainSelector({ chains, selectedChain, onChainSelect }: ChainSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChainSelect(null)}
        className={cn(
          "px-4 py-2 rounded-lg border text-sm font-medium transition-all flex items-center gap-2",
          selectedChain === null
            ? "border-blue-500 bg-blue-500/20 text-blue-300"
            : "border-slate-600 bg-slate-700 text-slate-300 hover:border-slate-500"
        )}
      >
        <span>🌐</span>
        <span>All Chains</span>
      </button>
      
      {chains.map((chain) => (
        <button
          key={chain.id}
          onClick={() => onChainSelect(chain.id)}
          className={cn(
            "px-4 py-2 rounded-lg border text-sm font-medium transition-all flex items-center gap-2",
            selectedChain === chain.id
              ? "border-blue-500 bg-blue-500/20 text-blue-300"
              : "border-slate-600 bg-slate-700 text-slate-300 hover:border-slate-500"
          )}
        >
          <span className="text-base">{chain.logo}</span>
          <span>{chain.name}</span>
        </button>
      ))}
    </div>
  )
}
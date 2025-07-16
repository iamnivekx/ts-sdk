
import type { StakingSlippageInfo } from "../../helpers/network/get-slippage";
import type { SignableExtrinsic } from "../../helpers/network/types";



export interface StakeToRootParams {
  signer?: string;
  hotkey: string;
  amount: string;
  fromAddress?: string;
  stakeAll?: boolean;
  safeStaking?: boolean; // default: true
  slippageTolerance?: number; // default: 0.05 (5%)
  allowPartialStake?: boolean; // default: false
}

export interface StakeAlphaParams {
  hotkey: string;
  subnet: number; // netuid (not 0)
  amount: string;
  fromAddress?: string;
  stakeAll?: boolean;
  safeStaking?: boolean; // default: true
  slippageTolerance?: number; // default: 0.05 (5%)
  allowPartialStake?: boolean; // default: false
}

export interface StakeEstimate {
  // transactionFee?: string; // Blockchain transaction fee in TAO
  // slippageCost?: string; // Slippage cost in TAO (only for subnet staking)
  totalCost: string; // Total cost including fee and slippage
  expectedReceived: string; // Expected amount received after slippage
  // slippagePercentage?: number; // Slippage percentage (only for subnet staking)
}

export interface StakeParams {
  hotkey: string;
  netuid: number;
  amount: string; // Amount in TAO
  maxSlippageTolerance?: number; // Maximum slippage percentage (default: 0.5%)
  allowPartialStaking?: boolean; // Allow partial staking if full amount would exceed slippage (default: false)
  disableSlippageProtection?: boolean; // Disable slippage protection entirely (default: false)
}

export interface StakeResult {
  success: boolean;
  extrinsic?: SignableExtrinsic;
  stakeFee?: string;
  txHash?: string;
  stakedAmount?: string; // Net amount staked in TAO (intended amount - transaction fee)
  slippageInfo?: StakingSlippageInfo;
  error?: string;
}

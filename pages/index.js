import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar.jsx'
import Vaults from "../components/vaults"
import Landing from "../components/Landing"
import web2 from 'web3'
import React, { useState } from 'react'
import Link from 'next/link.js'
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")

const web3 = createAlchemyWeb3('wss://matic-mainnet--ws.datahub.figment.io/apikey/a1411dc57fda38d3fb3436688e72934c')
const abi = '[{"inputs":[{"internalType":"address","name":"ethPriceSourceAddress","type":"address"},{"internalType":"uint256","name":"minimumCollateralPercentage","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"_mai","type":"address"},{"internalType":"address","name":"_collateral","type":"address"},{"internalType":"address","name":"meta","type":"address"},{"internalType":"string","name":"baseURI","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"vaultID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BorrowToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"vaultID","type":"uint256"},{"indexed":false,"internalType":"address","name":"creator","type":"address"}],"name":"CreateVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"vaultID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DepositCollateral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"vaultID","type":"uint256"}],"name":"DestroyVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"vaultID","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"debtRepaid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralLiquidated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"closingFee","type":"uint256"}],"name":"LiquidateVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"vaultID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"closingFee","type":"uint256"}],"name":"PayBackToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"vaultID","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"}],"name":"TransferVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"vaultID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawCollateral","type":"event"},{"constant":true,"inputs":[],"name":"_meta","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_minimumCollateralPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"base","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"borrowToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"ethPriceSourceAddress","type":"address"}],"name":"changeEthPriceSource","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"}],"name":"checkCollateralPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"}],"name":"checkCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"}],"name":"checkExtract","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"}],"name":"checkLiquidation","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"closingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collateral","outputs":[{"internalType":"contract ERC20Detailed","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"createVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"debtRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositCollateral","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"}],"name":"destroyVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ethPriceSource","outputs":[{"internalType":"contract PriceSource","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gainRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getClosingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDebtCeiling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getEthPriceSource","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOpeningFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getPaid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTokenPriceSource","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"}],"name":"liquidateVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mai","outputs":[{"internalType":"contract ERC20Detailed","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maticDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"openingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"payBackToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"priceSourceDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setClosingFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_debtRatio","type":"uint256"}],"name":"setDebtRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_gainRatio","type":"uint256"}],"name":"setGainRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"minimumCollateralPercentage","type":"uint256"}],"name":"setMinCollateralRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setOpeningFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_pool","type":"address"}],"name":"setStabilityPool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_tokenPeg","type":"uint256"}],"name":"setTokenPeg","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_treasury","type":"uint256"}],"name":"setTreasury","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"stabilityPool","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenPeg","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"}],"name":"transferToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountToken","type":"uint256"}],"name":"transferToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"treasury","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vaultCollateral","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vaultCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vaultDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"vaultID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawCollateral","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'

const MATIC_VAULT_ADDRESS = '0xa3fa99a148fa48d14ed51d610c367c61876997f1'
const WETH_VAULT_ADDRESS = '0x3fd939B017b31eaADF9ae50C7fF7Fa5c0661d47C'
const LINK_VAULT_ADDRESS = '0x61167073E31b1DAd85a3E531211c7B8F1E5cAE72'
const AAVE_VAULT_ADDRESS = '0x87ee36f780ae843A78D5735867bc1c13792b7b11'
const CRV_VAULT_ADDRESS = '0x98B5F32dd9670191568b661a3e847Ed764943875'
const BAL_VAULT_ADDRESS = '0x701A1824e5574B0b6b1c8dA808B184a7AB7A2867'
const DQUICK_VAULT_ADDRESS = '0x649Aa6E6b6194250C077DF4fB37c23EE6c098513'
const WBTC_VAULT_ADDRESS = '0x37131aEDd3da288467B6EBe9A77C523A700E6Ca1'
const GHST_VAULT_ADDRESS = '0xF086dEdf6a89e7B16145b03a6CB0C0a9979F1433'
const CAMWMATIC_VAULT_ADDRESS = '0x88d84a85A87ED12B8f098e8953B322fF789fCD1a'
const CAMWETH_VAULT_ADDRESS = '0x11A33631a5B5349AF3F165d2B7901A4d67e561ad'
const CAMAAVE_VAULT_ADDRESS = '0x578375c3af7d61586c2C3A7BA87d2eEd640EFA40'
const CAMWBTC_VAULT_ADDRESS = '0x7dda5e1a389e0c1892caf55940f5fce6588a9ae0'
const CAMDAI_VAULT_ADDRESS = '0xD2FE44055b5C874feE029119f70336447c8e8827'
const STAKEDAO_VAULT_ADDRESS = '0x57cbf36788113237d64e46f25a88855c3dff1691'
const FXS_VAULT_ADDRESS = '0xff2c44fb819757225a176e825255a01b3b8bb051'
const VGHST_VAULT_ADDRESS = '0x1f0aa72b980d65518e88841ba1da075bd43fa933'
const CEL_VAULT_ADDRESS = '0x178f1c95c85fe7221c7a6a3d6f12b7da3253eeae'
const WMATIC_VAULT_ADDRESS = '0x305f113ff78255d4f8524c8f50c7300b91b10f6a'
const SAND_VAULT_ADDRESS = '0x1dcc1f864a4bd0b8f4ad33594b758b68e9fa872c'

async function handleClick() {
  console.log('clicked')
}


export default function Home({ WETH_VAULT }) {
  return (
    <div>
      <Head>
        <title>Mai Liquidatooor</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>
        {<Vaults vaults={WETH_VAULT} />}
       
      </div>
    </div>

  )
}




async function getVaults(address) {
  const VAULT_CONTRACT = new web3.eth.Contract(JSON.parse(abi), address)
  let arr = []
  for (let i = 0; i < 10000; i++) {
    arr.push(VAULT_CONTRACT.methods.checkCost(i).call())
  }

  let vaults = [10000]
  let costs = await Promise.all(arr)
  costs = costs.map((cost) => cost = cost / 1000000000000000000)

  for (let i = 0; i < 10000; i++) {
    vaults[i] = new Object()
    vaults[i].cost = costs[i]
    vaults[i].index = i
  }
  vaults = vaults.filter(vault => vault.cost > 0.01)
  vaults.sort(function (a, b) {
    return b.cost - a.cost;
});
  console.log('Vaults: ', vaults)
  return vaults
}

export async function getServerSideProps() {
  let WETH_VAULT = await getVaults(WETH_VAULT_ADDRESS)
  /*
  let LINK_VAULT = await getVaults(LINK_VAULT_ADDRESS)
  let AAVE_VAULT = await getVaults(AAVE_VAULT_ADDRESS)
  let CRV_VAULT = await getVaults(CRV_VAULT_ADDRESS)
  let BAL_VAULT = await getVaults(BAL_VAULT_ADDRESS)
  let DQUICK_VAULT = await getVaults(DQUICK_VAULT_ADDRESS)
  let WBTC_VAULT = await getVaults(WBTC_VAULT_ADDRESS)
  let GHST_VAULT = await getVaults(GHST_VAULT_ADDRESS)
  let CAMWMATIC_VAULT = await getVaults(CAMWMATIC_VAULT_ADDRESS)
  let CAMWETH_VAULT = await getVaults(CAMWETH_VAULT_ADDRESS)
  let CAMAAVE_VAULT = await getVaults(CAMAAVE_VAULT_ADDRESS)
  let CAMBTC_VAULT = await getVaults(CAMWBTC_VAULT_ADDRESS)
  let CAMDAI_VAULT = await getVaults(CAMDAI_VAULT_ADDRESS)
  let STAKEDAO_VAULT = await getVaults(STAKEDAO_VAULT_ADDRESS)
  let FXS_VAULT = await getVaults(FXS_VAULT_ADDRESS)
  let VGHST_VAULT = await getVaults(VGHST_VAULT_ADDRESS)
  let CEL_VAULT = await getVaults(CEL_VAULT_ADDRESS)
  let WMATIC_VAULT = await getVaults(WMATIC_VAULT_ADDRESS)
  let SAND_VAULT = await getVaults(SAND_VAULT_ADDRESS)
*/

  // get vaults for all address

  return (
    {
      props: {
        WETH_VAULT
      }
    }
  )
}

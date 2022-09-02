import React, { useState, useEffect } from 'react'
import web2 from 'web3'
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

let tokens = 
[
    ['WETH', '0x3fd939B017b31eaADF9ae50C7fF7Fa5c0661d47C'],
    ['LINK', '0x61167073E31b1DAd85a3E531211c7B8F1E5cAE72'],
    ['AAVE', '0x87ee36f780ae843A78D5735867bc1c13792b7b11'],
    ['CRV', '0x98B5F32dd9670191568b661a3e847Ed764943875'],
    ['BAL', '0x701A1824e5574B0b6b1c8dA808B184a7AB7A2867'],
    ['DQUICK', '0x649Aa6E6b6194250C077DF4fB37c23EE6c098513'],
    ['WBTC', '0x37131aEDd3da288467B6EBe9A77C523A700E6Ca1'],
    ['GHST', '0xF086dEdf6a89e7B16145b03a6CB0C0a9979F1433'],
    ['camWMATIC', '0x88d84a85A87ED12B8f098e8953B322fF789fCD1a'],
    ['camWETH', '0x11A33631a5B5349AF3F165d2B7901A4d67e561ad'],
    ['camAAVE', '0x578375c3af7d61586c2C3A7BA87d2eEd640EFA40'],
    ['camWBTC', '0x7dda5e1a389e0c1892caf55940f5fce6588a9ae0'],
    ['camDAI', '0xD2FE44055b5C874feE029119f70336447c8e8827'],
    ['crv3pool', '0x57cbf36788113237d64e46f25a88855c3dff1691'],
    ['FXS', '0xff2c44fb819757225a176e825255a01b3b8bb051'],
    ['VGHST', '0x1f0aa72b980d65518e88841ba1da075bd43fa933'],
    ['CEL', '0x178f1c95c85fe7221c7a6a3d6f12b7da3253eeae'],
    ['WMATIC', '0x305f113ff78255d4f8524c8f50c7300b91b10f6a'],
    ['SAND', '0x1dcc1f864a4bd0b8f4ad33594b758b68e9fa872c']
]

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
  let vvaults = await getVaults(WETH_VAULT_ADDRESS)
  return (
    {
      props: {
        vvaults
      }
    }
  )
}


export default function Home({ vvaults }) {
    const [viewVault, setViewVault] = useState(1)
    const [loading, setLoading] = useState(false) //
    let [nvaults, setVaults] = useState(vvaults)
    let [name, setName] = useState('WETH')
    let [start, setStart] = useState(true)
    let [numVaults, setNumVaults] = useState(vvaults.length)

    async function handleClick(token) {
        setStart(false)
        setName(token[0])
        setLoading(true)
        let tokenAddress = token[1]
        console.log('token address: ', tokenAddress)
        const VAULT_CONTRACT = new web3.eth.Contract(JSON.parse(abi), tokenAddress)
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
        console.log(vaults)
        setVaults(vaults)
        setNumVaults(vaults.length)
        setLoading(false)
    }

    return (
      <div className='w-full top-40 h-25  bg-gray-500'>
          <button className = 'hover:border-white ml-10 rounded-md border-2 border-black p-2 underline-offset-1' onClick={() => setViewVault(viewVault + 1)}> Select Vault Type </button>
          {viewVault%2 == 0 ? <div className='grid grid-flow-row-dense grid-cols-3 md:grid-cols-7 sm:grid-rows-3'>
              {tokens.map((token) => <button key = 'token.names' onClick={() => handleClick(token)} className='font-bold rounded-lg p-1 m-2 text-sm uppercase border-2 border-black hover:border-white hover:text-white'>
                  {token[0]} </button>
              )}
          </div> : <div> </div>}
          
          <div className='grid grid-flow-row-dense grid-cols-2 md:grid-cols-5 md:grid-rows-3 gap-1 fixed w-full top-30 h-full bg-[#15181D] overflow-auto'>
              {numVaults < 1 && !loading ? (<div className = 'text-white font-bold justify-center'> There are no vaults below the collateralization ratio for the selected token, try another instead! </div>) : <div className = { (numVaults > 0 || start ? 'hidden' : 'text-white font-bold justify-center')}> loading vaults...</div>}
              {nvaults?.map((vault) => 
                  <button key = 'overall.vaults' className='hover:scale-110 hover:bg-shadow-2xl mt-2 ml-2 border-2 border-black h-64 w-70 bg-[#33363c] hover:bg-red-500 rounded-3xl'>
                      <ul>
                          <div className='text-black' key={'vault.type'}> Vault Type: <h1> {name}</h1> </div>
                          <div className='text-black' key={'vault.index'}> Vault ID: <h1> {vault.index}</h1> </div>
                          <div className='text-black' key={'vault.cost'}> Vault Cost: <h1 className='text-red-700'> ${(Math.floor(100 * vault.cost)) / 100}</h1></div>
                          <div className='text-black' key={'vault'}> Potential Profit: <h1 className='text-green-600'> ${((Math.floor(10 * vault.cost)) / 100)} </h1></div>
                      </ul>
                  </button>
              ) 
              }
          </div>
      </div>
  );
}
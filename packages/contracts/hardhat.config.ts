import { HardhatUserConfig } from 'hardhat/config'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import '@nomicfoundation/hardhat-chai-matchers'

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            blockGasLimit: 12000000,
        },
        local: {
            chainId: 34567,
            url: 'http://localhost:8545',
            blockGasLimit: 12000000,
        },
    },
    solidity: {
        compilers: [
            {
                version: '0.8.17',
                settings: {
                    optimizer: { enabled: true, runs: 200 },
                },
            },
        ],
    },
    typechain: {
        outDir: './typechain',
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS ? true : false,
    },
}

export default config

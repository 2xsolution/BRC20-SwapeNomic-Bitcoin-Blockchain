const { Web3 } = require("web3");

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://polygon-mumbai.blockpi.network/v1/rpc/public"
  )
);

const swap = async function performSwap(req, res) {
  console.log("11111111111111111");
  // Replace with your Ethereum provider URL
  console.log("11111111111111111");
  // Define the contract ABI and address
  const contractAbi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_factory",
          type: "address",
        },
        {
          internalType: "address",
          name: "_WETH",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "WETH",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenA",
          type: "address",
        },
        {
          internalType: "address",
          name: "tokenB",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amountADesired",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountBDesired",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountAMin",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountBMin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "addLiquidity",
      outputs: [
        {
          internalType: "uint256",
          name: "amountA",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountB",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "liquidity",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amountTokenDesired",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountTokenMin",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountETHMin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "addLiquidityETH",
      outputs: [
        {
          internalType: "uint256",
          name: "amountToken",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountETH",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "liquidity",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "factory",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountOut",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "reserveIn",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "reserveOut",
          type: "uint256",
        },
      ],
      name: "getAmountIn",
      outputs: [
        {
          internalType: "uint256",
          name: "amountIn",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountIn",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "reserveIn",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "reserveOut",
          type: "uint256",
        },
      ],
      name: "getAmountOut",
      outputs: [
        {
          internalType: "uint256",
          name: "amountOut",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountOut",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
      ],
      name: "getAmountsIn",
      outputs: [
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountIn",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
      ],
      name: "getAmountsOut",
      outputs: [
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountA",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "reserveA",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "reserveB",
          type: "uint256",
        },
      ],
      name: "quote",
      outputs: [
        {
          internalType: "uint256",
          name: "amountB",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenA",
          type: "address",
        },
        {
          internalType: "address",
          name: "tokenB",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "liquidity",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountAMin",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountBMin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "removeLiquidity",
      outputs: [
        {
          internalType: "uint256",
          name: "amountA",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountB",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "liquidity",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountTokenMin",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountETHMin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "removeLiquidityETH",
      outputs: [
        {
          internalType: "uint256",
          name: "amountToken",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountETH",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "liquidity",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountTokenMin",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountETHMin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "removeLiquidityETHSupportingFeeOnTransferTokens",
      outputs: [
        {
          internalType: "uint256",
          name: "amountETH",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "liquidity",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountTokenMin",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountETHMin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "approveMax",
          type: "bool",
        },
        {
          internalType: "uint8",
          name: "v",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "s",
          type: "bytes32",
        },
      ],
      name: "removeLiquidityETHWithPermit",
      outputs: [
        {
          internalType: "uint256",
          name: "amountToken",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountETH",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "liquidity",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountTokenMin",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountETHMin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "approveMax",
          type: "bool",
        },
        {
          internalType: "uint8",
          name: "v",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "s",
          type: "bytes32",
        },
      ],
      name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      outputs: [
        {
          internalType: "uint256",
          name: "amountETH",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenA",
          type: "address",
        },
        {
          internalType: "address",
          name: "tokenB",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "liquidity",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountAMin",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountBMin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "approveMax",
          type: "bool",
        },
        {
          internalType: "uint8",
          name: "v",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "s",
          type: "bytes32",
        },
      ],
      name: "removeLiquidityWithPermit",
      outputs: [
        {
          internalType: "uint256",
          name: "amountA",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountB",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountOut",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "swapETHForExactTokens",
      outputs: [
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountOutMin",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "swapExactETHForTokens",
      outputs: [
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountOutMin",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountIn",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountOutMin",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "swapExactTokensForETH",
      outputs: [
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountIn",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountOutMin",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountIn",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountOutMin",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "swapExactTokensForTokens",
      outputs: [
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountIn",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountOutMin",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountOut",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountInMax",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "swapTokensForExactETH",
      outputs: [
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountOut",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountInMax",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "swapTokensForExactTokens",
      outputs: [
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ];
  const contractAddress = "0xfD1532890078A6BC42914ab368DbF7417f3e38d5"; // Connect to Ganache

  // Specify the Uniswap router contract address (use the one from your development environment)
  // Replace with your contract address

  // Set up the UniswapV2Router02 contract instance // Replace with your ABI
  const routerContract = new web3.eth.Contract(contractAbi, contractAddress);

  let wethAddress = "0x258B1d73e042AB291d0cd942838d5e931E1446Bf"; // WETH contract address on Ethereum mainnet
  const contractCode = await web3.eth.getCode(wethAddress);

  if (contractCode === "0x") {
    console.error("Contract not found at the specified address.");
  } else {
    console.log("WETH Address:", wethAddress);
  }

  // Define the swap parameters
  const amountOutMin = 0; // Specify the minimum amount of your token you want to receive
  const path = [
    "0xa2102525b9Dd6C824e0F4C0DD2531A26A2bCa8c6",
    "0xAaFb71da4f730A569Bf056D95A18028AD4f0BaC3",
  ]; // Swap from ETH to your token
  const to = "0xd0A2A25C75307078493C5097367BD85b0E78b1a4";
  const deadline = Math.floor(Date.now() / 1000) + 3600; // Set a deadline (e.g., 1 hour from now)

  // Perform the swap with 5 ETH
  const amountInEth = 5; // Specify the amount of ETH you want to swap
  // const amountInWei = web3.utils.toWei(amountInEth.toString(), "ether");
  const amountInWei = 150;

  wethAddress = await routerContract.methods.WETH().call();
  console.log("WETH Address-------------:", wethAddress);
  //return wethAddress;

  routerContract.methods
    .swapExactETHForTokens(amountOutMin, path, to, deadline)
    .send({
      from: "0xd0A2A25C75307078493C5097367BD85b0E78b1a4",
      value: amountInWei,
    }) // Send 5 ETH for the swap
    .on("transactionHash", (hash) => {
      console.log(`Transaction Hash: ${hash}`);
    })
    .on("confirmation", (confirmationNumber, receipt) => {
      if (confirmationNumber >= 1) {
        console.log("Transaction confirmed.");
      }
    })
    .on("error", (error) => {
      console.error("Error:", error);
    });

  res.json({ status: "ok" });
};

module.exports = { swap };

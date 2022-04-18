/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WEth, WEthInterface } from "../WEth";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200136f3803806200136f833981016040819052620000349162000237565b8151829082906200004d906003906020850190620000de565b50805162000063906004906020840190620000de565b505050620000806200007a6200008860201b60201c565b6200008c565b5050620002f1565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ec906200029e565b90600052602060002090601f0160209004810192826200011057600085556200015b565b82601f106200012b57805160ff19168380011785556200015b565b828001600101855582156200015b579182015b828111156200015b5782518255916020019190600101906200013e565b50620001699291506200016d565b5090565b5b808211156200016957600081556001016200016e565b600082601f83011262000195578081fd5b81516001600160401b0380821115620001b257620001b2620002db565b604051601f8301601f19908116603f01168101908282118183101715620001dd57620001dd620002db565b81604052838152602092508683858801011115620001f9578485fd5b8491505b838210156200021c5785820183015181830184015290820190620001fd565b838211156200022d57848385830101525b9695505050505050565b600080604083850312156200024a578182fd5b82516001600160401b038082111562000261578384fd5b6200026f8683870162000184565b9350602085015191508082111562000285578283fd5b50620002948582860162000184565b9150509250929050565b600181811c90821680620002b357607f821691505b60208210811415620002d557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61106e80620003016000396000f3fe6080604052600436106100f35760003560e01c806370a082311161008a578063a457c2d711610059578063a457c2d71461028b578063a9059cbb146102ab578063dd62ed3e146102cb578063f2fde38b1461031157600080fd5b806370a0823114610203578063715018a6146102395780638da5cb5b1461024e57806395d89b411461027657600080fd5b80632e1a7d4d116100c65780632e1a7d4d14610192578063313ce567146101b457806339509351146101d057806347e7ef24146101f057600080fd5b806306fdde03146100f8578063095ea7b31461012357806318160ddd1461015357806323b872dd14610172575b600080fd5b34801561010457600080fd5b5061010d610331565b60405161011a9190610f65565b60405180910390f35b34801561012f57600080fd5b5061014361013e366004610f24565b6103c3565b604051901515815260200161011a565b34801561015f57600080fd5b506002545b60405190815260200161011a565b34801561017e57600080fd5b5061014361018d366004610ee9565b6103d9565b34801561019e57600080fd5b506101b26101ad366004610f4d565b61048a565b005b3480156101c057600080fd5b506040516012815260200161011a565b3480156101dc57600080fd5b506101436101eb366004610f24565b61053a565b6101b26101fe366004610f24565b610576565b34801561020f57600080fd5b5061016461021e366004610e9d565b6001600160a01b031660009081526020819052604090205490565b34801561024557600080fd5b506101b2610673565b34801561025a57600080fd5b506005546040516001600160a01b03909116815260200161011a565b34801561028257600080fd5b5061010d6106d9565b34801561029757600080fd5b506101436102a6366004610f24565b6106e8565b3480156102b757600080fd5b506101436102c6366004610f24565b610781565b3480156102d757600080fd5b506101646102e6366004610eb7565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b34801561031d57600080fd5b506101b261032c366004610e9d565b61078d565b60606003805461034090610fe7565b80601f016020809104026020016040519081016040528092919081815260200182805461036c90610fe7565b80156103b95780601f1061038e576101008083540402835291602001916103b9565b820191906000526020600020905b81548152906001019060200180831161039c57829003601f168201915b5050505050905090565b60006103d0338484610858565b50600192915050565b60006001600160a01b0384163314156103fd576103f6838361097c565b9050610483565b6001600160a01b03841660009081526001602090815260408083203384529091529020548211156104755760405162461bcd60e51b815260206004820152601e60248201527f774554483a20616d6f756e74206578636565647320616c6c6f77616e6365000060448201526064015b60405180910390fd5b610480848484610989565b90505b9392505050565b6104943382610a33565b604051600090339083908381818185875af1925050503d80600081146104d6576040519150601f19603f3d011682016040523d82523d6000602084013e6104db565b606091505b50509050806105365760405162461bcd60e51b815260206004820152602160248201527f774554483a205769746864726177207472616e73616374696f6e206661696c656044820152601960fa1b606482015260840161046c565b5050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103d0918590610571908690610fb8565b610858565b348111156105bd5760405162461bcd60e51b81526020600482015260146024820152730ee8aa89074409cdee840cadcdeeaced040cae8d60631b604482015260640161046c565b6105c78282610b81565b34811015610536576000336105dc8334610fd0565b604051600081818185875af1925050503d8060008114610618576040519150601f19603f3d011682016040523d82523d6000602084013e61061d565b606091505b505090508061066e5760405162461bcd60e51b815260206004820181905260248201527f774554483a204465706f736974207472616e73616374696f6e206661696c6564604482015260640161046c565b505050565b6005546001600160a01b031633146106cd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046c565b6106d76000610c60565b565b60606004805461034090610fe7565b3360009081526001602090815260408083206001600160a01b03861684529091528120548281101561076a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161046c565b6107773385858403610858565b5060019392505050565b6000610483838361097c565b6005546001600160a01b031633146107e75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046c565b6001600160a01b03811661084c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161046c565b61085581610c60565b50565b6001600160a01b0383166108ba5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161046c565b6001600160a01b03821661091b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161046c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006103d0338484610cb2565b6000610996848484610cb2565b6001600160a01b038416600090815260016020908152604080832033845290915290205482811015610a1b5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b606482015260840161046c565b610a288533858403610858565b506001949350505050565b6001600160a01b038216610a935760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161046c565b6001600160a01b03821660009081526020819052604090205481811015610b075760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161046c565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b36908490610fd0565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6001600160a01b038216610bd75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161046c565b8060026000828254610be99190610fb8565b90915550506001600160a01b03821660009081526020819052604081208054839290610c16908490610fb8565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038316610d165760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161046c565b6001600160a01b038216610d785760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161046c565b6001600160a01b03831660009081526020819052604090205481811015610df05760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161046c565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610e27908490610fb8565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e7391815260200190565b60405180910390a350505050565b80356001600160a01b0381168114610e9857600080fd5b919050565b600060208284031215610eae578081fd5b61048382610e81565b60008060408385031215610ec9578081fd5b610ed283610e81565b9150610ee060208401610e81565b90509250929050565b600080600060608486031215610efd578081fd5b610f0684610e81565b9250610f1460208501610e81565b9150604084013590509250925092565b60008060408385031215610f36578182fd5b610f3f83610e81565b946020939093013593505050565b600060208284031215610f5e578081fd5b5035919050565b6000602080835283518082850152825b81811015610f9157858101830151858201604001528201610f75565b81811115610fa25783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610fcb57610fcb611022565b500190565b600082821015610fe257610fe2611022565b500390565b600181811c90821680610ffb57607f821691505b6020821081141561101c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212206e5c31610e3a7ffbe710f9d14ec32d89b355f50b6ab0fff538ade5446d5edd1664736f6c63430008040033";

export class WEth__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WEth> {
    return super.deploy(name, symbol, overrides || {}) as Promise<WEth>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): WEth {
    return super.attach(address) as WEth;
  }
  connect(signer: Signer): WEth__factory {
    return super.connect(signer) as WEth__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WEthInterface {
    return new utils.Interface(_abi) as WEthInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WEth {
    return new Contract(address, _abi, signerOrProvider) as WEth;
  }
}

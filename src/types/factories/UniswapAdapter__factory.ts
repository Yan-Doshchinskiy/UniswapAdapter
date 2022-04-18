/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapAdapter,
  UniswapAdapterInterface,
} from "../UniswapAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_routerAddress",
        type: "address",
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
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOne",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountTwo",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amountLiquidity",
        type: "uint256",
      },
    ],
    name: "LiquidityProvided",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOne",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountTwo",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amountLiquidity",
        type: "uint256",
      },
    ],
    name: "LiquidityRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenOne",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenTwo",
        type: "address",
      },
    ],
    name: "PairCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "addressArray",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amountsArray",
        type: "uint256[]",
      },
    ],
    name: "Swapped",
    type: "event",
  },
  {
    inputs: [],
    name: "allPairsLength",
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
        name: "tokenOne",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenTwo",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factoryAddress",
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
        internalType: "address[]",
        name: "addressesPath",
        type: "address[]",
      },
    ],
    name: "getAmountsIn",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
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
        name: "addressesPath",
        type: "address[]",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenOne",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenTwo",
        type: "address",
      },
    ],
    name: "getTokensPair",
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
        name: "tokenOne",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenTwo",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOne",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountTwo",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountMinOne",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountMinTwo",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timeLimit",
        type: "uint256",
      },
    ],
    name: "provideLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "_amountOne",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountTwo",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_liquidityAmount",
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
        name: "tokenOne",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenTwo",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidityAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountMinOne",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountMinTwo",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timeLimit",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "_amountOne",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountTwo",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "routerAddress",
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
        name: "amountOne",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountTwo",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "addressesPath",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timeLimit",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_amounts",
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
        name: "addressesPath",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timeLimit",
        type: "uint256",
      },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162001681380380620016818339810160408190526100319161007e565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100b0565b80516001600160a01b038116811461007957600080fd5b919050565b60008060408385031215610090578182fd5b61009983610062565b91506100a760208401610062565b90509250929050565b6115c180620000c06000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638803dbee116100715780638803dbee1461013e578063966dae0e14610151578063a8e26cc214610164578063baa2abde14610192578063c9c65396146101ba578063d06ca61f146101cd57600080fd5b80631f00ca74146100ae5780633268cc56146100d757806338ed1739146101025780633cc5e48314610115578063574f2ba314610128575b600080fd5b6100c16100bc366004611299565b6101e0565b6040516100ce9190611467565b60405180910390f35b6001546100ea906001600160a01b031681565b6040516001600160a01b0390911681526020016100ce565b6100c1610110366004611306565b610273565b6100ea61012336600461107d565b61045f565b6101306104e5565b6040519081526020016100ce565b6100c161014c366004611306565b610571565b6000546100ea906001600160a01b031681565b610177610172366004611126565b6107a3565b604080519384526020840192909252908201526060016100ce565b6101a56101a03660046110b5565b610a3a565b604080519283526020830191909152016100ce565b6100ea6101c836600461107d565b610c64565b6100c16101db366004611299565b610d3e565b6001546040516307c0329d60e21b81526060916001600160a01b031690631f00ca7490610215908790879087906004016114ad565b60006040518083038186803b15801561022d57600080fd5b505afa158015610241573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261026991908101906111a1565b90505b9392505050565b60606102c23330898888600081811061029c57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906102b19190611045565b6001600160a01b0316929190610d73565b848460008181106102e357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906102f89190611045565b60015460405163095ea7b360e01b81526001600160a01b039182166004820152602481018a905291169063095ea7b390604401602060405180830381600087803b15801561034557600080fd5b505af1158015610359573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037d9190611261565b506001546040516338ed173960e01b81526001600160a01b03909116906338ed1739906103b8908a908a908a908a908a908a906004016114d0565b600060405180830381600087803b1580156103d257600080fd5b505af11580156103e6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261040e91908101906111a1565b9050826001600160a01b03167fbd32005b97096d6ab1a0d48dc1d54b082182105b96b4910a27aaf0bf9e6e2ba486868460405161044d93929190611437565b60405180910390a29695505050505050565b6000805460405163e6a4390560e01b81526001600160a01b03858116600483015284811660248301529091169063e6a439059060440160206040518083038186803b1580156104ad57600080fd5b505afa1580156104c1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026c9190611061565b60008060009054906101000a90046001600160a01b03166001600160a01b031663574f2ba36040518163ffffffff1660e01b815260040160206040518083038186803b15801561053457600080fd5b505afa158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190611281565b905090565b606061059a3330888888600081811061029c57634e487b7160e01b600052603260045260246000fd5b848460008181106105bb57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906105d09190611045565b60015460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905291169063095ea7b390604401602060405180830381600087803b15801561061d57600080fd5b505af1158015610631573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106559190611261565b50600154604051634401edf760e11b81526001600160a01b0390911690638803dbee90610690908a908a908a908a908a908a906004016114d0565b600060405180830381600087803b1580156106aa57600080fd5b505af11580156106be573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106e691908101906111a1565b9050610766338260008151811061070d57634e487b7160e01b600052603260045260246000fd5b602002602001015188610720919061150e565b8787600081811061074157634e487b7160e01b600052603260045260246000fd5b90506020020160208101906107569190611045565b6001600160a01b03169190610de4565b826001600160a01b03167fbd32005b97096d6ab1a0d48dc1d54b082182105b96b4910a27aaf0bf9e6e2ba486868460405161044d93929190611437565b600080806107bc6001600160a01b038c1633308c610d73565b6107d16001600160a01b038b1633308b610d73565b60015460405163095ea7b360e01b81526001600160a01b039182166004820152602481018b9052908c169063095ea7b390604401602060405180830381600087803b15801561081f57600080fd5b505af1158015610833573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108579190611261565b5060015460405163095ea7b360e01b81526001600160a01b039182166004820152602481018a9052908b169063095ea7b390604401602060405180830381600087803b1580156108a657600080fd5b505af11580156108ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108de9190611261565b5060015460405162e8e33760e81b81526001600160a01b038d811660048301528c81166024830152604482018c9052606482018b9052608482018a905260a4820189905287811660c483015260e482018790529091169063e8e337009061010401606060405180830381600087803b15801561095957600080fd5b505af115801561096d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109919190611377565b91945092509050828911156109bf576109bf336109ae858c61150e565b6001600160a01b038e169190610de4565b818811156109e6576109e6336109d5848b61150e565b6001600160a01b038d169190610de4565b604080518481526020810184905282916001600160a01b038816917f3bca7014f4c0ccc8016338c79f4c00e82068dbadaf4f01ca5449040fdd39f500910160405180910390a3985098509895505050505050565b6000805460405163e6a4390560e01b81526001600160a01b038a8116600483015289811660248301528392839291169063e6a439059060440160206040518083038186803b158015610a8b57600080fd5b505afa158015610a9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac39190611061565b9050610ada6001600160a01b03821633308b610d73565b60015460405163095ea7b360e01b81526001600160a01b039182166004820152602481018a90529082169063095ea7b390604401602060405180830381600087803b158015610b2857600080fd5b505af1158015610b3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b609190611261565b50600154604051635d5155ef60e11b81526001600160a01b038c811660048301528b81166024830152604482018b9052606482018a90526084820189905287811660a483015260c482018790529091169063baa2abde9060e4016040805180830381600087803b158015610bd357600080fd5b505af1158015610be7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0b91906112e3565b604080518381526020810183905292955090935089916001600160a01b038816917f1dc8bb69df2b8e91fbdcbfcf93d951b3f0000f085a95fe3f7946d6161439245d910160405180910390a35097509795505050505050565b600080546040516364e329cb60e11b81526001600160a01b03858116600483015284811660248301528392169063c9c6539690604401602060405180830381600087803b158015610cb457600080fd5b505af1158015610cc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cec9190611061565b604080516001600160a01b0387811682528681166020830152929350918316917fa92a2b95c8d8436f6ac4c673c61487364f877efb9534d4296fad8ef904546c94910160405180910390a29392505050565b60015460405163d06ca61f60e01b81526060916001600160a01b03169063d06ca61f90610215908790879087906004016114ad565b6040516001600160a01b0380851660248301528316604482015260648101829052610dde9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610e19565b50505050565b6040516001600160a01b038316602482015260448101829052610e1490849063a9059cbb60e01b90606401610da7565b505050565b6000610e6e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610ef09092919063ffffffff16565b805190915015610e145780806020019051810190610e8c9190611261565b610e145760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6060610269848460008585843b610f495760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ee7565b600080866001600160a01b03168587604051610f65919061141b565b60006040518083038185875af1925050503d8060008114610fa2576040519150601f19603f3d011682016040523d82523d6000602084013e610fa7565b606091505b5091509150610fb7828286610fc2565b979650505050505050565b60608315610fd157508161026c565b825115610fe15782518084602001fd5b8160405162461bcd60e51b8152600401610ee7919061147a565b60008083601f84011261100c578081fd5b50813567ffffffffffffffff811115611023578182fd5b6020830191508360208260051b850101111561103e57600080fd5b9250929050565b600060208284031215611056578081fd5b813561026c81611573565b600060208284031215611072578081fd5b815161026c81611573565b6000806040838503121561108f578081fd5b823561109a81611573565b915060208301356110aa81611573565b809150509250929050565b600080600080600080600060e0888a0312156110cf578283fd5b87356110da81611573565b965060208801356110ea81611573565b955060408801359450606088013593506080880135925060a088013561110f81611573565b8092505060c0880135905092959891949750929550565b600080600080600080600080610100898b031215611142578081fd5b883561114d81611573565b9750602089013561115d81611573565b965060408901359550606089013594506080890135935060a0890135925060c089013561118981611573565b8092505060e089013590509295985092959890939650565b600060208083850312156111b3578182fd5b825167ffffffffffffffff808211156111ca578384fd5b818501915085601f8301126111dd578384fd5b8151818111156111ef576111ef61155d565b8060051b604051601f19603f830116810181811085821117156112145761121461155d565b604052828152858101935084860182860187018a1015611232578788fd5b8795505b83861015611254578051855260019590950194938601938601611236565b5098975050505050505050565b600060208284031215611272578081fd5b8151801515811461026c578182fd5b600060208284031215611292578081fd5b5051919050565b6000806000604084860312156112ad578283fd5b83359250602084013567ffffffffffffffff8111156112ca578283fd5b6112d686828701610ffb565b9497909650939450505050565b600080604083850312156112f5578182fd5b505080516020909101519092909150565b60008060008060008060a0878903121561131e578182fd5b8635955060208701359450604087013567ffffffffffffffff811115611342578283fd5b61134e89828a01610ffb565b909550935050606087013561136281611573565b80925050608087013590509295509295509295565b60008060006060848603121561138b578081fd5b8351925060208401519150604084015190509250925092565b81835260006020808501945082825b858110156113e15781356113c681611573565b6001600160a01b0316875295820195908201906001016113b3565b509495945050505050565b6000815180845260208085019450808401835b838110156113e1578151875295820195908201906001016113ff565b6000825161142d818460208701611531565b9190910192915050565b60408152600061144b6040830185876113a4565b828103602084015261145d81856113ec565b9695505050505050565b60208152600061026c60208301846113ec565b6020815260008251806020840152611499816040850160208701611531565b601f01601f19169190910160400192915050565b8381526040602082015260006114c76040830184866113a4565b95945050505050565b86815285602082015260a0604082015260006114f060a0830186886113a4565b6001600160a01b039490941660608301525060800152949350505050565b60008282101561152c57634e487b7160e01b81526011600452602481fd5b500390565b60005b8381101561154c578181015183820152602001611534565b83811115610dde5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461158857600080fd5b5056fea26469706673582212200ce15cdf3d91ac863b56c6110cfadf2106250d41422c30bb1db2b538cf05fecc64736f6c63430008040033";

export class UniswapAdapter__factory extends ContractFactory {
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
    _factoryAddress: string,
    _routerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapAdapter> {
    return super.deploy(
      _factoryAddress,
      _routerAddress,
      overrides || {}
    ) as Promise<UniswapAdapter>;
  }
  getDeployTransaction(
    _factoryAddress: string,
    _routerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factoryAddress,
      _routerAddress,
      overrides || {}
    );
  }
  attach(address: string): UniswapAdapter {
    return super.attach(address) as UniswapAdapter;
  }
  connect(signer: Signer): UniswapAdapter__factory {
    return super.connect(signer) as UniswapAdapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapAdapterInterface {
    return new utils.Interface(_abi) as UniswapAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapAdapter {
    return new Contract(address, _abi, signerOrProvider) as UniswapAdapter;
  }
}

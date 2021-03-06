// (address _factoryAddress, address _routerAddress)
type argsArray = [string, string];

const router = process.env.ROUTER_ADDRESS as string;
const factory = process.env.FACTORY_ADDRESS as string;

const baseArgs = [factory, router];

export default baseArgs as argsArray;

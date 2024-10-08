import { providers } from 'ethers';

export const getProviderOrSigner = async (web3ModalRef, needSigner = false) => {
	if (!web3ModalRef || !web3ModalRef.current) {
	  throw new Error("Web3Modal not initialized.");
	}
  
	const instance = await web3ModalRef.current.connect();
	const provider = new providers.Web3Provider(instance);
  
	if (needSigner) {
	  const signer = provider.getSigner();
	  return signer;
	}
  
	return provider;
  };


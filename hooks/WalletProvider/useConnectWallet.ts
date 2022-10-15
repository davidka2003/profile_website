import { web3Modal } from "@utils/configs/provider";
import { useContext, useEffect } from "react";

import { getProvider, getSigner, WalletContext } from "./WalletProvider";

export const useConnectWallet = () => {
  const context = useContext(WalletContext);
  const [instance, setInstance] = context.useInstanceState;
  const [connected, setConnected] = context.useConnectedState;
  const [provider, setProvider] = context.useProviderState;
  const [signer, setSigner] = context.useSignerState;
  const [address, setAddress] = context.useAddressState;
  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider) {
      connect();
    }
  }, [web3Modal]);
  const connect = async () => {
    try {
      const instance = await web3Modal.connect();
      const provider = getProvider(instance);
      const signer = getSigner(provider);
      const address = await signer.getAddress();
      setAddress(address);
      setSigner(signer);
      setProvider(provider);
      setInstance(instance);
      setConnected(true);
    } catch (error) {
      console.error(error);
    }
  };
  return { connect };
};

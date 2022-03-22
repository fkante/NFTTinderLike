import { useEffect, useState } from "react";
import { ethers } from "ethers";
//@ts-ignore
import Lottie from "react-lottie";
import { useMoralis } from "react-moralis";

import Button from "./common/Button";
import Layout from "./common/Layout";
import animationData from "./lotties/nft-cards.json";
import Icon from "./common/Icon";
import Simple from "./SimpleTinder";
import ExitSvg from "./svg/ExitSvg";
import NFTBalance from "./common/NFTBalance";
import IconSvg from "./svg/IconSvg";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

declare let window: any;

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const {
    Moralis,
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
    enableWeb3,
  } = useMoralis();

  async function connectWallet() {
    let success = false
    try {
      if (!isAuthenticated) {
        authenticate({ signingMessage: "Log in using Moralis" })
          .then(function (user) {
            if (user) {
              success = true;
            }
          })
          .catch(function (err) {
            console.log("error:", err);
          });
        await enableWeb3();
      }
    } catch (error) {
      console.log(error);
    }
    return success
  }

  async function logOut() {
    try {
      await logout();
      setCurrentAccount("");
    } catch (error) {
      console.log(error);
    }
  }

  async function connectWalletEth() {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleWalletConnection() {
    const connected = await connectWallet();
    if (!connected) {
      connectWalletEth();
    }
  }

  return (isAuthenticated || currentAccount) ? (
    <div className="flex h-screen">
      <div className="border-r border-gray-500 bg-gray-500 h-full w-1/4 flex flex-col">
        <div className="inline-flex items-center py-5 px-4 bg-gradient-to-r from-blue-400 to-green-400 justify-between">
          <div className="inline-flex items-center space-x-4">
            <IconSvg style="rounded-full shadow h-10"/>
            <span className="font-semibold text-white truncate lg:w-52 md:w-32">
              {currentAccount ? currentAccount : user && user.get("ethAddress")}
            </span>
          </div>
          <button
            className={`p-2 rounded-full bg-white shadow hover:bg-gray-200 
          `}
            onClick={logOut}
          >
            <ExitSvg style="h-8 fill-current text-red-400" />
          </button>
        </div>
        <div className="inline-flex items-center justify-center p-3 border-b border-gray-100">
          <div className="border-b text-white font-bold">My NFTs</div>
        </div>
        <NFTBalance address={currentAccount} />
      </div>
      <div className="bg-gray-100 h-full w-3/4">
        <Simple />
      </div>
    </div>
  ) : (
    <Layout>
      <div className={`flex flex-col items-center px-6 py-16`}>
        <Lottie options={defaultOptions} height={400} width={400} />
        <Button
          onClick={handleWalletConnection}
          style={`mt-6 ${
            isAuthenticating ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          value="Connect Wallet"
          metamask={true}
        />
      </div>
    </Layout>
  );
}

export default App;

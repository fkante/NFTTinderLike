import React, { useEffect, useState } from "react";
import { useNFTBalances } from "react-moralis";

import Button from "./Button";
import NFTImage from "./NFTImage";

type NFT = {
  token_id: string;
  token_address: string;
  name: string;
  description: string;
  image: string;
};

export default function NFTBalance({ address }: { address?: string }) {
  const [myNFTs, setMyNFTs] = useState<NFT[]>([]);
  let params = {
    params: {
      chain: "eth",
      address: address ? address : "",
    },
  };
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  function setupMyNFTs() {
    const newMyNFTs: NFT[] = [];
    if (data && data.result) {
      data.result.forEach((nft) => {
        const { token_id, token_address, metadata } = nft;
        const { name, description } = metadata;
        //@ts-ignore
        const image = nft.image;
        if (image) {
          newMyNFTs.push({
            token_id,
            token_address,
            name,
            description,
            image,
          });
        }
      });
    }
    setMyNFTs(newMyNFTs);
  }

  useEffect(() => {
    if (address && address.length > 0) {
      //@ts-ignore
      getNFTBalances(params);
    } else {
      getNFTBalances(); 
    }
  }, []);

  useEffect(() => {
    setupMyNFTs();
  }, [data]);

  function getNFTs() {
    if (address && address.length > 0) {
      //@ts-ignore
      getNFTBalances(params);
    } else {
      getNFTBalances(); 
    }
  }

  return (
    <div className="overflow-auto">
      {error && <>{JSON.stringify(error)}</>}
      {myNFTs.length === 0 && (
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <div className="text-center py-12">
              <div className="text-3xl">No NFTs found</div>
              <div className="text-gray-600 italic mt-3">
                We get NFTs from Etherum by default.
              </div>
              <Button
                onClick={getNFTs}
                style={`mt-6`}
                type="submit"
                value="Get my NFTs"
                metamask={false}
              />
            </div>
          </div>
        </div>
      )}

      {myNFTs.map((nft) => (
        <div className="inline-flex p-4 space-x-4" key={nft.token_id}>
          <NFTImage name={nft.image} size={40} />
          <div className="flex flex-col">
            <div className="font-semibold">{nft.name}</div>
            <span className="overflow-ellipsis text-xs w-32">
              {nft.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

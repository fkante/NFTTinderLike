import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useNFTBalances } from "react-moralis";

import GradientTitle from "./common/GradientTitle";
import CrossSvg from "./svg/CrossSvg";
import HearthSvg from "./svg/HearthSvg";
import Button from "./common/Button";

const NFT_ADDRESS = "0x54a973a5da508d551edf9ee50842e7c36faa1d87";
type NFT = {
  token_id: string;
  token_address: string;
  name: string;
  description: string;
  image: string;
};

function Simple() {
  const [myNFTs, setMyNFTs] = useState<NFT[]>([]);
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  function setupMyNFTs() {
    const newMyNFTs: NFT[] = [];
    if (data && data.result) {
      const len = data.result.length;
      const indexes = Array.from(Array(len).keys());
      const shuffledIndexes = indexes.sort(() => 0.5 - Math.random());
      const topIndexes = shuffledIndexes.slice(0, 5);
      data.result.forEach((nft, index) => {
        try {
          if (!topIndexes.includes(index)) {
            return;
          }
          const { token_id, token_address, metadata } = nft;
          const { name, description } = metadata;
          //@ts-ignore
          const image = nft.image;
          if (image && !image.includes("mp4")) {
            newMyNFTs.push({
              token_id,
              token_address,
              name,
              description,
              image,
            });
          }
        } catch (e) {
          console.log(e);
        }
      });
    }
    updateCurrentIndex(newMyNFTs.length - 1);
    setMyNFTs(newMyNFTs);
  }

  useEffect(() => {
    getNFTBalances({
      params: {
        chain: "eth",
        address: NFT_ADDRESS,
      },
    });
  }, []);

  useEffect(() => {
    setupMyNFTs();
  }, [data]);

  const [currentIndex, setCurrentIndex] = useState(4);
  const [lastDirection, setLastDirection] = useState();
  const [childRefs, setChildRefs] = useState<React.RefObject<any>[]>([]);

  const currentIndexRef = useRef(currentIndex);

  // const newChildRefs = useMemo(
  //   () =>
  //     Array(myNFTs.length)
  //       .fill(0)
  //       .map((i) => React.createRef()),
  //   []
  // );
  // setChildRefs(newChildRefs);

  function updateCurrentIndex(val: number) {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  }
  const canGoBack = currentIndex < 5;
  const canSwipe = currentIndex >= 0;

  async function swipe(dir: any) {
    if (canSwipe && currentIndex < 5) {
      //@ts-ignore
      await childRefs[currentIndex].current.swipe(dir);
    }
  }

  function swiped(direction: any, nameToDelete: string, index: number) {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  }

  function outOfFrame(name: string, index: number) {
    //@ts-ignore
    currentIndexRef.current >= index &&
      childRefs[index] &&
      childRefs[index].current.restoreCard();
  }

  async function goBack() {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    //@ts-ignore
    await childRefs[newIndex].current.restoreCard();
  }

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <GradientTitle
        style="text-center"
        size="small"
        titles={["Is it your dream NFT ?"]}
      />
      {isLoading && <div>Loading...</div>}
      {myNFTs.map((character, index) => (
        <TinderCard
          //@ts-ignore
          ref={childRefs[index]}
          className="absolute h-80 w-80"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name, index)}
          onCardLeftScreen={() => outOfFrame(character.name, index)}
        >
          <h3 className="font-semibold text-gray-800 text-l truncate bg-gray-100">
            {character.name}
          </h3>
          <img
            src={character.image}
            alt={character.name}
            className="relative rounded-lg h-full shadow-xl"
          />
        </TinderCard>
      ))}
      <Button
        onClick={setupMyNFTs}
        style={`mt-6`}
        type="submit"
        value="Find new NFTs"
        metamask={false}
      />
      <div className="inline flex space-x-96 mt-96">
        <div className="flex flex-col items-center mt-8">
          <CrossSvg style="h-16" />
          <span className="text-gray-800 text-l mb-2">Swipe Left to Pass</span>
        </div>
        <div className="flex flex-col items-center mt-8">
          <HearthSvg style="h-16" />
          <span className="text-gray-800 text-md b-2">Swipe Right to Like</span>
        </div>
        {/* <button
          className={`p-5 rounded-full bg-white shadow-lg hover:bg-gray-200 ${
            !canSwipe ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => swipe("left")}
        >
          <CrossSvg style="h-8" />
        </button>
        <button
          className={`p-5 rounded-full bg-white shadow-lg hover:bg-gray-200 ${
            !canGoBack ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => goBack()}
        >
          <GoBackSvg style="h-8 fill-current text-gray-800" />
        </button>
        <button
          className={`p-5 rounded-full bg-white shadow-lg hover:bg-gray-200 ${
            !canSwipe ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => swipe("right")}
        >
          <HearthSvg style="h-8" />
        </button> */}
      </div>
    </div>
  );
}

export default Simple;

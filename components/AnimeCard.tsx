import { motion } from "framer-motion";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
    preview: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  released_on: string;
  url: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  return (
    <Link href={anime.url} as={anime.url}>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: index * 0.25,
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="max-w-sm rounded relative w-full cursor-pointer"
      >
        <div className="relative w-full h-[37vh]">
          <Image
            src={`https://shikimori.one/${anime.image.original}`}
            alt={anime.name}
            fill
            className="rounded-xl"
          />
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
              {anime.name}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <p className="text-white text-sm font-bold capitalize">
                {anime.kind}
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./episodes.svg"
                alt="episodes"
                width={17}
                height={17}
                className="object-contain"
              />
              <p className="text-sm text-white font-bold">
                {anime.episodes || anime.episodes_aired}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./star.svg"
                alt="star"
                width={15}
                height={15}
                className="object-contain"
              />
              <p className="text-sm font-bold text-[#FFAD49]">{anime.score}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./date-icon.svg"
                alt="star"
                width={15}
                height={15}
                className="object-contain"
              />
              <p className="text-sm font-bold text-[#FFAD49]">
                {anime.released_on}
              </p>
            </div>
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
}

export default AnimeCard;

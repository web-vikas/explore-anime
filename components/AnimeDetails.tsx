import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
interface AnimeDetailsProps {
  anime: any; // Replace 'any' with a more specific type based on your data structure
}

const AnimeDetails: React.FC<AnimeDetailsProps> = ({ anime }) => {
  if (!anime) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="flex text-white p-6 flex-col md:flex-row"
        //   style={{
        //     background: `url(https://shikimori.one${anime.image.original}`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //   }}
      >
        <div className="w-full md:w-1/3">
          <Image
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            className="rounded"
            height={400}
            width={400}
          />
          <h1 className="my-3 text-3xl">
            {anime.name} ( {anime.japanese} )
          </h1>
          <div className="flex gap-3 flex-wrap">
            <Button variant="shadow" size="sm" color="danger">
              {anime.kind}
            </Button>
            <Button variant="shadow" size="sm" color="default">
              {anime.score}
            </Button>
            <Button variant="shadow" size="sm" color="primary">
              {anime.status}
            </Button>
            <Button variant="shadow" size="sm" color="secondary">
              {anime.episodes}
            </Button>
            <Button variant="shadow" size="sm" color="success">
              {anime.released_on}
            </Button>
            <Button
              variant="shadow"
              size="sm"
              color="warning"
              className="uppercase"
            >
              {anime.rating}
            </Button>
            <Button variant="shadow" size="sm" color="danger">
              {anime.duration}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <ul className="flex items-center gap-2 flex-wrap my-3">
            {anime.genres.map((genre: any) => (
              <li
                key={genre.id}
                className="bg-violet-600  rounded-full px-3 py-1 underline cursor-pointer"
              >
                #{genre.name}
              </li>
            ))}
          </ul>
          <p className="py-2 my-3">{anime.description}</p>{" "}
          {anime.studios.map((studio: any) => (
            <div key={studio.id}>
              <Image
                src={`https://shikimori.one${studio.image}`}
                alt={studio.name}
                height={300}
                width={300}
                className="rounded-full w-32 h-32 object-contain border-4 p-2 mr-3 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="m-3">
        <h1 className="text-5xl my-7 font-extrabold text-white">Gallery</h1>
        <div className="flex gap-3 flex-col md:flex-row">
          {anime.videos.map((video: any) => (
            <iframe
              key={video.id}
              className="w-full aspect-video"
              src={video.player_url}
              title={video.name}
            />
          ))}
        </div>
        <div className="flex gap-2 flex-col md:flex-row m-3">
          {anime.screenshots.map((screenshot: any) => (
            <div key={screenshot.original}>
              <Image
                src={`https://shikimori.one${screenshot.original}`}
                alt="Screenshot"
                className="flex-1 h-auto w-full"
                height={500}
                width={750}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimeDetails;

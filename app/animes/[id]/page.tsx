"use client";
import React, { useEffect, useState } from "react";
import { fetchAnimeDetails } from "./action";
import AnimeDetails from "@/components/AnimeDetails";

const Page = () => {
  const [animeSlug, setAnimeSlug] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (animeSlug) {
        try {
          const apiData = await fetchAnimeDetails(animeSlug);
          setData(apiData);
        } catch (error) {
          console.error("Error fetching anime details:", error);
        }
      }
    };

    const url = window.location.href;
    const parts = url.split("/");
    const lastPart = parts[parts.length - 1];

    setAnimeSlug(lastPart);
    fetchData();
  }, [animeSlug]);

  return (
    <div className="bg-black">
      <AnimeDetails anime={data} />
    </div>
  );
};

export default Page;

"use client"
import React from "react";
import PhotoGallery from "./Components/PhotoGallery";
import axios from "axios";
import { ApiResponse } from "react-photoswipe-2";
const Home: React.FC = async () => {
  async function getRedditMemes() {
    const response = await axios.get(
      "https://www.reddit.com/r/memes.json?limit=12"
    );
    const json = response.data;
    const imageUrls = json.data.children.map((obj: ApiResponse, index: number) => {
      if (index == 0) return;

      return {
        src: obj.data.url,
        w: "50%",
        h: "50%",
        fullSrc:obj.data.url,
        title:"none"
      };
    });
    return imageUrls;
  }
  const photos = await getRedditMemes();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Photo Gallery</h1>
      <PhotoGallery photos={photos} />
    </div>
  );
};

export default Home;

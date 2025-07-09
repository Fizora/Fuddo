import React from "react";
import Masonry from "react-masonry-css";
import photo1 from "/1.JPG";
import photo2 from "/2.JPG";
import photo3 from "/3.JPG";
import photo4 from "/4.JPG";
import photo5 from "/5.JPG";
import photo6 from "/6.JPG";
import photo7 from "/7.JPG";
import photo8 from "/8.JPG";
import photo9 from "/9.JPG";
import photo10 from "/10.JPG";
import photo11 from "/11.JPG";
import photo12 from "/12.JPG";
import photo13 from "/13.JPG";
import photo14 from "/14.JPG";
import photo15 from "/15.JPG";

function Showcase() {
  const photos = [
    {
      id: 1,
      title: "Sunset Glow",
      description:
        "A serene sunset over rolling hills, capturing the warmth of fleeting light.",
      url: photo1,
      orientation: "vertical",
    },
    {
      id: 2,
      title: "City Lights",
      description:
        "Vibrant urban energy under a twilight sky, pulsing with life.",
      url: photo2,
      orientation: "horizontal",
    },
    {
      id: 3,
      title: "Forest Whisper",
      description:
        "A tranquil forest bathed in soft morning mist, whispering secrets of nature.",
      url: photo3,
      orientation: "vertical",
    },
    {
      id: 4,
      title: "Ocean Breeze",
      description:
        "Waves crashing against the shore, kissed by the golden sun.",
      url: photo4,
      orientation: "horizontal",
    },
    {
      id: 5,
      title: "Mountain Serenity",
      description: "Majestic peaks standing tall under a vast, endless sky.",
      url: photo5,
      orientation: "vertical",
    },
    {
      id: 6,
      title: "Urban Pulse",
      description: "The heartbeat of the city, captured in a fleeting moment.",
      url: photo6,
      orientation: "horizontal",
    },
    {
      id: 7,
      title: "Golden Hour",
      description: "Soft light embracing the world in a warm, golden glow.",
      url: photo7,
      orientation: "vertical",
    },
    {
      id: 8,
      title: "Desert Dream",
      description:
        "Endless dunes under a starlit sky, a vision of timeless beauty.",
      url: photo8,
      orientation: "horizontal",
    },
    {
      id: 9,
      title: "Autumn Hues",
      description: "Golden leaves falling gently in a quiet autumn afternoon.",
      url: photo9,
      orientation: "vertical",
    },
    {
      id: 10,
      title: "Coastal Calm",
      description:
        "A peaceful shoreline under a pastel sunrise, whispering tranquility.",
      url: photo10,
      orientation: "horizontal",
    },
    {
      id: 11,
      title: "Wildflower Bloom",
      description: "A field of wildflowers dancing in the warm summer breeze.",
      url: photo11,
      orientation: "vertical",
    },
    {
      id: 12,
      title: "Night Sky",
      description: "Stars twinkling above a quiet desert, a canvas of dreams.",
      url: photo12,
      orientation: "horizontal",
    },
    {
      id: 13,
      title: "Morning Dew",
      description:
        "Dewdrops glistening on delicate petals in the morning light.",
      url: photo13,
      orientation: "vertical",
    },
    {
      id: 14,
      title: "Urban Dawn",
      description: "The city awakens under the soft hues of dawn.",
      url: photo14,
      orientation: "horizontal",
    },
    {
      id: 15,
      title: "Lake Reflection",
      description: "A serene lake mirroring the sky and surrounding mountains.",
      url: photo15,
      orientation: "vertical",
    },
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-medium text-black dark:text-white mb-8 text-center">
          A Gallery of Timeless Moments
        </h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-4"
          columnClassName="bg-clip-padding"
        >
          {photos.map((item) => (
            <div
              key={item.id}
              className="relative mb-4 rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 group"
            >
              <img
                src={item.url}
                alt={item.title}
                className={`w-full object-cover ${
                  item.orientation === "vertical" ? "h-80" : "h-48"
                }`}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black/80 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}

export default Showcase;

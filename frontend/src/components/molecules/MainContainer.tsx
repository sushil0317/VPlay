import React from "react";
import ReactPlayer from "react-player/lazy";
import Loader from "../organisms/Loader";
import { AiOutlineRightCircle } from "react-icons/ai";
const MainContainer = () => {
    const videoUrl = [
        {
            url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
        },
        {
            url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
        },
        {
            url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
        },
    ];
    return (
        <div className="flex flex-col items-center gap-8 px-6 pt-4 pb-10">
            <div className="flex ">
                <div className="w-1/2 mx-20">
                    {/* Play, Compete, Follow popular stream */}
                    <p className="text-6xl uppercase font-righteous">
                        Watch More, Worry Less: Stream with Confidence{" "}
                    </p>

                    <p className="mt-8 text-stone-400">
                        Get Hooked on Our Video Streaming Service: Enjoy Ad-Free
                        Viewing and Seamless Playback
                    </p>
                </div>
                <div className="">
                    <ReactPlayer
                        className="overflow-hidden bg-transparent rounded-2xl"
                        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                        height={300}
                        width={500}
                        loop={true}
                        controls={true}
                        playsinline={true}
                        fallback={<Loader />}
                    />
                </div>
            </div>
            <div>
                <span className="text-2xl font-semibold">
                    Stream of the day
                </span>
                <div className="flex items-center gap-8 mt-3">
                    {videoUrl.map((urls, key) => {
                        return (
                            <div>
                                <ReactPlayer
                                    className="overflow-hidden bg-transparent rounded-2xl"
                                    url={urls.url}
                                    height={200}
                                    width={400}
                                    loop={true}
                                    controls={true}
                                    playsinline={true}
                                    fallback={<Loader />}
                                />
                            </div>
                        );
                    })}
                    <button className="flex items-center gap-3 p-3 text-lg font-semibold transition-all duration-300 ease-in-out rounded-full text-purple bg-stone-800 hover:bg-stone-900">
                        <AiOutlineRightCircle />
                    </button>
                </div>
            </div>
            <div>
                <span className="mt-8 text-2xl font-semibold">Featured</span>
                <div className="flex items-center gap-8 mt-3">
                    {videoUrl.map((urls, key) => {
                        return (
                            <div>
                                <ReactPlayer
                                    className="overflow-hidden bg-transparent rounded-2xl"
                                    url={urls.url}
                                    height={200}
                                    width={400}
                                    loop={true}
                                    controls={true}
                                    playsinline={true}
                                    fallback={<Loader />}
                                />
                            </div>
                        );
                    })}
                    <button className="flex items-center gap-3 p-3 text-lg font-semibold transition-all duration-300 ease-in-out rounded-full text-purple bg-stone-800 hover:bg-stone-900">
                        <AiOutlineRightCircle />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;

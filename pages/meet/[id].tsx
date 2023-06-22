import React, { useEffect, useRef } from "react";
import {
  useLobby,
  useAudio,
  useVideo,
  useHuddle01,
  usePeers,
} from "@huddle01/react/hooks";
import { useRouter } from "next/router";
// import { Audio, Video } from "@huddle01/react/components";
// import { Button } from "@/components";
import { useEventListener } from "@huddle01/react";
import { HuddleIframe, useEventListner } from "@huddle01/iframe";
// JavaScript | TypeScript
import { iframeApi } from "@huddle01/iframe";
import { Navbar } from "@/components";

const VideoCall = () => {
  const router = useRouter();
  const { id } = router.query;

  // const { peerIds } = usePeers();
  // const { joinLobby } = useLobby();
  // const {
  //   fetchAudioStream,
  //   stopAudioStream,
  //   error: micError,
  //   stream: audioStream,
  // } = useAudio();
  // const {
  //   fetchVideoStream,
  //   stopVideoStream,
  //   error,
  //   stream: videoStream,
  // } = useVideo();

  const { initialize, isInitialized } = useHuddle01();
  // const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // its preferable to use env vars to store projectId
    initialize("L-UtmOW84pscUfMWmRGCk2-dwngKPaoK");
    console.log(id);
  }, []);

  //   const startVideo = () => {
  //     if (isInitialized) {
  //       fetchVideoStream();
  //     }
  //   };

  useEventListner("lobby:initialized", () => {
    iframeApi.initialize({
      redirectUrlOnLeave: "https://huddle01.com",
      wallets: ["metamask"],
      background: "https://images.pexels.com/photos/1420003/pexels-photo-1420003.jpeg?auto=compress&cs=tinysrgb&w=1600",
      gradientAndMesh: false
    });
  });

  //   useEventListener("lobby:joined", () => {
  //     console.log("lobby:joined");
  //     fetchVideoStream();
  //     fetchAudioStream();
  // });

  // useEventListener("lobby:cam-on", () => {
  //     if (videoStream && videoRef.current) videoRef.current.srcObject = videoStream;
  // });

  //alert(fetchAudioStream.isCallable)
  return (
    <div className="">
      <HuddleIframe
        roomUrl={`https://iframe.huddle01.com/${id}`}
        className="w-full aspect-video"

      />
      <div className="fixed top-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default VideoCall;

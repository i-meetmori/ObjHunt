import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  state: boolean;
  volumelevel: number;
}

function BGMusic(props: Props) {
  const canPlay = props.state;
  const audioRef = useRef<HTMLAudioElement>(null);
  const volumelevel = props.volumelevel

  useEffect(() => {
    canPlay ? audioRef?.current?.play() : audioRef?.current?.pause();
    if(audioRef.current){
      audioRef.current.volume = volumelevel;
    }
  }, [canPlay, volumelevel]);

  return (
    <div className="absolute">
      <audio ref={audioRef} autoPlay={canPlay} loop>
        <source src={"/bg.mpga"} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default BGMusic;

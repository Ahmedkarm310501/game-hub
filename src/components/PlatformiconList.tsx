import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";
import React from "react";

interface Props {
  platform: Platform[];
}

const PlatformiconList = ({ platform }: Props) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <div className="flex gap-3 mt-2">
      {platform.map((platform) => {
        const Icon = platformIcons[platform.slug];
        if (Icon) return <Icon key={platform.id} className="text-gray-500" />;
      })}
    </div>
  );
};

export default PlatformiconList;

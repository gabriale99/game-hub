import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { TbCircleLetterN } from "react-icons/tb";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap = (slug: string) => {
    switch (slug) {
      case "playstation":
        return <FaPlaystation />;
      case "xbox":
        return <FaXbox />;
      case "pc":
        return <FaWindows />;
      case "mac":
        return <FaApple />;
      case "ios":
        return <MdPhoneIphone />;
      case "nintendo":
        return <TbCircleLetterN />;
      case "android":
        return <FaAndroid />;
      case "linux":
        return <FaLinux />;
      case "web":
        return <BsGlobe />;
      default:
        return <CiCircleQuestion />;
    }
  };

  return (
    <HStack my="10px">
      {platforms.map((platform) => (
        <Icon key={platform.slug} color="gray.500">
          {iconMap(platform.slug)}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;

import { Box, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";
import { Platform } from "@/hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Box m={2}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button>
            <BsChevronDown />
            {selectedPlatform?.name || "Platforms"}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
              value={platform.id.toString()}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;

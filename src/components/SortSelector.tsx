import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button>
          <BsChevronDown />
          Order: by Relevance
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="date-added">Date added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="release-date">Release date</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="average-rating">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;

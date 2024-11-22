import useGenres, { Genre } from "@/hooks/useGenre";
import getCroppedImageURL from "@/services/image-url";
import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading textStyle="2xl" mb={3}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item key={genre.name} py="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageURL(genre.image_background)}
              ></Image>
              <Link
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;

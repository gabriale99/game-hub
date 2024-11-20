import useGenres from "@/hooks/useGenre";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((gen) => (
        <li key={gen.name}>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

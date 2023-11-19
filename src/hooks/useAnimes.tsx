import { animes } from "../mock/mockData";

const useAnimes = () => {
  const animesList = animes.map((el) => {
    const {
      mal_id,
      url,
      images: { jpg },
      title,
    } = el;

    return {
      id: mal_id,
      url,
      images: {
        small: jpg.small_image_url,
        large: jpg.large_image_url,
      },
      title,
    };
  });


  return {
    asd: 1,
    animesList
  };
};

export default useAnimes;

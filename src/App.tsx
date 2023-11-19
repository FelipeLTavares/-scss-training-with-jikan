import TextInput from "./components/forms/TextInput";
import "./App.scss";
import AnimeContainer from "./components/animeContainer";
import useAnimes from "./hooks/useAnimes";

export default function App() {
  const { animesList } = useAnimes();

  return (
    <>
      <header>HEADER</header>

      <main>
        <TextInput name="animeName" />

        <div className="allAnimes">
          {animesList.map((el) => {
            return (
              <AnimeContainer
                images={el.images}
                key={el.id}
                url={el.url}
                title={el.title}
              />
            );
          })}
        </div>
      </main>

      <footer>FOOTER</footer>
    </>
  );
}

import { SetStateAction } from 'react';
import { Button } from '../components/Button';

type Genres = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

type SideBarProps = {
  genres: Genres[];
  setSelectedGenreId: React.Dispatch<SetStateAction<number>>;
  selectedGenreId: number
}

export function SideBar({ genres, setSelectedGenreId, selectedGenreId }:SideBarProps) {
  // Complete aqui
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <nav className="sidebar">
          <span>Watch<p>Me</p></span>

          <div className="buttons-container">
            {genres.map(genre => (
              <Button
                key={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                onClick={() => handleClickButton(genre.id)}
                selected={selectedGenreId === genre.id}
              />
            ))}
          </div>

    </nav>
  )    
}
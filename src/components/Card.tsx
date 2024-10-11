import { Repository } from '../hooks/types';
import { useFavoriteRepoStore } from '../store/favoriteRepos';

type CardProps = {
  repository: Repository,
  isFavorite: boolean,
}

export const Card = ( { repository, isFavorite }: CardProps ) => {

  const addFavoriteRepo = useFavoriteRepoStore(state => state.addFavoriteRepo);
  const removeFavoriteRepo = useFavoriteRepoStore(state => state.removeFavoriteRepo);

  const toggleFavorite = () => {
    if( isFavorite ){
      removeFavoriteRepo( repository.id );
      return;
    }
    addFavoriteRepo( repository.id );
  }
  
  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={toggleFavorite}>
        {
          isFavorite ? 'DisLike' : 'Like'
        }
      </button>
    </div>
  )
}
import { Card } from './components/Card';
import { useFecthRepositories } from './hooks/useRepos';
import { useFavoriteRepoStore } from './store/favoriteRepos';

const App = () => {

  const { data, isLoading } = useFecthRepositories();
  const { favoriteReposIds } = useFavoriteRepoStore();

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <div>
      {
        data?.map(repo => (
            <Card repository={repo} key={repo.id} isFavorite={favoriteReposIds.includes(repo.id)} />
        ))
      }
    </div>
  )
}

export default App;
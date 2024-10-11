import { useQuery } from '@tanstack/react-query';
import githubApi from '../api/githubApi';
import { Repository } from './types';


async function fecthRepos(){
  const { data } = await githubApi.get<Repository[]>('/users/gavasquez/repos');
  return data;
}

export function useFecthRepositories(){

  return useQuery({
    queryKey: ['repos'],
    queryFn: fecthRepos,
  });

}
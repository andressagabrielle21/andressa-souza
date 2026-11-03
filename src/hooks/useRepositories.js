import { projectCoverUrl } from '@/components/ProjectCover';
import { useEffect, useState } from "react";

/**
 * Hook personalizado para buscar os repositórios públicos do GitHub.
 * Os dados são obtidos através da API Route do Next.js (/api/repos),
 * que usa um token de autenticação no servidor para evitar o rate limit.
 *
 * @returns {{ data: Array, loading: boolean, error: string|null }}
 */
const useRepositories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRepositories = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/repos");

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `Erro ${response.status}: não foi possível buscar os repositórios.`
          );
        }

        const rawData = await response.json();

        const formattedData = rawData.map((item) => ({
          id: item.id,
          repoName: item.name,
          coverImgUrl: projectCoverUrl(item.owner.login, item.name, item.default_branch),
          description: item.description,
          cloneUrl: item.clone_url,
          deployed: item.homepage,
          language: item.language,
          stars: item.stargazers_count,
          forks: item.forks_count,
        }));

        setData(formattedData);
      } catch (err) {
        console.error("[useRepositories] Falha ao buscar repositórios:", err);
        setError(err.message || "Ocorreu um erro desconhecido.");
      } finally {
        setLoading(false);
      }
    };

    getRepositories();
  }, []);

  return { data, loading, error };
};

export default useRepositories;


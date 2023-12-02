import { useEffect, useState } from "react";

const actions = () => {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    const getRepositories = async () => {
      const response = await fetch ("https://api.github.com/users/andressagabrielle21/repos?sort=created&direction=desc") 
      const data = await response.json();

      const formattedData = data.map((item) => ({
        id: item.id,
        repoName: item.name,
        coverImgUrl: `https://raw.githubusercontent.com/andressagabrielle21/${item.name}/main/src/assets/images/coverImage.png`,
        description: item.description,
        cloneUrl: item.clone_url,
        deployed: item.homepage,
      }));

      setRepoData(formattedData);
    };

    getRepositories();
  }, []);

  return repoData;
}

export default actions
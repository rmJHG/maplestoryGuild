import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "./API_KEY";
type skills = {
  skill_description: string;
  skill_effect: string;
  skill_icon: string;
  skill_level: number;
  skill_name: string;
};
interface data {
  date: string;
  guild_fame: number;
  guild_level: number;
  guild_mark: string;
  guild_mark_custom: null;
  guild_master_name: string;
  guild_member: string[];
  guild_member_count: number;
  guild_name: string;
  guild_noblesse_skill: skills[];
  guild_point: number;
  guild_skill: skills[];
  world_name: string;
}
const SearchResult: React.FC = () => {
  const [fetchedData, setFetchedData] = useState<data>();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    axios(`https://open.api.nexon.com/maplestory/v1/guild/id?guild_name=${params.guildName}&world_name=${params.server}`, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    })
      .then((res) =>
        axios(`https://open.api.nexon.com/maplestory/v1/guild/basic?oguild_id=${res.data.oguild_id}&date=2023-12-21`, {
          headers: {
            "x-nxopen-api-key": API_KEY,
          },
        }).then((res) => {
          setFetchedData(res.data);
          console.log(res.data);
        })
      )
      .catch((err) => console.log(err));
    setIsLoading(true);
  }, []);

  if (isLoading) {
    return (
      <div>
        {fetchedData?.guild_level}

        {fetchedData?.guild_master_name}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
export default SearchResult;

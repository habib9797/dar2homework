import React from 'react';
import { Actor } from '../../types';
import ActorItem from "../actoritem/ActorItem";

type Props = {
   actors: Actor[];
};

const ActorList: React.FC<Props> = ({ actors }) => {
   return (
      <div className="movies-list">
         {actors.map((actor) => (
            <ActorItem actor={actor} />
         ))}
      </div>
   );
};

export default ActorList;
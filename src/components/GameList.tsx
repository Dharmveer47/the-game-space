import React from "react";
type Props = {
  id: string;
  name: string;
  data: any;
};
export const GameList = ({ id, name, data }: Props) => {
  //   console.log(data);
  return (
    <div>
      <li key={id}>{name}</li>
    </div>
  );
};

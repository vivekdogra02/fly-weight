import { Chip } from "@material-ui/core";

export const Ships = ({ ships }: any) => {
  const renderedShips = ships.map((ship: any, index: number) => (
    <span key={index}>
      <Chip size="small" label={ship} />
    </span>
  ));

  return (renderedShips);
};

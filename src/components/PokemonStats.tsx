interface PropPokemonStats {
  statName: string;
  baseStat: number;
}

export const PokemonStats = ({ statName, baseStat }: PropPokemonStats) => {
  const w = baseStat <= 100 ? `${baseStat}%` : '100%';

  const divStyle = {
    '--w': w,
  } as React.CSSProperties;

  return (
    <div className="flex gap-1 items-center ">
      <span className="font-light w-40 max-[700px]:text-xs">{statName}</span>
      <div className="bar">
        <div style={divStyle} className="progress"></div>
      </div>
      <span className="counter-stat">{baseStat}</span>
    </div>
  );
};

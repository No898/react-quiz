export type Boxer = {
  name: string;
  division: string;
  fights: number;
  win: number;
  loss: number;
  kos: number;
};

export type ItemProps = {
  boxer: Boxer;
  isSelected: boolean;
  onClick: (id: number) => void;
  id: number;
};

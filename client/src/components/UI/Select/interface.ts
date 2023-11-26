export interface IOption {
  value: string;
  label: string;
}

export interface IProps {
  id?: string;
  options: IOption[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

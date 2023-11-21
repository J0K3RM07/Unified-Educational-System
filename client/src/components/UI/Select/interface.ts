export interface IOption {
  value: string;
  label: string;
}

export interface IProps {
  options: IOption[];
  value?: string;
  onChange?: () => void;
  className: string;
}

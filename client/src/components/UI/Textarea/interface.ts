export interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  className?: string;
  label?: string;
  value: string;
  rows?: number;
}
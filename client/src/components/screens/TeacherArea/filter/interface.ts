interface Object {
  day: string;
  lesson: string;
  group: string;
}

export interface IProps {
  change: ({}: Object) => void;
}

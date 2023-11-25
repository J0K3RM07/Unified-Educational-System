export interface IProps {
  filter: {
    day: string;
    lesson: string;
    group: string;
  };
}

export interface IResponseItems {
  course: string;
  finding: string;
  group: string;
  id: number;
  name: string;
  options: string;
}

export type Response = IResponseItems[];

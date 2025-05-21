export enum Status {
  FrontEnd = 'FrontEnd',
  BackEnd = 'BackEnd',
  FullStack = 'FullStack',
  DevOps = 'DevOps',
  QA = 'QA',
  Architect = 'Architect'
}

export interface Item {
  id: string;
  title: string;
  description: string;
  status: Status;
  creation_date: Date;
  update_date?: Date;
}
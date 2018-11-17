export interface Job {
  id: number;
  state: string;
  name: string;
  category: number;
  triggerName: string;
  triggerGroup: string;
  seconds: number;
  startDate?: any;
  endDate?: any;
  createDate?: any;
  updateDate?: any;
}

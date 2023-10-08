export interface ResponseItem<T> {
  message: string;
  result: Item<T>;
}

export interface Item<T> {
  properties: T;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface ResponseList {
  message: string;
  total_records: number;
  total_pages: number;
  previous: any;
  next: string;
  results: ListItem[];
}

export interface ListItem {
  uid: string;
  name: string;
  url: string;
}

export interface Item {
  id: any;
  name: string;
  dateCreated: Date;
  createdBy: string;
  dateModified: Date;
  modifiedBy: string;
  settings: {
    enabled: boolean;
    setting1: string;
    setting2: string;
    setting3: string;
    setting4: string;
  };
}

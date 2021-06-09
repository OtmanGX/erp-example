export interface MNotification {
  id?: number;
  message: string;
  title?: string;
  operation?: string;
  icon?: string;
  time?: Date;
  route?: string;
  color: string;
}

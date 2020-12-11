
export class Payment  {
    id?: number;
    attachment_id:string;
    date:Date=new Date();
    mode:string='';
    client_id=''
    amount:number;
    echeance:Date;
    status:string;
    companie:string;
  }
  
export interface UsersProfile {
    id:string;
    active:boolean;
    firstname:string
    lastname:string;
    phone:string;
    username:string;
    user_role :User_role;
  }

 export interface User_role {
    name:string;
  }

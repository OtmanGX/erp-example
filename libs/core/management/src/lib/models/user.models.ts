export class UsersProfile {
  public static columnDefs (prefix = '') {
    if (prefix.length) prefix += '.';
    return [
      { field: prefix + 'firstname', headerName: 'Nom complet', type: "textColumn",
      valueGetter: (params) => [params.value, params.data.lastname].join(' ')},
      { field: prefix + 'username', headerName: 'Nom d\'utilisateur', type: "textColumn"},
      { field: prefix + 'phone', headerName: 'Téléphone', type: "textColumn"},
    ]
  }
    id:string;
    active:boolean;
    firstname:string
    lastname:string;
    phone:string;
    username:string;
    user_role :User_role;

  }

 export  class User_role {
    name:string;
  }

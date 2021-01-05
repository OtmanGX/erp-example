import { Accessoire } from "../../models/produit/accessoire.model";
import { additionalParam_PD } from "../../models/produit/type_produit.model";

  export const accessoires: Accessoire[] = [
    {
      id: 1,
      code:'FT-10',
      type:'',
      libelle: 'ACCESSOIRE:PEINTURE BASS:FT-10',
      libelleClient: 'Accessoires',
      prix_Achat: 0,
      prix_min: 130,
      prix_max: 220,
      tags: '',
      companie:['Tanglass'],
      prix_default: 150,
    },

    {
      id: 2,
      code:'FT-20',
      type:'',
      libelle: 'ACCESSOIRE: PENTURE HAUTE : FT-20',
      libelleClient: 'Accessoires',
      prix_Achat:0,
      prix_min: 130,
      prix_max: 220,
      tags: '',
      companie:['Tanglass'],
      prix_default: 150,
    },

    {id: 3,
      code:'FT-53',
      type:'',
      libelle: 'ACCESSOIRE: SERRURE : FT-53',
      libelleClient: 'Accessoires',
      prix_Achat: 0,
      prix_min: 210,
      prix_max: 250,
      tags: '',
      companie:['Tanglass'],
      prix_default: 220,
    },

    {
      id: 4,
      code:'HD-633B',
      type:'',
      libelle: 'ACCESSOIRE: POIGNÉE (30) : HD-633B',
      libelleClient: 'Accessoires',
      prix_Achat: 0,
      prix_min: 172,
      prix_max: 200,
      tags: '',
      companie:['Tanglass'],
      prix_default: 188,
    },

    {
      id: 5,
      code:'SH-601S',
      type:'',
      libelle: 'ACCESSOIRE: PINCE DE FIXATION : SH-601S',   //designation
      libelleClient: 'Accessoires',
      prix_Achat: 0,
      prix_min: 35,
      prix_max: 45,
      tags: '',
      companie:['Tanglass'],
      prix_default: 35,
    },

    ]

    export const types_Accessoire: additionalParam_PD[] = [
    ]

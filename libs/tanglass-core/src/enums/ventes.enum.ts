export enum companiesDirection {
  Tanglass = "Tanglass",
  Trimar= "Trimar",
}
//related to companiesDirection
export enum  CompaniesCommandeDirection{
  commandeTanglass="commandeTanglass",
  commandeTrimar="commandeTrimar",
}
export enum companiesForDeliveryDirection {
  Tanglass = "commandeTanglass",
  Trimar= "commandeTrimar",
}
export enum statusDevisDirection {
  Initial = "Initiale",
  Confirmed= "Confirmer",
}
export enum statusCommandeDirection {
  closed = "Clôturée",
  encours= "En Cours",
}
export enum  ServicePurchaseseDirection{
  coupe="coupe",
  bordPolis="bordPolis",
  trempage="trempage",
  encoche="encoche",
  biseautage="biseautage",
  trous="trous",
  bombage="bombage",
  sablage="sablage",
  gravage="gravage",
  aluminium="aluminium",
  pose="pose",
}
export enum  ConsommablePurchaseseDirection{
  baguette="baguette",
  film="film",
  piece="Piéce",
  tubeInox="Tube Inox",
  peinture="Peinture",
  uchannel="Uchannel",
}

export enum  PaiementModeDirection{
  cheque="Chéque",
  effet="Effet",
  cash='Espèse',
  virement='Virement'

}
export enum  LivraisonModesDirection{
  return='Avoir',
  delivery='BL'
}



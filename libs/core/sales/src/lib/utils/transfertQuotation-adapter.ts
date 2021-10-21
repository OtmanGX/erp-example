import { TransformedQuotation, Transfert } from '../models/quotation';
import { Sales_Product_Type_Enum } from '../../index';

export function transfertQuotationAdapter(
  data: TransformedQuotation
): Transfert {
  console.log('adapter...');
  let { quotation, ...order } = data;
  let glassesQuotaion = data.quotation.products.filter(
    (product) => product.glass_draft?.id
  );
  let servicesQuotation = data.quotation.products.filter(
    (product) =>
      product.dependent_id && product.type == Sales_Product_Type_Enum.Service
  );
  let consumablesQuotation = data.quotation.products.filter(
    (product) =>
      product.dependent_id &&
      product.type == Sales_Product_Type_Enum.Consommable
  );
  let glasses = glassesQuotaion.map((glass) => {
    let { id, consumable_draft, service_draft, glass_draft, ...data } = glass;
    let services = servicesQuotation.filter(
      (service) => service.dependent_id == glass_draft.id
    );
    let consumablesAsService = consumablesQuotation.filter(
      (consu) => consu.dependent_id == glass_draft.id
    );
    return {
      product_draft: {
        data: {
          ...data,
          type: data.type as Sales_Product_Type_Enum,
          draft_id: order.copierDraft_id,
        },
      },
      service_drafts: {
        data: services.map((data) => {
          const {
            id,
            service_draft,
            glass_draft,
            consumable_draft,
            dependent_id,
            ...service
          } = data;
          return {
            labelFactory: service_draft.labelFactory,
            product_draft: {
              data: {
                ...service,
                type: data.type as Sales_Product_Type_Enum,
                draft_id: order.copierDraft_id,
              },
            },
          };
        }),
      },
      consumable_drafts: {
        data: consumablesAsService.map((data) => {
          const {
            id,
            service_draft,
            glass_draft,
            consumable_draft,
            dependent_id,
            ...consumable
          } = data;
          return {
            labelFactory: consumable_draft.labelFactory,
            product_draft: {
              data: {
                ...consumable,
                type: data.type as Sales_Product_Type_Enum,
                draft_id: order.copierDraft_id,
              },
            },
          };
        }),
      },
    };
  });

  let consumablesDB = data.quotation.products.filter(
    (product) =>
      product.type == Sales_Product_Type_Enum.Consommable &&
      !product.dependent_id
  );
  let consumables = consumablesDB.map((data) => {
    const {
      id,
      service_draft,
      glass_draft,
      consumable_draft,
      dependent_id,
      ...consumable
    } = data;
    return {
      product_draft: {
        data: {
          ...consumable,
          draft_id: order.copierDraft_id,
          type: data.type as Sales_Product_Type_Enum,
        },
      },
    };
  });
  let accessoriesDB = data.quotation.products.filter(
    (product) => product.type == Sales_Product_Type_Enum.Accessoire
  );
  let accessories = accessoriesDB.map((data) => {
    const {
      id,
      service_draft,
      glass_draft,
      consumable_draft,
      dependent_id,
      ...accessory
    } = data;
    return {
      product_draft: {
        data: {
          ...accessory,
          draft_id: order.copierDraft_id,
          type: data.type as Sales_Product_Type_Enum,
        },
      },
    };
  });

  return {
    ...order,
    draft_id: quotation.draft_id,
    glasses,
    accessories,
    consumables,
  };
}

// {"glasses": [
//   {"product_draft": {"data": {"product_code": "CV8","label": "Verre claire 8mm","draft_id": 316}},
//    "service_drafts": {
//      "data":
//        [
//          {"labelFactory": "CP",
//          "product_draft":{"data": {"label": "cccc","product_code": "cccc","draft_id": 316}}},
//          {"labelFactory": "CP","product_draft": {"data": {"label": "etert","product_code": "ertetert","draft_id": 316}}}
//        ]
//      }
//   },
//     {"product_draft": {"data": {"product_code": "VC10","label": "VERRE CLAIR 10 MM","draft_id": 316}},
//    "service_drafts": {"data":
//        [
//          {"labelFactory": "CP","product_draft":{"data": {"label": "cccc","product_code": "cccc","draft_id": 316}}},
//          {"labelFactory": "CP","product_draft": {"data": {"label": "etert","product_code": "ertetert","draft_id": 316}}}
//        ]
//      }
//    }
//  ]
// }

// let {
//   __typename,
//   ...product
// } = data.data.insert_sales_glass_draft_one.product_draft;

// glass:{
//   heigth: ,
//   label: String,
//   m2: numeric,
//   ml: numeric,
//   price: numeric,
//   product_code: String,
//   quantity: numeric,
//   total_price: numeric,
//   type: sales_product_type_enum,
//   unit: String,
//   width: numeric,
//   draft_id: Int,
//   count: numeric,
//   warehouse_id: uuid,
//   company_id: uuid,
//   company_name: String,
//   substance_id: uuid,
//   isRepeated: Boolean = false
// };

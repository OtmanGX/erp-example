import { Injectable } from '@angular/core';
import { PdfMakeWrapper, Table, Txt, Line, Columns  } from 'pdfmake-wrapper';
import { OrderPrint } from '../models/order-printing';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { InsertedDeliveryForm, Order } from '@tanglass-erp/core/sales';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

//
// String resources
//
const CITY = 'Tanger'
const DELIVERY_LINE = 'Bon de livraison';
const PAYMENT_METHOD = 'Mode de paiement';
const COMMAND = 'Commande';
const CODE_CLIENT = 'Code client';


@Injectable({
  providedIn: 'root',
})
export class InvoiceGeneratorService {
  constructor() {}

  generateDeliveryLinePDF(delivery: InsertedDeliveryForm) {
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    // Company name and adress
    pdf.add(new Txt(delivery.company.name).fontSize(30).bold().alignment('right').end);
    pdf.add(new Txt(CITY).alignment('right').end);

    // Delivery Line Ref + verticale line
    pdf.add(new Txt(`${DELIVERY_LINE}: ${delivery.ref}`).fontSize(20).bold().end);
    pdf.add({
      table : {
        headerRows : 1,
        widths: ['*'],
        body : [
          [''],
          ['']
        ]
      },
      layout : 'headerLineOnly'
    });

    // date ,customer and command
    pdf.add(new Columns([
      new Columns([
        new Txt(`Date\n${PAYMENT_METHOD}\n${COMMAND}`).width(120).end,
        new Txt(`:  ${delivery.createdAt.toLocaleString()}\n :  ${delivery.payment_method}\n :  ${delivery.order.ref}`)
          .alignment('left').width(100).end,
      ]).width('30%').end,
      new Txt(`${CODE_CLIENT}: `+ delivery.client_id).alignment('right').end
    ]).end)


    pdf.add(
      new Table(
        this.extractSecondData(
          delivery.delivery_lines.map((e) => ({
            item_designation: e.product_label,
            quantity: e.delivered,
            unit_price: e.unit_price,
            total_price: e.amount,
          }))
        )
      )
        .widths(['45%', '15%', '20%', '20%'])
        .margin([0, 20]).end
    );

    pdf.add([
      {
        columns: [
          { width: '*', text: '' },
          {
            width: 'auto',
            table: {
              widths: [110, 110],
              body: [
                [
                  { text: "Total HT", style: "tableHeader" },
                  { text: delivery.amount_ht}
                ],
                [
                  { text: "TVA", style: "tableHeader" },
                  { text: delivery.amount_tva, }
                ],
                [
                  { text: "Total TTC", style: "tableHeader" },
                  { text: delivery.amount_ttc, }
                ],
              ],
              alignment: "right"
            }
          },
          // { width: '*', text: '' },
        ], absolutePosition: { y: 700}
      }
      ])
    pdf.create().open();
  }


  generateOrderPDF(order: Order) {
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    pdf.add(new Txt(order.customer.name).fontSize(20).bold().end);
    pdf.add(new Txt('Tél : ' + order.customer.phone + '\n\n').margin([0, 8]).end);


    pdf.add(new Columns([
      new Columns([
        new Txt(`COMMANDE N°\nN° de série`).width(120).end,
        new Txt(`:  ${order.ref}`)
          .alignment('left').width(100).end,
      ]).width('30%').end,
      new Txt(`Date: ${order.date.toLocaleString()}`).bold().alignment('right').end
    ]).end)


    pdf.add(
      new Table(
        this.extractSecondData(
          order.products.map((e) => ({
            item_designation: e.label,
            quantity: e.quantity,
            unit_price: e.price,
            total_price: e.total_price,
          }))
        )
      )
        .widths(['45%', '15%', '20%', '20%'])
        .margin([0, 20]).end
    );

    pdf.add([
      {
        columns: [
          { width: '*', text: '' },
          {
            width: 'auto',
            table: {
              widths: [110, 110],
              body: [
                [
                  { text: "Total HT", style: "tableHeader" },
                  { text: order.total_ht}
                ],
                [
                  { text: "TVA", style: "tableHeader" },
                  { text: order.total_tax, }
                ],
                [
                  { text: "Total TTC", style: "tableHeader" },
                  { text: order.total_ttc, }
                ],
              ],
              alignment: "right"
            }
          },
          // { width: '*', text: '' },
        ], absolutePosition: { y: 700}
      }
      ])
    pdf.create().open();
  }

  extratData(order) {
    return [
      ['Code', 'Qte', 'Largeur', 'Hauteur', 'M2', 'ML'],
      ...order.processedMaterial.map((row) => [
        row.code,
        row.NumberOf_pieces,
        row.width,
        row.height,
        row.m2,
        row.ml,
      ]),
    ];
  }
  extractSecondData(salesData) {
    return [
      ['Désignation', 'Qté M2/ML', 'PU', 'Montant H.T'],
      ...salesData.map((row) => [
        row.item_designation,
        row.quantity,
        row.unit_price,
        row.total_price,
      ]),
    ];
  }
}

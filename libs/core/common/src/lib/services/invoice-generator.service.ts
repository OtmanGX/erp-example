import { Injectable } from '@angular/core';
import { PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { OrderPrint } from '../models/order-printing';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Order } from '@tanglass-erp/core/sales';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class InvoiceGeneratorService {
  constructor() {}

  generateOrderPDF(order: Order) {
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    pdf.add(new Txt(order.customer.name).bold().end);
    pdf.add(new Txt('Tél : ' + order.customer.phone).margin([0, 8]).end);
    pdf.add(
      new Txt('Date : ' + order.date.toLocaleString()).bold().alignment('right')
        .end
    );

    pdf.add(new Txt('COMMANDE N° : ' + order.ref).bold().end);
    pdf.add(new Txt('N° de série : ').bold().end);

    // pdf.add(
    //   new Table(this.extratData(order))
    //     .widths(['25%', '15%', '15%', '15%', '15%', '15%'])
    //     .layout({})
    //     .margin([0, 8]).end
    // );
    // second table for All the sales amounts

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

import { Injectable } from '@angular/core';
import { PdfMakeWrapper, Table, Txt, Columns } from 'pdfmake-wrapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {
  InsertedDeliveryForm,
  Order,
  Product_draft,
  UpdatedInvoice,
} from '@tanglass-erp/core/sales';
import { ProductToPrint } from '../models/print';
import { JobOrder, JobItem } from '@tanglass-erp/core/manufacturing';

import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

//
// String resources
//
const CITY = 'Tanger';
const DELIVERY_LINE = 'Bon de livraison';
const INVOICE = 'Facture';
const PAYMENT_METHOD = 'Mode de paiement';
const COMMAND = 'Commande';
const CODE_CLIENT = 'Code client';

const JOB_ORDER = "ORDRE D'EMPLOI (Job Order)";
const JO_TABLE_HEADER = 'Description/Dimension';

@Injectable({
  providedIn: 'root',
})
export class InvoiceGeneratorService {
  constructor() {}

  generateJobOrder(jobOrder: JobOrder, jobItems: JobItem[]) {
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    pdf.pageOrientation('landscape');
    pdf.styles({
      header: {
        bold: true,
        alignment: 'center',
      },
    });

    pdf.add(
      new Txt(JOB_ORDER)
        .fontSize(20)
        .bold()
        .decoration('underline')
        .alignment('right').end
    );

    pdf.add(
      new Columns([
        new Columns([
          new Txt([
            new Txt('N° B.T: ' + jobOrder.ref).bold().end,
            new Txt(
              '\n' + format(new Date(jobOrder.date), 'MM/dd/yyyy HH:mm:ss', {
                locale: fr,
              })
            ).end,
          ])
            .width(150)
            .alignment('left').end,
        ]).width('50%').end,
        new Txt('N° B.C: ' + jobOrder.order_ref).alignment('center').bold().end,
      ]).margin([0, 20]).end
    );

    const jobItemsMap = jobItems.reduce((acc, curr) => {
      if (acc.has(curr.item)) {
        acc.get(curr.item).dimensions.push(curr.dimensions);
        acc.get(curr.item).counts.push(curr.count);
      } else
        acc.set(curr.item, {...curr, dimensions: [curr.dimensions], counts: [curr.count]})

      return acc;
    },new Map<string, any>())

    const jobItemsAdapted = [...jobItemsMap.values()].map((e) => [
      [e.item],
      e.counts.map((count, index) => [e.dimensions[index] + ' ------------------> ' + count])
      // [e.dimensions + ' ------------------> ' + e.count],
    ]);
    if (jobItemsAdapted.length) {
      jobItemsAdapted
        .slice(1)
        .forEach((value) => jobItemsAdapted[0].push(...value));
    }

    pdf.add({
      table: {
        headerRows: 1,
        widths: ['*'],
        body: [
          [{ text: JO_TABLE_HEADER, style: 'header' }],
          [jobItemsAdapted[0]],
        ],
      },
    });

    pdf.create().open();
  }

  generateInvoicePDF(invoice: UpdatedInvoice) {
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    pdf.styles({
      header: {
        bold: true,
      },
    });
    // Company name and adress
    pdf.add(
      new Txt(invoice.company.name).fontSize(30).bold().alignment('right').end
    );
    pdf.add(new Txt(CITY).alignment('right').end);

    // Delivery Line Ref + verticale line
    pdf.add(new Txt(`${INVOICE}: ${invoice.ref}`).fontSize(20).bold().end);
    pdf.add({
      table: {
        headerRows: 1,
        widths: ['*'],
        body: [[''], ['']],
      },
      layout: 'headerLineOnly',
    });

    // date ,customer and deliveries
    const deliveries = invoice.deliveries
      .map((e) => e.delivery.ref)
      .join(', ');
    pdf.add(
      new Columns([
        new Columns([
          new Txt(`Date\n${PAYMENT_METHOD}\n${DELIVERY_LINE}`).width(120).end,
          new Txt(
            `:  ${invoice.date.toLocaleString()}\n :  ${
              invoice.payment_method
            }\n :  ${deliveries}`
          )
            .alignment('left')
            .width(100).end,
        ]).width('30%').end,
        new Txt(`${CODE_CLIENT}: ` + invoice.client?.code ?? '').alignment(
          'right'
        ).end,
      ]).margin([0, 20]).end
    );

    pdf.add(
      new Table(
        this.addAll(
          invoice.invoice_lines.map((e) => ({
            label: e.product_label,
            quantity: e.quantity,
            price: e.unit_price,
            total_price: e.total,
            type: e.product_type,
            product_code: e.product_code,
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
                  { text: 'Total HT', style: 'header' },
                  { text: invoice.amount_ht },
                ],
                [
                  { text: 'TVA', style: 'header' },
                  { text: invoice.amount_tva },
                ],
                [
                  { text: 'Total TTC', style: 'header' },
                  { text: invoice.amount_ttc },
                ],
              ],
              alignment: 'right',
            },
          },
          // { width: '*', text: '' },
        ],
        absolutePosition: { y: 700 },
      },
    ]);
    pdf.create().open();
  }

  generateDeliveryLinePDF(delivery: InsertedDeliveryForm) {
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    pdf.styles({
      header: {
        bold: true,
      },
    });
    // Company name and adress
    pdf.add(
      new Txt(delivery.client.name).fontSize(30).bold().alignment('right').end
    );
    pdf.add(new Txt(CITY).alignment('right').end);

    // Delivery Line Ref + verticale line
    pdf.add(
      new Txt(`${DELIVERY_LINE}: ${delivery.ref}`).fontSize(20).bold().end
    );
    pdf.add({
      table: {
        headerRows: 1,
        widths: ['*'],
        body: [[''], ['']],
      },
      layout: 'headerLineOnly',
    });

    // date ,customer and command
    pdf.add(
      new Columns([
        new Columns([
          new Txt(`Date\n${PAYMENT_METHOD}\n${COMMAND}`).width(120).end,
          new Txt(
            `:  ${delivery.createdAt.toLocaleString()}\n :  ${
              delivery.payment_method
            }\n :  ${delivery.order.ref}`
          )
            .alignment('left')
            .width(100).end,
        ]).width('30%').end,
        new Txt(`${CODE_CLIENT}: ` + delivery.client.code ?? '').alignment(
          'right'
        ).end,
      ]).margin([0, 20]).end
    );

    pdf.add(
      new Table(
        this.addAll(
          delivery.delivery_lines.map((e) => ({
            label: e.product.label,
            quantity: e.delivered,
            price: e.product.price || 0,
            total_price: e.amount,
            type: e.product.type,
            product_code: e.product.product_code,
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
                  { text: 'Total HT', style: 'header' },
                  { text: delivery.amount_ht },
                ],
                [
                  { text: 'TVA', style: 'header' },
                  { text: delivery.amount_tva },
                ],
                [
                  { text: 'Total TTC', style: 'header' },
                  { text: delivery.amount_ttc },
                ],
              ],
              alignment: 'right',
            },
          },
          // { width: '*', text: '' },
        ],
        absolutePosition: { y: 700 },
      },
    ]);
    pdf.create().open();
  }

  generateOrderPDF(order: Order, isQuotation = false) {
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    pdf.styles({
      header: {
        bold: true,
      },
    });
    pdf.add(new Txt(order.customer.name).fontSize(20).bold().end);
    pdf.add(
      new Txt('Tél : ' + order.customer.phone + '\n\n').margin([0, 8]).end
    );

    pdf.add(
      new Columns([
        new Columns([
          new Txt(
            `${isQuotation ? 'Devis' : 'COMMANDE'} N°\nN° de série`
          ).width(120).end,
          new Txt(`:  ${order.ref}`).alignment('left').width(100).end,
        ]).width('30%').end,
        new Txt(`Date: ${order.date.toLocaleString()}`)
          .bold()
          .alignment('right').end,
      ]).end
    );

    pdf.add(
      new Table(this.addGlasses(order.products))
        .widths(['25%', '15%', '15%', '15%', '15%', '15%'])
        .margin([0, 20]).end
    );

    pdf.add(
      new Table(
        this.addAll(
          order.products.map(
            (e) =>
              <ProductToPrint>{
                ...e,
                quantity: e.count ?? e.quantity,
              }
          )
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
                  { text: 'Total HT', style: 'header' },
                  { text: order.total_ht },
                ],
                [{ text: 'TVA', style: 'header' }, { text: order.total_tax }],
                [
                  { text: 'Total TTC', style: 'header' },
                  { text: order.total_ttc },
                ],
              ],
              alignment: 'right',
            },
          },
          // { width: '*', text: '' },
        ],
        absolutePosition: { y: 700 },
      },
    ]);
    pdf.create().open();
  }

  addGlasses(products: Product_draft[]) {
    const table = [
      ['Code', 'Qte', 'Largeur', 'Hauteur', 'M2', 'ML'].map((e) => ({
        text: e,
        style: 'header',
      })),
    ];
    // Filter only Glasses and client articles
    products = products.filter((e) =>
      ['Verre', 'Article_Client'].includes(e.type)
    );
    const map = new Map<string, Array<any>>();
    products.forEach((item) => {
      const row = [
        item.product_code,
        item.count ?? item.quantity,
        item.width,
        item.heigth,
        item.m2,
        item.ml,
      ];
      if (!map.has(item.product_code)) map.set(item.product_code, [row]);
      else map.get(item.product_code).push(row);
    });

    map.forEach((value, key) => {
      table.push(...value);
      table.push([
        '',
        '',
        '',
        '',
        value.reduce((pre, curr) => pre + curr[4], 0),
        value.reduce((pre, curr) => pre + curr[5], 0),
      ]);
    });

    return table;
  }

  addAll(products: ProductToPrint[]) {
    // Adapt
    products.forEach((value) => {
      value.price *= 5 / 6;
      value.total_price = value.price * value.quantity;
      value.price = parseFloat(value.price.toFixed(2));
      value.total_price = parseFloat(value.total_price.toFixed(2));
    });

    // Header
    const table: any[] = [
      ['Désignation', 'Qté M2/ML', 'PU', 'Montant H.T'].map((e) => ({
        text: e,
        style: 'header',
      })),
    ];
    const accessories = ['ACCESSOIRES', 0, '', 0]; // Initialize accessories

    // Group By glass
    const map = new Map<string, Array<any>>();

    products
      .filter((e) => ['Verre', 'Accessoire', ''].includes(e.type))
      .forEach((item) => {
        if (item.type === 'Accessoire') {
          // Accessory type
          (accessories[1] as number) += item.quantity;
          (accessories[2] as number) += item.price;
          (accessories[3] as number) += item.total_price;
          return;
        }
        const row = [item.label, item.quantity, item.price, item.total_price];
        if (map.has(item.product_code)) {
          map.get(item.product_code)[1] += row[1];
          map.get(item.product_code)[3] += row[3];
        } else map.set(item.product_code, row);
      });

    // Services
    const services = [];
    products
      .filter((e) => ['Service', 'Consommable'].includes(e.type))
      .forEach((item) => {
        if (item.label.toLowerCase().includes('pose')) {
          accessories[0] += 'ET POSE';
          (accessories[1] as number) += item.quantity;
          (accessories[2] as number) += item.price;
          (accessories[3] as number) += item.total_price;
        } else {
          const row = [item.label, item.quantity, item.price, item.total_price];
          if (map.has(item.product_code)) {
            map.get(item.product_code)[1] += row[1];
            map.get(item.product_code)[3] += row[3];
          } else map.set(item.product_code, row);
          // services.push([
          //   item.label,
          //   item.quantity,
          //   item.price,
          //   item.total_price,
          // ]);
        }
      });

    // Merge all on the table
    table.push(...Array.from(map.values()));
    if (accessories[3] !== 0) table.push(accessories);
    // table.push(...services);

    return table;
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

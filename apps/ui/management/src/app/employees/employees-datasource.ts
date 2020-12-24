import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { User } from '@TanglassCore/models/management/users';

const EXAMPLE_DATA: User[] = [
  {
    CIN: 'L596335',
    FirstName: 'Otmane',
    LastName: 'GX',
    address: 'Gx Street',
    civilité: 'Marocain',
    companies: [],
    departement: '',
    email: 'otmangx@gmail.com',
    id: 1,
    phone: '+212666666',
    role: '',
    salepoints: [],
  },
  {
    CIN: 'L596335',
    FirstName: 'Otmane',
    LastName: 'DX',
    address: 'Dx Street',
    civilité: 'Marocain',
    companies: [],
    departement: '',
    email: 'otmandx@gmail.com',
    id: 2,
    phone: '+212666666',
    role: '',
    salepoints: [],
  },
  {
    CIN: 'L596335',
    FirstName: 'Otmane',
    LastName: 'FX',
    address: 'Fx Street',
    civilité: 'Marocain',
    companies: [],
    departement: '',
    email: 'otmanfx@gmail.com',
    id: 3,
    phone: '+212666666',
    role: '',
    salepoints: [],
  },
];

/**
 * Data source for the Employees view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmployeesDataSource extends DataSource<User> {
  data: User[] = EXAMPLE_DATA;
  // data: User[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<User[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: User[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: User[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.FirstName, b.FirstName, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

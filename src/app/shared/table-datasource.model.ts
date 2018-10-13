import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';

export class TableDataSource<T> extends DataSource<T> {
  private dataSubject = new BehaviorSubject<T[]>([]);

  data() {
    return this.dataSubject.value;
  }

  update(data) {
    this.dataSubject.next(data);
  }

  constructor(data: T[]) {
    super();
    this.dataSubject.next(data);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<T[]> {
    return this.dataSubject;
  }

  disconnect() {}
}

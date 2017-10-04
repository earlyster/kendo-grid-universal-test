import {
  Component
} from '@angular/core';
import {
  GridDataResult,
  PageChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'home',
  template: `
    <kendo-grid
        [data]="gridView"
        [skip]="skip"
        [pageSize]="pageSize"
        [scrollable]="'virtual'"
        [rowHeight]="35"
        [height]="450"
        (pageChange)="pageChange($event)"
      >
      <kendo-grid-column field="id" [width]="80" title="ID"></kendo-grid-column>
      <kendo-grid-column field="firstName" title="First Name" [width]="130"></kendo-grid-column>
      <kendo-grid-column field="lastName" title="Last Name" [width]="130"></kendo-grid-column>
      <kendo-grid-column field="city" title="City" [width]="130"></kendo-grid-column>
      <kendo-grid-column field="title" title="Title" [width]="180"></kendo-grid-column>
    </kendo-grid>
`
})
export class HomeComponent {
  public gridView: GridDataResult;
  public data: any[];
  public pageSize: number = 100;
  public skip: number = 0;

  constructor() {
      this.data = this.createRandomData(100000);
      this.loadProducts();
  }

  pageChange(event: PageChangeEvent): void {
      this.skip = event.skip;
      this.loadProducts();
  }

  private loadProducts(): void {
      this.gridView = {
          data: this.data.slice(this.skip, this.skip + this.pageSize),
          total: this.data.length
      };
  }

  /* Generating example data */
  private createRandomData(count: number) {
      const firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne", "Nige"],
          lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth", "White"],
          cities = ["Seattle", "Tacoma", "Kirkland", "Redmond", "London", "Philadelphia", "New York", "Seattle", "London", "Boston"],
          titles = ["Accountant", "Vice President, Sales", "Sales Representative", "Technical Support", "Sales Manager", "Web Designer",
              "Software Developer"];

      return Array(count).fill({}).map((_, idx) => ({
          id: idx + 1,
          firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
          lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
          city: cities[Math.floor(Math.random() * cities.length)],
          title: titles[Math.floor(Math.random() * titles.length)]
      })
      );
  }
}

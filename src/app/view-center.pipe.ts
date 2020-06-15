import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewCenter'
})
export class ViewCenterPipe implements PipeTransform {

  transform(centers: center[], search: string) {
    if (search && centers.length > 0) {
      // debugger;
      let filteredCenters = centers.filter(center => {
        if (center && search && center.centerName !== null && center.centerName.toLowerCase().includes(search.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      return filteredCenters;
    } else {
      return centers;
    }
  }

}

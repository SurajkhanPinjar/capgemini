import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewTest'
})
export class ViewTestPipe implements PipeTransform {

  transform(tests: Test[], search: string) {
    if (search && tests.length > 0) {
      // debugger;
      let filteredTests = tests.filter(test => {
        if (test && search && test.testName !== null && test.testName.toLowerCase().includes(search.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      return filteredTests;
    } else {
      return tests;
    }
  }

}

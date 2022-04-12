import { Contract, Name, print, Table, TableStore } from 'proton-tsc'
import { test } from './test.table'

@contract
export class tabletest extends Contract {

  private testable:TableStore<test> = test.GetTable(this.receiver);

  @action("action1")
  action1(owner:Name,value:u32): void {
    
    print(owner.toString());
    let testRow = this.testable.get(owner.N);
    if (!testRow){

      //testRow = new test(owner,value);
      //this.testable.set(testRow,this.receiver);

    }

  }
}

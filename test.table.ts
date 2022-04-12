import { Name, Table, TableStore } from "proton-tsc";

@table('test')
export class testable extends Table {

    constructor (
        public owner:Name,
        public someVal:u32
        ){
        super();
    }

    @primary
    get primary():u64{

        return this.owner.N;

    }

    static GetTable (code:Name):TableStore<test>{

        return new TableStore<test>(code,code,Name.fromString('test'))

    }

}

export class test extends testable {}
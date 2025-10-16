
class Field {
    constructor(
        public params: { type: string; name?: string; options?: Array<Record<string, string>> }
    ) {
        this.params = params;
    }
}

export class Fields {
    // Integer/Int/Number
    static Integer(params: { type: string; name: string }) {
        return new Field({ type: "integer", name: params.name });
    }

    // Float/Decimal
    static Float(params: { type: string; name: string }) {
        return new Field({ type: "float", name: params.name });
    }

    // Select/Selection/Choice/Options
    static Selection(params: { type: string; name: string; options: Array<Record<string, string>> }) {
        return new Field({ type: "selection", name: params.name, options: params.options });
    }

    static ManyToOne(params: { type: string }) {
        return new Field({ type: "ManyToOne" });
    }
}

// for nova domain operators to SQL operators conversion/mapping/map
const DOMAIN_OPERATOR_TO_SQL_OPERATOR_MAP: Record<string, string> = {
    "=": " = ",
    "!=": " != ",
    "<": " < ",
    ">": " > ",
    "<=": " <= ",
    ">=": " >= ",
    "like": " LIKE ",
    "ilike": " ILIKE ",
    // "=like": " LIKE ",
    // "=ilike": " ILIKE ",
    "not like": " NOT LIKE ",
    "not ilike": " NOT ILIKE ",
    // "not =like": " NOT LIKE ",
    // "not =ilike": " NOT ILIKE ",
    "in": " IN ",
    "not in": " NOT IN ",
    // "has": " @> ",
    // "not has": " NOT @> ",
    // "child_of": " << ",
    // "parent_of": " >> ",
} satisfies Record<string, string>;

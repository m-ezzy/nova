
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

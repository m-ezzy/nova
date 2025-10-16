
class Model {
    constructor() {}

    // find/search/select
    search() {
    }

    createField(params: { type: string; name: string; options?: Array<Record<string, string>> }) {
        return new Field(params);
    }
}

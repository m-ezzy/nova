/* The contents of this file are subject to Umbrella licence. Read the licene.md file */

import { Model, Field } from "nova"

class Institution extends Model {
    _name = "institution.institution"

    name = Field.Integer(type="integer", name="Name");
    type = Field.Select(type="selection", name="Type", options=[
        {school: "School"},
        {college: "College"},
        {university: "University"},
    ])

    department_id = Field.ManyToOne(type="ManyToOne")
}

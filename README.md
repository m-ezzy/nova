# what technologies to use?
python
javascript
    Node.js
    Deno
    Bun
typeScript
java
.NET (c#)
Ruby
Rust
Go

start the git repo again with minial first commit on main or dev branch "louis, this is the beginning of a beautiful project/framework!"
dev branch will have all the code right now, merged in main if it is stable and final and correct/efficient/best way.

rename nova to umbrella and umbrella-nextjs to nova

all one needs for building an framework/MIS system like odoo or django is an entity-relationship diagram data. everything - UI, models, logic will be created and displayed based on that data.

**One graph to rule them all!**
One web service to rule them all!

#
nova is the framework like odoo. umbrella will be the MIS system built on top of it.

build all core features of odoo but better. understand how each component works for a full fledged framework. ORM, frontend JS framrework, API docs builder, RPC, everything that any framework has. build it all in ***nova***!

# features
models
fields
relationships
records
UI
views
forms
lists
chatter
activity
reminders
notifications
messaging
logging
themes
JSON RPC
REST API
deployment
hosting
users
user groups
security groups
access control
settings/preferences
reports
tests
user documentation
developer documentation
automatic API documentation



# searching/filtering write the whole domain logic for it just like in odoo

# sorting
based on each field's value
- ascending/descending order - based on any of it's field's value
- custom (using sequence just like in odoo)

# grouping feature with SQL group by and having clauses

#
the purpose of nova/umbrella is to build a web service where users can create their own applications, like odoo studio, all the common features of an MIS system built-in. all the user has to do is visually create the entities and their relationships, and the system will generate the UI, models, logic, and everything else needed to run the application. deploying, hosting, loggging, messaging, chatter, email, sms, notifications, lists and forms, reports, settings, users, groups, access control, UI, themes, everything done automatically.

are you talking about a no-code platform? yes, but not just that. it's a framework for building any kind of web application, like odoo, django, or any other web framework. it will have all the common features of an MIS system built-in.

# common code, different implementations
like crm.lead is used in multiple ways. like res.groups is used in multiple ways. like res.partner is used in multiple ways.\
they have same code/model but different ways to use it.

tags/lists - a shopping list in amazon or gmail tags on our emails or liking an instagram post
privacy of those tags/lists

user groups - access control, settings/preferences, etc.

# common fields on all models
id
external_id / data_id
created_by_user_id
created_on_date
last_modified_by_user_id
last_modified_on_date
name
archived
sequence
states
current_state
.
.
.

# Data Provenance
each record will have it's entire have history saved. i don't know how, but each change in a field's value can be tracked and saved.

model: data_provenance
fields: model_id, record_id, field_name, change_type, old_value, new_value, changed_by_user_id, changed_on_date

change_type: create, update, delete
if there is no field_name then model is created or deleted.

#
you'll need certain apps to test the framework as you are building it. how about...........a project management system?

#
i believe the UI should be very rigid, formatted and bare minimum to display the entities and their relationships. just see the records. not like how google or microsoft or any other app does with so many flashy option and UI complexity. Less is more!

# views
for kanban view you just need to create a UI component KanbanView and pass record data in props and let the user put nay type of jsx in there

# make a new github/gitlab account called `nova` or `supernova` to publish all this repos and so CI/CD

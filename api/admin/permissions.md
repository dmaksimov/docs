# Permissions

The Directus permissions system is quite granular so it is important to understand the available options. Below are the actual values that can be saved into `directus_permissions`. If you're looking for more information on how the permissions work you can [learn more on our App's permissions page](../../app/admin/permissions.md).

## Create

* `none` (or `NULL`, default) Can not create any items
* `full` Can create items

## Read

* `none` (or `NULL`, default) Can not view any items
* `mine` Can only view _their_ items
* `role` Can only view items created by members of this role
* `full` Can view all items

## Update

* `none` (or `NULL`, default) Can not update any items
* `mine` Can only update _their_ items
* `role` Can only update items created by members of this role
* `full` Can update all items

## Delete

* `none` (or `NULL`, default) Can not delete any items
* `mine` Can only delete _their_ items
* `role` Can only delete items created by members of this role
* `full` Can delete all items

## Comment

* `none` Can not comment
* `read` Can only see comments
* `create` Can add comments
* `update` (or `NULL`, default) Can add, edit and delete their comments
* `full` Can add, edit and delete any comments (including other users)

## Explain (Force)

* `none` (or `NULL`, default) Never requires "commit" comment
* `create` Requires a "commit" comment on Create
* `update` Requires a "commit" comment on Update
* `always` Requires a "commit" comment on Create and Update

:::tip NOTE
The `mine` and `role` permission options are only available when the parent collection contains the `created_by` interface field.
:::
# Concepts

## Directus

The Directus [duh REKT iss](/img/directus.mp3) name is latin, meaning _laid straight, arranged in lines, having been arranged in lines_. The broadest goal of Directus is to present data in a simple, orderly, and intuitive way.

## Glossary

Definitions and other various terms that are exclusive to the Directus Ecosystem.

### Alias

A field that does not actually map to a database column (eg: a divider or the one side of a relationship).

### Boilerplate

The base schema and system content included in a fresh/blank copy of Directus.

### Client

An external application using Database managed data.

### Collection

A set of items, saved as a SQL table

### Collection Preset

Also known as a "bookmark", this is a specific view of a collection assigned to an individual user, a role, or global. It includes:

* Search query
* Filters
* View Type
* Sort Field and Direction
* Layout Query (eg: visible fields)
* Layout Options (eg: tabular column widths)

### Datatype

The SQL vendor-specific database storage type (eg: `VARCHAR`, `BIGINT`, etc)

### Display Template

A Mustache-style string used to format field values. For example:

```
{{first_name}} {{last_name}}, {{title}}
```

### Environment (env)

A flag set in the project config: either `production` or `staging` (not to be confused with deployment environments).

### Extension

Anything that extends the core codebase, including: Interfaces, Pages, Storage Adapters, SSO Services, etc.

### Field

A single piece of information contained in an item. Saved as a SQL column or alias.

### Field Type

An extended and agnostic storage type mapped to SQL vendor datatypes (eg: `string`, `number`, etc). Also includes non-DB style types that provide extra functionality into the system (eg `m2o`, `translation`, etc).

### Headless CMS

Directus _only manages content_. Unlike traditional CMS, it doesn't come with a website editor, template designs, or "presentation layer" built-in.

### Instance

An API install managing one or more projects on a server.

### Interface

The GUI for a field (the actual thing that the user interacts with to create and edit the data for the field).

### Item

A single record of data. Contains values for the fields. Saved as a SQL row.

### Length

The amount/size of data that can be stored in a single field.

### Layout

The GUI for a collection's items. Displays the items in the user-set way.

### Multitenancy

The Directus suite of software has been designed for projects both simple and complex, both small and enormous. To accomodate this, you can install the App and API individually or use the bundled version which combines both. This decoupled approach allows for a single App to manage any number of APIs, even if they are located on different servers. Additionally, each API supports multiple databases, so you only need to install a single instance for all your projects and deployment environments.

![Suite Overview](/img/overview.png)

::: tip
Feel free to use our always-up-to-date hosted App to connect to any publicly accessible Directus API instance: [https://directus.app](https://directus.app/).
:::

### Note

Descriptive text displayed with a field.

### Project

A database, config, and file storage directory. Also used for deployment environments (eg: `prod`, `stage`, `dev`).

The following project names are reserved by Directus Core and can not be used. Each represents a root-level API endpoint that exists now or may exist in the future.

- `server`
- `projects`
- `interfaces`
- `pages`
- `layouts`
- `types`

### Schema

The SQL database's architecture, not including any content.

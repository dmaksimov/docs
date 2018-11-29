# Installation

> The easiest way to get up-and-running is with the [Directus Suite](https://github.com/directus/directus), which includes the [Directus API](https://github.com/directus/api), the [Directus App](https://github.com/directus/app), and all dependencies.

## Requirements

Learn more about these system requirements, neccesary permissions, and other server-specific prerequisites on our [dedicated requirements page](/api/admin/requirements.md).

* HTTP/Web Server such as Apache, nginx or Caddy
* MySQL 5.2+
    * Database (empty or existing)
    * Database User (with access to database)
* PHP 7.1+
    * Extensions:  `pdo`, `mysql`, `curl`, `gd`, `fileinfo`, and `mbstring`

## Setup

Running the following `git` command from your server's command line is the preferred method of installing the codebase.

```bash
git clone https://github.com/directus/directus.git
```

::: tip Other Install Methods
Alternatively, you can also choose from one of these other installation methods.
* Docker
* Zip, Tar, or FTP
* Standalone
* Source
:::

## Configure

1. Set your document root to the `/public` directory
2. Navigate your browser to the App at `/admin`
3. Follow the prompts to complete configuration (see steps below)

Field          | Description
:------------- | :-----------
Project Name   | The name of your project
Project Key    | For now, only the `_` default is available through the installer
Admin Email    | The email address of your first administrator
Admin Password | The password for your first administrator
Host           | The server/host of your database
Port           | The port for the database (default is 3306)
Database User  | The database user
Database Password | The database user's password
Database Name  | The name of the database
Database Type  | As of now, Directus only supports MySQL

:::tip Manual Config
If you would rather setup your project manually you can [follow these instructions](./api/admin/configure.md). This method creates the default config file (`/config/api.php`) from our sample (`/config/api_sample.php`) and installs the boilerplate database using the included schema file (`/src/schema.sql`).
:::

## Logging In

Once you've finished with the installer, you will automatically be taken to the login page of the Directus App (again, at `/admin`). You can then login with the credentials you provided during the configuration process, or the default credentials if configured manually: `admin@example.com` and `password`

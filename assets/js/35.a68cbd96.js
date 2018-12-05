(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{275:function(t,s,a){"use strict";a.r(s);var e={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=a(6),r=Object(n.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"core-codebase-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-codebase-overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Core Codebase Overview")]),t._v(" "),a("p",[t._v("The Directus API core codebase is written in PHP.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/bin")]),t._v(" – All Directus-specific script files used on the command line (eg: running tests or installing)")]),t._v(" "),a("li",[a("code",[t._v("/config")]),t._v(" – Database configuration")]),t._v(" "),a("li",[a("code",[t._v("/logs")]),t._v(" – Error and access logs")]),t._v(" "),a("li",[a("a",{attrs:{href:"#migrations-and-seeders"}},[a("code",[t._v("/migrations")])]),t._v(" Database migrations and seeders used in version upgrades")]),t._v(" "),a("li",[a("code",[t._v("/public")]),t._v(" – The entry point of the API (index.php) and public files (assets, uploads, and extensions)")]),t._v(" "),a("li",[a("a",{attrs:{href:"#core"}},[a("code",[t._v("/src")])]),t._v(" – The main Directus API codebase\n"),a("ul",[a("li",[a("code",[t._v("/core/Directus")]),t._v(" – Core libraries")]),t._v(" "),a("li",[a("code",[t._v("/endpoints")]),t._v(" – Endpoint controllers")]),t._v(" "),a("li",[a("code",[t._v("/helpers")]),t._v(" – Function helpers")]),t._v(" "),a("li",[a("code",[t._v("/mail")]),t._v(" – Email templates")]),t._v(" "),a("li",[a("code",[t._v("/services")]),t._v(" – Business logic (service-layer)")]),t._v(" "),a("li",[a("a",{attrs:{href:"#schema"}},[a("code",[t._v("/schema.sql")])]),t._v(" – The empty database boilerplate")]),t._v(" "),a("li",[a("code",[t._v("/web.php")]),t._v(" The http/web entry-point bootstrap")])])]),t._v(" "),a("li",[a("code",[t._v("/tests")]),t._v(" Response and code tests")])]),t._v(" "),a("h3",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/directus/api/blob/master/composer.json",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("composer.json")]),a("OutboundLink")],1),t._v(" file for all dependencies.")]),t._v(" "),a("h2",{attrs:{id:"tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),a("p",[t._v("There are two types of tests: testing the API http response (actual requests) and code testing using PHPUnit.")]),t._v(" "),a("h2",{attrs:{id:"migrations-and-seeders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrations-and-seeders","aria-hidden":"true"}},[t._v("#")]),t._v(" Migrations and Seeders")]),t._v(" "),a("p",[t._v("The migration files are created using "),a("a",{attrs:{href:"https://phinx.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Phinx"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Migrations")]),t._v(" are a way to define a database schema programmatically, making it easier to make and apply changes.")]),t._v(" "),a("p",[t._v("Each migration file represents a table.")]),t._v(" "),a("p",[t._v("To create a new migration file use the following command: "),a("code",[t._v("vendor/bin/phinx create MyNewMigration -c config/migrations.php")]),t._v(", it will create a new migration in the format "),a("code",[t._v("YYYYMMDDHHMMSS_my_new_migration.php")]),t._v(", where the first 14 characters are replaced with the current timestamp down to the second.")]),t._v(" "),a("p",[a("strong",[t._v("Seeders")]),t._v(" are a way to insert data into tables. Read "),a("a",{attrs:{href:"http://docs.phinx.org/en/latest/seeding.html#creating-a-new-seed-class",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Create Seeding"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Each seeder represents the default data for some tables.")]),t._v(" "),a("p",[t._v("To create a new seeding file use the following command: "),a("code",[t._v("php vendor/bin/phinx seed:create UsersSeeder")]),t._v(", it will create a new file in "),a("code",[t._v("migrations/db/seeds")]),t._v(" named "),a("code",[t._v("UsersSeeder.php")]),t._v(" with the similar template shown below:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Phinx"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Seed"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractSeed")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UsersSeeder")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AbstractSeed")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * Run Method.\n     *\n     * Write your database seeder using this method.\n     *\n     * More information on writing seeders is available here:\n     * http://docs.phinx.org/en/latest/seeding.html\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("run")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("p",[t._v("The example below show how to insert data into the "),a("code",[t._v("directus_users")]),t._v(" table.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Phinx"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Seed"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractSeed")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UsersSeeder")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AbstractSeed")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("run")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token variable"}},[t._v("$data")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),t._v("    "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'admin@example.com'")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),t._v("    "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'user@example.com'")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token variable"}},[t._v("$posts")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("table")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'directus_users'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token variable"}},[t._v("$posts")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("insert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$data")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("save")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("p",[t._v("The seeder ran after the migrations when database install command is executed.")]),t._v(" "),a("h2",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema","aria-hidden":"true"}},[t._v("#")]),t._v(" Schema")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("schema.sql")]),t._v(" is a MySQL database dump. There's no automatic way of creating this, but it's an manual export of the tables and rows created by the migrations and seeders on installation.")]),t._v(" "),a("h2",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation","aria-hidden":"true"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),a("p",[t._v("Documentation is generated using "),a("a",{attrs:{href:"https://vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),a("OutboundLink")],1),t._v(".")])])},[],!1,null,null,null);r.options.__file="codebase-overview.md";s.default=r.exports}}]);
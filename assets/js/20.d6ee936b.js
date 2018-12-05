(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{234:function(t,e,a){"use strict";a.r(e);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=a(6),r=Object(o.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"configuring-the-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuring the API")]),t._v(" "),a("p",[t._v("The API is configured through project files in the "),a("code",[t._v("/config")]),t._v(" directory. A "),a("a",{attrs:{href:"https://github.com/directus/api/blob/master/config/api_sample.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("sample config file"),a("OutboundLink")],1),t._v(" is provided in case you would like to "),a("router-link",{attrs:{to:"./configure-manually.html"}},[t._v("manually install")]),t._v(" the API instead of using the "),a("router-link",{attrs:{to:"./configure-with-app.html"}},[t._v("App installer")]),t._v(" or "),a("router-link",{attrs:{to:"./configure-with-script.html"}},[t._v("CLI installer")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"project-config-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-config-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Project Config File")]),t._v(" "),a("p",[t._v("Each API instance can manage multiple projects. Each project has its own config, database, and file storage. Any extensions installed in the API will be available for all projects it manages.")]),t._v(" "),a("p",[t._v("The first project you create must be the default. Default projects are defined by their config file name: "),a("code",[t._v("config/api.php")]),t._v(" and use the "),a("code",[t._v("_")]),t._v(" API URL project scope, eg: "),a("code",[t._v("https://api.example.com/_/collections")])]),t._v(" "),a("p",[t._v("Subsequent projects can be added with new config files, using this naming convention: "),a("code",[t._v("config/api.[project-name].php")]),t._v(". Each project's config should point to a dedicated database and unique storage paths. Once configured, the API URL will be scoped to the project, eg: "),a("code",[t._v("https://api.example.com/project-name/collections")])]),t._v(" "),a("h2",{attrs:{id:"config-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-options","aria-hidden":"true"}},[t._v("#")]),t._v(" Config Options")]),t._v(" "),a("h3",{attrs:{id:"app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("app")])]),t._v(" "),a("p",[t._v("The API application settings")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("env")])]),t._v(" "),a("td",[t._v("Defines the detail of PHP error reporting (errors, warning, and notices). Options: "),a("code",[t._v("development")]),t._v(" (default) or "),a("code",[t._v("production")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("timezone")])]),t._v(" "),a("td",[t._v("PHP default timezone")])])])]),t._v(" "),a("h3",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("settings")])]),t._v(" "),a("p",[t._v("The settings for "),a("a",{attrs:{href:"https://www.slimframework.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slim"),a("OutboundLink")],1),t._v(", the micro-framework used by Directus")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("logger")])]),t._v(" "),a("td",[t._v("The Directus "),a("a",{attrs:{href:""}},[t._v("Monolog")]),t._v(" logger configuration. Settings: "),a("code",[t._v("path")]),t._v(" - where the log should be stored")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Currently the logger only works on the server's filesystem")])]),t._v(" "),a("h3",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("database")])]),t._v(" "),a("p",[t._v("Settings for the database connection")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("type")])]),t._v(" "),a("td",[t._v("Database type. "),a("code",[t._v("mysql")]),t._v(" and any drop-in replacements (MariaDB, Percona) are supported")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("host")])]),t._v(" "),a("td",[t._v("Database server host")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("port")])]),t._v(" "),a("td",[t._v("Database server port number")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("name")])]),t._v(" "),a("td",[t._v("Database name")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("username")])]),t._v(" "),a("td",[t._v("Database user username")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("password")])]),t._v(" "),a("td",[t._v("Database user password")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("engine")])]),t._v(" "),a("td",[t._v("Database storage engine")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("charset")])]),t._v(" "),a("td",[t._v("Database connection charset")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("socket")])]),t._v(" "),a("td",[t._v("Unix socket used for connection. It shouldn't be used with "),a("code",[t._v("host")])])])])]),t._v(" "),a("h3",{attrs:{id:"cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("cache")])]),t._v(" "),a("p",[t._v("Enables caching to speed-up API responses")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("enabled")])]),t._v(" "),a("td",[t._v("Whether or not the cache is enabled. Default: "),a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("response_ttl")])]),t._v(" "),a("td",[t._v("How long the cache will exists in seconds")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("pool")])]),t._v(" "),a("td",[t._v("Where the cache will be stored: "),a("code",[t._v("filesystem")]),t._v(", "),a("code",[t._v("redis")]),t._v(", "),a("code",[t._v("apc")]),t._v(", "),a("code",[t._v("apcu")]),t._v(" or "),a("code",[t._v("memcached")])])])])]),t._v(" "),a("h4",{attrs:{id:"apc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apc","aria-hidden":"true"}},[t._v("#")]),t._v(" APC")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("adapter")])]),t._v(" "),a("td",[t._v("Name of the adapter. Must be "),a("code",[t._v("apc")])])])])]),t._v(" "),a("h4",{attrs:{id:"apcu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apcu","aria-hidden":"true"}},[t._v("#")]),t._v(" APCU")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("adapter")])]),t._v(" "),a("td",[t._v("Name of the adapter. Must be "),a("code",[t._v("apcu")])])])])]),t._v(" "),a("h4",{attrs:{id:"filesystem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filesystem","aria-hidden":"true"}},[t._v("#")]),t._v(" Filesystem")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("adapter")])]),t._v(" "),a("td",[t._v("Name of the adapter. Must be "),a("code",[t._v("filesystem")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("path")])]),t._v(" "),a("td",[t._v("Where on the cache will be stored relative to the API root path. Prepend with "),a("code",[t._v("/")]),t._v(" for absolute")])])])]),t._v(" "),a("h4",{attrs:{id:"memcached"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memcached","aria-hidden":"true"}},[t._v("#")]),t._v(" Memcached")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("adapter")])]),t._v(" "),a("td",[t._v("Name of the adapter. Must be "),a("code",[t._v("memcached")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("host")])]),t._v(" "),a("td",[t._v("Memcached host")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("port")])]),t._v(" "),a("td",[t._v("Memcached server port number")])])])]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" Memcached and PHP Memcached extension must be installed.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Ubuntu example\nsudo apt-get install memcached\nsudo apt-get install php-memcached\n")])])]),a("h4",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("adapter")])]),t._v(" "),a("td",[t._v("Name of the adapter. Must be "),a("code",[t._v("redis")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("host")])]),t._v(" "),a("td",[t._v("Redis server host")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("port")])]),t._v(" "),a("td",[t._v("Redis server port number")])])])]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" Redis Server and PHP Redis extension must be installed.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Ubuntu example\nsudo apt-get install redis-server\nsudo apt-get install php-redis\n")])])]),a("h3",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("storage")])]),t._v(" "),a("p",[t._v("Choose where files can be uploaded. Currently we support local and Amazon-S3")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("adapter")])]),t._v(" "),a("td",[a("code",[t._v("local")]),t._v(" for local filesystem or "),a("code",[t._v("s3")]),t._v(" for Amazon-S3")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("root")])]),t._v(" "),a("td",[t._v("Root path where files are uploaded")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("root_url")])]),t._v(" "),a("td",[t._v("Public URL with access to "),a("code",[t._v("root")]),t._v(" files")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("thumb_root")])]),t._v(" "),a("td",[t._v("Root path where the generated thumbnails images are stored")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("key")])]),t._v(" "),a("td",[t._v("S3 Bucket Key")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("secret")])]),t._v(" "),a("td",[t._v("S3 Bucket Secret")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("region")])]),t._v(" "),a("td",[t._v("S3 Bucket Region")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("version")])]),t._v(" "),a("td",[t._v("S3 API version")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("bucket")])]),t._v(" "),a("td",[t._v("S3 Bucket name")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("options")])]),t._v(" "),a("td",[t._v("S3 Options")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("If you are using the "),a("code",[t._v("s3")]),t._v(" storage adapter, you must install the "),a("code",[t._v("aws/aws-sdk-php")]),t._v(" package. Run "),a("code",[t._v("composer require aws/aws-sdk-php")]),t._v(" in the terminal.")])]),t._v(" "),a("h3",{attrs:{id:"mail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mail","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("mail")])]),t._v(" "),a("p",[t._v("A list of key-value-pairs (array) mail configurations. Currently only the "),a("code",[t._v("default")]),t._v(" key is supported. Each value must have at least the following information:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("transport")])]),t._v(" "),a("td",[a("code",[t._v("smtp")]),t._v(", "),a("code",[t._v("sendmail")]),t._v(" or your own class name resolution string (Ex: "),a("code",[t._v("\\My\\Namespace\\MyTransport")]),t._v("). This class must extends from "),a("code",[t._v("\\Directus\\Mail\\Transports\\AbstractTransport")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("from")])]),t._v(" "),a("td",[t._v('The global "from" email address')])])])]),t._v(" "),a("p",[t._v("When the "),a("code",[t._v("transport")]),t._v(" is set to one of the transports mentioned below, any of those options can be used.")]),t._v(" "),a("h4",{attrs:{id:"smtp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("smtp")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("host")])]),t._v(" "),a("td",[t._v("Server's host. Default: "),a("code",[t._v("localhost")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("port")])]),t._v(" "),a("td",[t._v("Server's port. Default: "),a("code",[t._v("25")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("username")])]),t._v(" "),a("td",[t._v("Authentication username")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("password")])]),t._v(" "),a("td",[t._v("Authentication password")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("encryption")])]),t._v(" "),a("td",[t._v("Connection encryption type, Example: "),a("code",[t._v("ssl")]),t._v(" or "),a("code",[t._v("tls")])])])])]),t._v(" "),a("h4",{attrs:{id:"sendmail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendmail","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("sendmail")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("sendmail")])]),t._v(" "),a("td",[t._v("The location of the sendmail command. This value is only required if the path is not "),a("code",[t._v("/usr/sbin/sendmail")]),t._v(" (default).")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can extend "),a("code",[t._v("Directus\\Mail\\Transports\\AbstractTransport")]),t._v(" class to create your own Swift Mailer transport. All options that exists in your mailer config will be passed to your transport.")])]),t._v(" "),a("h3",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("cors")])]),t._v(" "),a("p",[t._v("Cross-Origin Resource Sharing (CORS) is a mechanism that allows you to restricted access of Directus API from other domains")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("enabled")])]),t._v(" "),a("td",[t._v("Indicate whether or not CORS is enabled")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("origin")])]),t._v(" "),a("td",[t._v("One more more URI allowed access to the API resource. Default: "),a("code",[t._v("*")]),t._v(" (All).")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("methods")])]),t._v(" "),a("td",[t._v("Method or methods allowed to access the API resource. Default: "),a("code",[t._v("GET,PUT,PATCH,POST,DELETE,HEAD")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("headers")])]),t._v(" "),a("td",[t._v("List of headers are allowed when making the actual request. Default: "),a("code",[t._v("Access-Control-Allow-Headers,Content-Type,Authorization")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("exposed_headers")])]),t._v(" "),a("td",[t._v("List of headers the browser are allowed to access. Default: "),a("code",[t._v("none")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("max_age")])]),t._v(" "),a("td",[t._v("How long in seconds a preflight request can be cached. Default: "),a("code",[t._v("none")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("credentials")])]),t._v(" "),a("td",[t._v("Indicate whether or not to include credentials in the request. Default: "),a("code",[t._v("false")]),t._v(".")])])])]),t._v(" "),a("h3",{attrs:{id:"rate-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rate-limit","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("rate_limit")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("enabled")])]),t._v(" "),a("td",[t._v("Enable or disable the rate limit")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("limit")])]),t._v(" "),a("td",[t._v("The request limit within the "),a("code",[t._v("interval")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("interval")])]),t._v(" "),a("td",[t._v("Time to reset the "),a("code",[t._v("limit")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("adapter")])]),t._v(" "),a("td",[a("code",[t._v("redis")]),t._v(", "),a("code",[t._v("memory")]),t._v(" available")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("host")])]),t._v(" "),a("td",[t._v("Redis host")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("port")])]),t._v(" "),a("td",[t._v("Redis port")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("timeout")])]),t._v(" "),a("td",[t._v("Redis connection timeout")])])])]),t._v(" "),a("h3",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("actions")])]),t._v(" "),a("p",[t._v("Actions hooks allow you to execute custom code when a Directus Event happens. You can register functions or classes to a hook name and when the event happens it will execute that code. For example:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hooks'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'actions'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item.create.articles'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$data")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token variable"}},[t._v("$content")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'New article was created with the title: '")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$data")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// pesudo function")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("notify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'admin@example.com'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'New Article'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$content")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("The example above will execute the "),a("code",[t._v("notify")]),t._v(" function after an item has been inserted into the "),a("code",[t._v("articles")]),t._v(" table.")]),t._v(" "),a("p",[t._v("A class that implements the "),a("code",[t._v("__invoke")]),t._v(" method or inherits from "),a("code",[t._v("\\Directus\\Hook\\HookInterface")]),t._v(" can also be used, and instead of passing a function you must pass the fully qualified class name resolution. For example: "),a("code",[t._v("\\MyApplication\\Events\\NotifyNewArticles::class")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filters","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("filters")])]),t._v(" "),a("p",[t._v("Filters work the same as hooks except that you can manipulate the data being passed. This is a nice way to add, remove, or manipulate the data before it is sent to the database. Filters always pass a "),a("code",[t._v("\\Directus\\Hook\\Payload")]),t._v(" object as the first parameter and it must return a payload object. An example would be generating a new UUID every time an article is created:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hooks'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'filters'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item.create.articles:before'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),a("span",{attrs:{class:"token package"}},[t._v("Directus"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Hook"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payload")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$payload")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token variable"}},[t._v("$payload")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'uuid'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\"),a("span",{attrs:{class:"token package"}},[t._v("Directus"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("generate_uuid4")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$payload")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feedback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("feedback")])]),t._v(" "),a("p",[t._v("It doesn't do anything on version 2.0, but it was created to ping our server to understand approximately how many instances of Directus exists.")]),t._v(" "),a("h3",{attrs:{id:"tableblacklist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tableblacklist","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("tableBlacklist")])]),t._v(" "),a("p",[t._v("It doesn't do anything, but it was meant to blacklist tables from being used by Directus.")]),t._v(" "),a("h3",{attrs:{id:"auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("auth")])]),t._v(" "),a("p",[t._v("Out-of-the-box Directus supports "),a("code",[t._v("Okta")]),t._v(", "),a("code",[t._v("GitHub")]),t._v(", "),a("code",[t._v("Facebook")]),t._v(", "),a("code",[t._v("Twitter")]),t._v(" and "),a("code",[t._v("Google")]),t._v(" Single-Sign-On (SSO), but also allows you to create your own providers.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("secret_key")])]),t._v(" "),a("td",[t._v("This key is used by the JWT encode function to encode tokens")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("public_key")])]),t._v(" "),a("td",[t._v("This key is used by the JWT as identifier for all project tokens")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("social_providers")])]),t._v(" "),a("td",[t._v("List of available third-party authentication providers")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("secret_key")]),t._v(" and "),a("code",[t._v("public_key")]),t._v(' can be anything, but we recommend a "strong" and unique value. They are used to uniquely identify your project so that all your tokens can be more secure by only being able to be used in the same project it was created.')])]),t._v(" "),a("h4",{attrs:{id:"okta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#okta","aria-hidden":"true"}},[t._v("#")]),t._v(" Okta")]),t._v(" "),a("p",[t._v("Okta offers both SSO as well as external user management through SCIM. "),a("router-link",{attrs:{to:"./okta.html"}},[t._v("Learn more about configuring Okta auth")]),t._v(".")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("client_id")])]),t._v(" "),a("td",[t._v("Your Okta client id key")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("client_secret")])]),t._v(" "),a("td",[t._v("Your Okta client secret key")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("base_url")])]),t._v(" "),a("td",[t._v("Your okta application base URL")])])])]),t._v(" "),a("h4",{attrs:{id:"github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("client_id")])]),t._v(" "),a("td",[t._v("Your application client id")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("client_secret")])]),t._v(" "),a("td",[t._v("Your application client secret key")])])])]),t._v(" "),a("h4",{attrs:{id:"google"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google","aria-hidden":"true"}},[t._v("#")]),t._v(" Google")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("client_id")])]),t._v(" "),a("td",[t._v("Your application client id")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("client_secret")])]),t._v(" "),a("td",[t._v("Your application client secret key")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("hosted_domain")])]),t._v(" "),a("td",[t._v("Your application allowed hosted domain")])])])]),t._v(" "),a("h4",{attrs:{id:"twitter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#twitter","aria-hidden":"true"}},[t._v("#")]),t._v(" Twitter")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("identifier")])]),t._v(" "),a("td",[t._v("Your application identifier key")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("secret")])]),t._v(" "),a("td",[t._v("Your application secret key")])])])]),t._v(" "),a("h4",{attrs:{id:"facebook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#facebook","aria-hidden":"true"}},[t._v("#")]),t._v(" Facebook")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("client_id")])]),t._v(" "),a("td",[t._v("Your application client id")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("client_secret")])]),t._v(" "),a("td",[t._v("Your application client secret key")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("graph_api_version")])]),t._v(" "),a("td",[t._v("Facebook graph API version")])])])])])},[],!1,null,null,null);r.options.__file="configure.md";e.default=r.exports}}]);
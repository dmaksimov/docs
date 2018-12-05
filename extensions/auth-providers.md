# Auth Providers

> Directus offers built-in authentication using securely hashed passwords. Alternatively, you can enable any of our Single Sing-On (SSO) services or create your own adapter for custom authentication. Directus also supports SCIM for external user management.

## Files & Structure

### `Provider.php`

```php
<?php

namespace Directus\Authentication\Sso\Provider\twitter;

use Directus\Authentication\Sso\OneSocialProvider;
use League\OAuth1\Client\Server\Twitter;

class Provider extends OneSocialProvider
{
    /**
     * @var Twitter
     */
    protected $provider = null;

    /**
     * Creates the Twitter provider oAuth client
     *
     * @return Twitter
     */
    protected function createProvider()
    {
        $this->provider = new Twitter([
            'identifier'    => $this->config->get('identifier'),
            'secret'        => $this->config->get('secret'),
            'callback_uri'  => $this->getRedirectUrl(),
        ]);

        return $this->provider;
    }

    /**
     * @inheritdoc
     */
    public function getScopes()
    {
        return null;
    }
}
```

### `auth.php`

```php
<?php

return [
    'provider' => \Directus\Authentication\Sso\Provider\twitter\Provider::class
];
```

### `icon.svg`

Lastly, you must include an SVG file of the service provider's logo.

## SSO Flow

These are the steps taken when the Directus App attempts to log a user in using Single Sign-On:

1. The application will redirect to the API at `/auth/sso/<provider>`
2. The API redirects to the provider (e.g. GitHub/Facebook)
3. The user logs in on the providers website
4. Provider redirects back to the API
5. The API checks the authentication
6. The API redirects back to the application using the referral domain from the initial step 1 request. The API adds the data to the query string. If it's an error, it's going to be in the `?error` parameter, if it's successful it will add the Request Token in the `token` parameter.
7. The client will need to use the Request Token from Step 6 to make a `POST` request to the API to `/auth/access_token` with a `request_token` as a required param to fetch the Access Token.
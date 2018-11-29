# Alternate Installation Methods

## Install Manually

If you don't have access to the command line or would rather do things manually, you can download the static bundle manually as a [zip](https://github.com/directus/directus/archive/master.zip) or [tar](https://github.com/directus/directus/archive/master.tar.gz) file from [our releases page](https://github.com/directus/directus/releases).

### Zip File

```bash
# Get the zip file from GitHub
wget https://github.com/directus/directus/archive/master.zip

# Decompress the file
unzip master.zip
```

### Tar File

```bash
# Get the zip file from GitHub
wget https://github.com/directus/directus/archive/master.tar.gz

# Decompress the file
tar -xzf master.tar.gz
```

### Using FTP

If you don't have access to the command line then you'll need to decompress the files on your local computer before uploading to the remote server, though this will take _much_ longer.

## Install Individually

If you prefer, you can choose to only [install the Directus API](./api/admin/install.md), or only [install the Directus App](./app/admin/install.md). This is useful for multitenancy, such as when you need many instances of the API but only one App to manage them all.

## Install from Source

If you would like to extend or make contributions to the core codebase then you can [install the Directus API Source](./api/contributor/install-dev.md), or [install the Directus App Source](./app/contributor/install-dev.md). This process involves more steps, so we recommend using the combined build for normal usage.
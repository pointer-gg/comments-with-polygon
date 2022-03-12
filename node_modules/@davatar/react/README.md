# @davatar/react
This library provides components that make it easy to display decentralized avatars in Web3 applications.

## Install

```
npm install --save @davatar/react

- or -

yarn add @davatar/react
```

## Components

### Davatar
The `<Davatar />` component takes an Ethereum address, the desired avatar size, and an optional Web3 provider and displays the avatar attached to the ENS reverse record assigned to the address, if it exists. Otherwise, it displays the Jazzicon for the address.

```jsx
// ...
  return (
    <Davatar
      size={24}
      address='0x00000000000000000000000'
      provider={provider} // optional
      graphApiKey={apiKey} // optional
      generatedAvatarType='jazzicon' // optional, 'jazzicon' or 'blockies'
    />
  );
// ...
```

### Image
If you know the avatar URI ([available URI types](https://gist.github.com/Arachnid/9db60bd75277969ee1689c8742b75182#uri-types)), you can use the `<Image />` component which takes an image URI, avatar size, and an optional Ethereum address, and displays the image from the URI. If the URI is undefined or null, and the address is specified, it displays a Jazzicon. It supports the following URI types:

- HTTP(S)
- IPFS/IPNS
- Arweave (ar://), with support for `Origin` "mutability" tags
- Data URLs

```jsx
// ...
  return (
    <Image
      size={24}
      address='0x00000000000000000000000'
      uri='ar://0dbf9uwer8gw7efrg9bwe08r9v90ew8'
      graphApiKey={apiKey} // optional
      generatedAvatarType='jazzicon' // optional, 'jazzicon' or 'blockies'
    />
  );
// ...
```

## Caching
In order to prevent unnecessary and frequent re-querying of the blockchain for avatar metadata, the library caches fetched avatar URIs for 24 hours. This cache is maintained in local storage and looks like this:

```
key: davatar/{wallet address} and davatar/{wallet address}/{uri}
value: {avatar image URI}
expiredAt: expiry datetime
```

## Develop

```bash
> npm install
> cd example
> npm install
> npm start
```

# License
This project is MIT licensed. The LICENSE file is available at the top of the repository.



# Notkickstarter project funding dApp

A platform similar to kickstarter but in web3. It solves Kickstarter's trust issues by leveraging user (donor) opinions on project actions (More on features info).
It is built with:
* React with NextJS 12
* Semantic UI for the styling of components
* Web3JS to connect to smart contracts 
* Truffle to connect with wallet providers (Metamask)
* Ganache for local blockchain deployment
* Mocha for a full contract test suite

![homepage](/public/assets/home.png)

## Key Features

* View All Campaigns
* View Campaign Details
* Login and Signup using email.
* Create new listings
  - An 8 step process using central state
  - Allows images upload
* Add or remove listings from your wishlists
* Manage your properties listed for lease.
* Make reservations on listings at avasilable dates ang manage them. 

## How To Use

Clone this repo and then, from your command line:

```bash

# Go into the repository
$ cd notckcikstarter-dapp

# Install dependencies
$ npm install

# Run the app. This will start both the frontend (Next) and the backend (Nest).
$ npm run dev
```

## Test

Clone this repo and then, from your command line:

```bash

# Run the tests with mocha
$ npm run test
```

## App Screenshots

### Home Page List View

![list](/public/assets/home.png)


### New Campaign (Project)

![new-step-1](/public/assets/new.png)
![new-step-2](/public/assets/new-2.png)
![new-step-3](/public/assets/new-3.png)

### Campaign Details

![details-1](/public/assets/details.png)

### Contribute to a Campaign

![contribute-1](/public/assets/contribute-1.png)
![contribute-2](/public/assets/contribute-2.png)

### Create and approve spending requests

![request-1](/public/assets/request-1.png)
![request-2](/public/assets/request-2.png)

## Credits

This project is from the udemy course:

- [Udemy](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/)

## License

MIT
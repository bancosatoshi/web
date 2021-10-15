# Non Fungible Me
https://github.com/aufacicenta/nonfungibleme

The decentralized, anonymous and immutable collection of everything, YOU!

## Summary

NFME is a __Web Blockchain UI__ that features a multi-chain wallet widget. The NFME web dashboard can be __used to read and update smart-contract data__.

For the Solana Ignition Hackaton 2021, NFME is designed for __Real Estate assets trading and investment in the Solana Blockchain__.

## Inspiration

NFT technology is booming. Solana provides low tx fees, high TPS and Rust smart-contracts that enable powerful blockchain functionalities.

The Real Estate NFT Market is still to be explored, and __Non Fungible Me borns inspired by providing the optimal UX to interact with Metaplex Token Metadata Programs, structured to include Real Estate information__.

## What it does

### Buy Real Estate Property Ownership

NFME can read [Metaplex Token Metadata](https://docs.metaplex.com/nft-standard) of Solana Blockchain programs. A Solana wallet can buy partial ownership of a Real Estate NFT.

### Post Real Estate NFTs

NFME provides a modern web UI to [create Metaplex Token Metadata](https://nfme.aufacicenta.com/real-estate/solana/list-property). For Real Estate properties, NFME features special metadata attributes such as Location & Attachments, which can be encrypted to be __accessed only by owners or whitelisted members, acting as a DAO__.

### Index NFT Metadata

Only if the user requests so, NFME can [index the NFTs](https://nfme.aufacicenta.com/en/real-estate/solana) for the community to browse and find them easier.

### Multi-chain Wallet Widget

Starting with the Solana Blockchain, NFME features a Wallet Widget, that connects with Solana's main wallets to interact with a given smart-contract or program.

## How we built it

[NFME is an open-source NextJS web application](https://github.com/aufacicenta/nonfungibleme) (desktop, dark-theme for now) with 3 main pages:

a) [Real Estate Index (My Properties & Explore)](https://nfme.aufacicenta.com/en/real-estate/solana)
b) [Property Details](https://nfme.aufacicenta.com/en/real-estate/solana/property?tokenMetadataId=metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s)
c) [List a Property](https://nfme.aufacicenta.com/real-estate/solana/list-property)

## Challenges we ran into

### With listing a property

Providing the fastest and most reliable UX for creating a Solana Metaplex Token Metadata NFT is still a challenge. For Proof-of-Concept purposes, the NFME UI presents an editor with a Token Metadata template to be filled manually. [Data validation](https://github.com/aufacicenta/nonfungibleme/issues/6) is still not implemented.

### With buying a property

The proof-of-concept app presents a _property details UI_ that lists the owners of a Real Estate Token Metadata Program. Clicking on "Buy Ownership" displays the terms of the purchase as defined by the creator. These details are static and are used for demonstration purposes only.

The vision is to connect the ownership conditions to a Solana Rust program so that if the conditions are not met, penalties can be executed upon the wrong-doers automatically after consensus from the property DAO.

### Each property may have a DAO

Multiple owners of a property conform a community that can vote (according to the weight of their ownership) to apply a given budget to enhance the property they own. This is part of NFME vision, and it is not implemented yet.

### Some token metadata attributes can be encrypted

Real Estate NFT attributes such as Location or File Attachments can have sensible information that should not be accessed by anyone. The vision of NFME is to encrypt these attributes in the backend, where only the owner or whitelisted members can access the information.

## Accomplishments that we're proud of

### The UI is cutting edge

We invested our efforts on building an open-source web blockchain UI that can be themed easily. This UI can be extended to be a "Google Drive of permanent data on the blockchain". So not only Real Estate assets can be listed for blockchains like Solana, Ethereum, and others; but art, music, documents, or any other non-fungible asset.

### The multi-chain wallet widget

A user can access with a single click to their NFTs across any chain. By design, this is reflected in the project's architecture, which we are proud of.

## What we learned

We dove really deep into `@solana/*` packages for the web, as well as got a close relationship with Metaplex's Token Metadata Program and how to interact with it using JavaScript.

## What's next for Non Fungible Me: Real Estate

The roadmap includes completing the "Challenges We Ran Into" section.
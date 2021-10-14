# Non Fungible Me
https://github.com/aufacicenta/nonfungibleme

The decentralized, anonymous and immutable collection of everything, YOU!

## Summary

NFME is a __Web Blockchain UI__ that features a multi-chain wallet widget. The NFME web dashboard can be __used to read and update smart-contract data__.

For the Solana Ignition Hackaton 2021, NFME is designed for __Real Estate assets trading and investment in the Solana Blockchain__.

## Inspiration

NFT technology is booming. Solana provides low tx fees, high TPS and Rust smart-contracts that enable powerful blockchain functionalities.

The Real Estate NFT Market is still to be explored, and Non Fungible Me borns inspired by providing the optimal UX to interact with Metaplex Token Metadata Programs, structured to include Real Estate information.

## What it does

### Buy Real Estate Property Ownership

NFME can read [Metaplex Token Metadata](https://docs.metaplex.com/nft-standard) of Solana Blockchain programs. A Solana wallet can buy partial ownership of a Real Estate NFT.

### Post Real Estate NFTs

NFME provides a modern web UI to [create Metaplex Token Metadata](https://nfme.aufacicenta.com/real-estate/solana/list-property). For Real Estate properties, NFME features special metadata attributes such as Location & Attachments, which can be encrypted to be __accessed only by owners or whitelisted members, acting as a DAO__.

### Index NFT Metadata

Only if the user requests so, NFME can [index the NFTs](https://nfme.aufacicenta.com/en/real-estate/solana) for the community to browse and find them easier.

### Multi-chain Wallet Widget

Starting with the Solana Blockchain, NFME features a Wallet Widget, that connects with Solana's main wallets to interact with a given smart-contract or program.

___


Starting with the Solana Blockchain, NFME allows a user to [anonymously create NFTs](https://nfme.aufacicenta.com/real-estate/solana/list-property) by setting metadata as per the [Metaplex Token Metadata Standard](https://docs.metaplex.com/nft-standard).

NFME can then [read the token metadata](https://nfme.aufacicenta.com/en/real-estate/solana/property?tokenMetadataId=metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s) and provide feature-specific interactions with the smart-contract or program.

Only if the user requests so, NFME can [index the NFTs](https://nfme.aufacicenta.com/en/real-estate/solana) for the community to browse and find them easier.

NFME __protects user privacy and sensible information__ by encrypting selected metadata attributes; decrypting these values may require a wallet to be a partial owner of the NFT.

______

## How we built it

[NFME is an open-source NextJS web application](https://github.com/aufacicenta/nonfungibleme) (desktop) with 3 main pages:

a) [Real Estate Index (My Properties & Explore)](https://nfme.aufacicenta.com/en/real-estate/solana)
b) [Property Details](https://nfme.aufacicenta.com/en/real-estate/solana/property?tokenMetadataId=metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s)
c) [List a Property](https://nfme.aufacicenta.com/real-estate/solana/list-property)

## Challenges we ran into

### With listing a property

Providing the fastest and most reliable UX for creating a Solana Metaplex Token Metadata NFT is still a challenge. For Proof-of-Concept purposes, the NFME UI presents an editor with a Token Metadata template to be filled manually. [Data validation](https://github.com/aufacicenta/nonfungibleme/issues/6) is still not implemented.

## Accomplishments that we're proud of

## What we learned

## What's next for Non Fungible Me: Real Estate

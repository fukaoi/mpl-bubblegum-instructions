import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { MetadataArgs } from '../types/MetadataArgs';
import { UpdateArgs } from '../types/UpdateArgs';
export type UpdateMetadataInstructionArgs = {
    root: number[];
    nonce: beet.bignum;
    index: number;
    currentMetadata: MetadataArgs;
    updateArgs: UpdateArgs;
};
export declare const updateMetadataStruct: beet.FixableBeetArgsStruct<UpdateMetadataInstructionArgs & {
    instructionDiscriminator: number[];
}>;
export type UpdateMetadataInstructionAccounts = {
    treeAuthority: web3.PublicKey;
    authority: web3.PublicKey;
    collectionMint?: web3.PublicKey;
    collectionMetadata?: web3.PublicKey;
    collectionAuthorityRecordPda?: web3.PublicKey;
    leafOwner: web3.PublicKey;
    leafDelegate: web3.PublicKey;
    payer: web3.PublicKey;
    merkleTree: web3.PublicKey;
    logWrapper: web3.PublicKey;
    compressionProgram: web3.PublicKey;
    tokenMetadataProgram: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const updateMetadataInstructionDiscriminator: number[];
export declare function createUpdateMetadataInstruction(accounts: UpdateMetadataInstructionAccounts, args: UpdateMetadataInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;

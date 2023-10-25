import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { DecompressibleState } from '../types/DecompressibleState';
export type SetDecompressibleStateInstructionArgs = {
    decompressableState: DecompressibleState;
};
export declare const setDecompressibleStateStruct: beet.BeetArgsStruct<SetDecompressibleStateInstructionArgs & {
    instructionDiscriminator: number[];
}>;
export type SetDecompressibleStateInstructionAccounts = {
    treeAuthority: web3.PublicKey;
    treeCreator: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const setDecompressibleStateInstructionDiscriminator: number[];
export declare function createSetDecompressibleStateInstruction(accounts: SetDecompressibleStateInstructionAccounts, args: SetDecompressibleStateInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;

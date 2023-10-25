import * as beet from '@metaplex-foundation/beet';
export declare enum DecompressibleState {
    Enabled = 0,
    Disabled = 1
}
export declare const decompressibleStateBeet: beet.FixedSizeBeet<DecompressibleState, DecompressibleState>;

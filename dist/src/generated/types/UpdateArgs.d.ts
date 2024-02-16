import * as beet from '@metaplex-foundation/beet';
import { Creator } from './Creator';
export type UpdateArgs = {
    name: beet.COption<string>;
    symbol: beet.COption<string>;
    uri: beet.COption<string>;
    creators: beet.COption<Creator[]>;
    sellerFeeBasisPoints: beet.COption<number>;
    primarySaleHappened: beet.COption<boolean>;
    isMutable: beet.COption<boolean>;
};
export declare const updateArgsBeet: beet.FixableBeetArgsStruct<UpdateArgs>;

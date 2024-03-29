type ErrorWithCode = Error & {
    code: number;
};
type MaybeErrorWithCode = ErrorWithCode | null | undefined;
export declare class AssetOwnerMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class PublicKeyMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class HashingMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class UnsupportedSchemaVersionError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CreatorShareTotalMustBe100Error extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class DuplicateCreatorAddressError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CreatorDidNotVerifyError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CreatorNotFoundError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoCreatorsPresentError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CreatorHashMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class DataHashMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CreatorsTooLongError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MetadataNameTooLongError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MetadataSymbolTooLongError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MetadataUriTooLongError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MetadataBasisPointsTooHighError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class TreeAuthorityIncorrectError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InsufficientMintCapacityError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NumericalOverflowErrorError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class IncorrectOwnerError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CollectionCannotBeVerifiedInThisInstructionError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CollectionNotFoundError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class AlreadyVerifiedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class AlreadyUnverifiedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class UpdateAuthorityIncorrectError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class LeafAuthorityMustSignError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CollectionMustBeSizedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MetadataMintMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidCollectionAuthorityError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidDelegateRecordError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CollectionMasterEditionAccountInvalidError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CollectionMustBeAUniqueMasterEditionError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class UnknownExternalErrorError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class DecompressionDisabledError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MissingCollectionMintAccountError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MissingCollectionMetadataAccountError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CollectionMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MetadataImmutableError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class PrimarySaleCanOnlyBeFlippedToTrueError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CreatorDidNotUnverifyError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare function errorFromCode(code: number): MaybeErrorWithCode;
export declare function errorFromName(name: string): MaybeErrorWithCode;
export {};

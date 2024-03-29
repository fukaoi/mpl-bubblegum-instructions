"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorFromName = exports.errorFromCode = exports.CreatorDidNotUnverifyError = exports.PrimarySaleCanOnlyBeFlippedToTrueError = exports.MetadataImmutableError = exports.CollectionMismatchError = exports.MissingCollectionMetadataAccountError = exports.MissingCollectionMintAccountError = exports.DecompressionDisabledError = exports.UnknownExternalErrorError = exports.CollectionMustBeAUniqueMasterEditionError = exports.CollectionMasterEditionAccountInvalidError = exports.InvalidDelegateRecordError = exports.InvalidCollectionAuthorityError = exports.MetadataMintMismatchError = exports.CollectionMustBeSizedError = exports.LeafAuthorityMustSignError = exports.UpdateAuthorityIncorrectError = exports.AlreadyUnverifiedError = exports.AlreadyVerifiedError = exports.CollectionNotFoundError = exports.CollectionCannotBeVerifiedInThisInstructionError = exports.IncorrectOwnerError = exports.NumericalOverflowErrorError = exports.InsufficientMintCapacityError = exports.TreeAuthorityIncorrectError = exports.MetadataBasisPointsTooHighError = exports.MetadataUriTooLongError = exports.MetadataSymbolTooLongError = exports.MetadataNameTooLongError = exports.CreatorsTooLongError = exports.DataHashMismatchError = exports.CreatorHashMismatchError = exports.NoCreatorsPresentError = exports.CreatorNotFoundError = exports.CreatorDidNotVerifyError = exports.DuplicateCreatorAddressError = exports.CreatorShareTotalMustBe100Error = exports.UnsupportedSchemaVersionError = exports.HashingMismatchError = exports.PublicKeyMismatchError = exports.AssetOwnerMismatchError = void 0;
const createErrorFromCodeLookup = new Map();
const createErrorFromNameLookup = new Map();
class AssetOwnerMismatchError extends Error {
    constructor() {
        super('Asset Owner Does not match');
        this.code = 0x1770;
        this.name = 'AssetOwnerMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AssetOwnerMismatchError);
        }
    }
}
exports.AssetOwnerMismatchError = AssetOwnerMismatchError;
createErrorFromCodeLookup.set(0x1770, () => new AssetOwnerMismatchError());
createErrorFromNameLookup.set('AssetOwnerMismatch', () => new AssetOwnerMismatchError());
class PublicKeyMismatchError extends Error {
    constructor() {
        super('PublicKeyMismatch');
        this.code = 0x1771;
        this.name = 'PublicKeyMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PublicKeyMismatchError);
        }
    }
}
exports.PublicKeyMismatchError = PublicKeyMismatchError;
createErrorFromCodeLookup.set(0x1771, () => new PublicKeyMismatchError());
createErrorFromNameLookup.set('PublicKeyMismatch', () => new PublicKeyMismatchError());
class HashingMismatchError extends Error {
    constructor() {
        super('Hashing Mismatch Within Leaf Schema');
        this.code = 0x1772;
        this.name = 'HashingMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, HashingMismatchError);
        }
    }
}
exports.HashingMismatchError = HashingMismatchError;
createErrorFromCodeLookup.set(0x1772, () => new HashingMismatchError());
createErrorFromNameLookup.set('HashingMismatch', () => new HashingMismatchError());
class UnsupportedSchemaVersionError extends Error {
    constructor() {
        super('Unsupported Schema Version');
        this.code = 0x1773;
        this.name = 'UnsupportedSchemaVersion';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UnsupportedSchemaVersionError);
        }
    }
}
exports.UnsupportedSchemaVersionError = UnsupportedSchemaVersionError;
createErrorFromCodeLookup.set(0x1773, () => new UnsupportedSchemaVersionError());
createErrorFromNameLookup.set('UnsupportedSchemaVersion', () => new UnsupportedSchemaVersionError());
class CreatorShareTotalMustBe100Error extends Error {
    constructor() {
        super('Creator shares must sum to 100');
        this.code = 0x1774;
        this.name = 'CreatorShareTotalMustBe100';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CreatorShareTotalMustBe100Error);
        }
    }
}
exports.CreatorShareTotalMustBe100Error = CreatorShareTotalMustBe100Error;
createErrorFromCodeLookup.set(0x1774, () => new CreatorShareTotalMustBe100Error());
createErrorFromNameLookup.set('CreatorShareTotalMustBe100', () => new CreatorShareTotalMustBe100Error());
class DuplicateCreatorAddressError extends Error {
    constructor() {
        super('No duplicate creator addresses in metadata');
        this.code = 0x1775;
        this.name = 'DuplicateCreatorAddress';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, DuplicateCreatorAddressError);
        }
    }
}
exports.DuplicateCreatorAddressError = DuplicateCreatorAddressError;
createErrorFromCodeLookup.set(0x1775, () => new DuplicateCreatorAddressError());
createErrorFromNameLookup.set('DuplicateCreatorAddress', () => new DuplicateCreatorAddressError());
class CreatorDidNotVerifyError extends Error {
    constructor() {
        super('Creator did not verify the metadata');
        this.code = 0x1776;
        this.name = 'CreatorDidNotVerify';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CreatorDidNotVerifyError);
        }
    }
}
exports.CreatorDidNotVerifyError = CreatorDidNotVerifyError;
createErrorFromCodeLookup.set(0x1776, () => new CreatorDidNotVerifyError());
createErrorFromNameLookup.set('CreatorDidNotVerify', () => new CreatorDidNotVerifyError());
class CreatorNotFoundError extends Error {
    constructor() {
        super('Creator not found in creator Vec');
        this.code = 0x1777;
        this.name = 'CreatorNotFound';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CreatorNotFoundError);
        }
    }
}
exports.CreatorNotFoundError = CreatorNotFoundError;
createErrorFromCodeLookup.set(0x1777, () => new CreatorNotFoundError());
createErrorFromNameLookup.set('CreatorNotFound', () => new CreatorNotFoundError());
class NoCreatorsPresentError extends Error {
    constructor() {
        super('No creators in creator Vec');
        this.code = 0x1778;
        this.name = 'NoCreatorsPresent';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NoCreatorsPresentError);
        }
    }
}
exports.NoCreatorsPresentError = NoCreatorsPresentError;
createErrorFromCodeLookup.set(0x1778, () => new NoCreatorsPresentError());
createErrorFromNameLookup.set('NoCreatorsPresent', () => new NoCreatorsPresentError());
class CreatorHashMismatchError extends Error {
    constructor() {
        super('User-provided creator Vec must result in same user-provided creator hash');
        this.code = 0x1779;
        this.name = 'CreatorHashMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CreatorHashMismatchError);
        }
    }
}
exports.CreatorHashMismatchError = CreatorHashMismatchError;
createErrorFromCodeLookup.set(0x1779, () => new CreatorHashMismatchError());
createErrorFromNameLookup.set('CreatorHashMismatch', () => new CreatorHashMismatchError());
class DataHashMismatchError extends Error {
    constructor() {
        super('User-provided metadata must result in same user-provided data hash');
        this.code = 0x177a;
        this.name = 'DataHashMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, DataHashMismatchError);
        }
    }
}
exports.DataHashMismatchError = DataHashMismatchError;
createErrorFromCodeLookup.set(0x177a, () => new DataHashMismatchError());
createErrorFromNameLookup.set('DataHashMismatch', () => new DataHashMismatchError());
class CreatorsTooLongError extends Error {
    constructor() {
        super('Creators list too long');
        this.code = 0x177b;
        this.name = 'CreatorsTooLong';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CreatorsTooLongError);
        }
    }
}
exports.CreatorsTooLongError = CreatorsTooLongError;
createErrorFromCodeLookup.set(0x177b, () => new CreatorsTooLongError());
createErrorFromNameLookup.set('CreatorsTooLong', () => new CreatorsTooLongError());
class MetadataNameTooLongError extends Error {
    constructor() {
        super('Name in metadata is too long');
        this.code = 0x177c;
        this.name = 'MetadataNameTooLong';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MetadataNameTooLongError);
        }
    }
}
exports.MetadataNameTooLongError = MetadataNameTooLongError;
createErrorFromCodeLookup.set(0x177c, () => new MetadataNameTooLongError());
createErrorFromNameLookup.set('MetadataNameTooLong', () => new MetadataNameTooLongError());
class MetadataSymbolTooLongError extends Error {
    constructor() {
        super('Symbol in metadata is too long');
        this.code = 0x177d;
        this.name = 'MetadataSymbolTooLong';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MetadataSymbolTooLongError);
        }
    }
}
exports.MetadataSymbolTooLongError = MetadataSymbolTooLongError;
createErrorFromCodeLookup.set(0x177d, () => new MetadataSymbolTooLongError());
createErrorFromNameLookup.set('MetadataSymbolTooLong', () => new MetadataSymbolTooLongError());
class MetadataUriTooLongError extends Error {
    constructor() {
        super('Uri in metadata is too long');
        this.code = 0x177e;
        this.name = 'MetadataUriTooLong';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MetadataUriTooLongError);
        }
    }
}
exports.MetadataUriTooLongError = MetadataUriTooLongError;
createErrorFromCodeLookup.set(0x177e, () => new MetadataUriTooLongError());
createErrorFromNameLookup.set('MetadataUriTooLong', () => new MetadataUriTooLongError());
class MetadataBasisPointsTooHighError extends Error {
    constructor() {
        super('Basis points in metadata cannot exceed 10000');
        this.code = 0x177f;
        this.name = 'MetadataBasisPointsTooHigh';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MetadataBasisPointsTooHighError);
        }
    }
}
exports.MetadataBasisPointsTooHighError = MetadataBasisPointsTooHighError;
createErrorFromCodeLookup.set(0x177f, () => new MetadataBasisPointsTooHighError());
createErrorFromNameLookup.set('MetadataBasisPointsTooHigh', () => new MetadataBasisPointsTooHighError());
class TreeAuthorityIncorrectError extends Error {
    constructor() {
        super('Tree creator or tree delegate must sign.');
        this.code = 0x1780;
        this.name = 'TreeAuthorityIncorrect';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TreeAuthorityIncorrectError);
        }
    }
}
exports.TreeAuthorityIncorrectError = TreeAuthorityIncorrectError;
createErrorFromCodeLookup.set(0x1780, () => new TreeAuthorityIncorrectError());
createErrorFromNameLookup.set('TreeAuthorityIncorrect', () => new TreeAuthorityIncorrectError());
class InsufficientMintCapacityError extends Error {
    constructor() {
        super('Not enough unapproved mints left');
        this.code = 0x1781;
        this.name = 'InsufficientMintCapacity';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InsufficientMintCapacityError);
        }
    }
}
exports.InsufficientMintCapacityError = InsufficientMintCapacityError;
createErrorFromCodeLookup.set(0x1781, () => new InsufficientMintCapacityError());
createErrorFromNameLookup.set('InsufficientMintCapacity', () => new InsufficientMintCapacityError());
class NumericalOverflowErrorError extends Error {
    constructor() {
        super('NumericalOverflowError');
        this.code = 0x1782;
        this.name = 'NumericalOverflowError';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NumericalOverflowErrorError);
        }
    }
}
exports.NumericalOverflowErrorError = NumericalOverflowErrorError;
createErrorFromCodeLookup.set(0x1782, () => new NumericalOverflowErrorError());
createErrorFromNameLookup.set('NumericalOverflowError', () => new NumericalOverflowErrorError());
class IncorrectOwnerError extends Error {
    constructor() {
        super('Incorrect account owner');
        this.code = 0x1783;
        this.name = 'IncorrectOwner';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, IncorrectOwnerError);
        }
    }
}
exports.IncorrectOwnerError = IncorrectOwnerError;
createErrorFromCodeLookup.set(0x1783, () => new IncorrectOwnerError());
createErrorFromNameLookup.set('IncorrectOwner', () => new IncorrectOwnerError());
class CollectionCannotBeVerifiedInThisInstructionError extends Error {
    constructor() {
        super('Cannot Verify Collection in this Instruction');
        this.code = 0x1784;
        this.name = 'CollectionCannotBeVerifiedInThisInstruction';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionCannotBeVerifiedInThisInstructionError);
        }
    }
}
exports.CollectionCannotBeVerifiedInThisInstructionError = CollectionCannotBeVerifiedInThisInstructionError;
createErrorFromCodeLookup.set(0x1784, () => new CollectionCannotBeVerifiedInThisInstructionError());
createErrorFromNameLookup.set('CollectionCannotBeVerifiedInThisInstruction', () => new CollectionCannotBeVerifiedInThisInstructionError());
class CollectionNotFoundError extends Error {
    constructor() {
        super('Collection Not Found on Metadata');
        this.code = 0x1785;
        this.name = 'CollectionNotFound';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionNotFoundError);
        }
    }
}
exports.CollectionNotFoundError = CollectionNotFoundError;
createErrorFromCodeLookup.set(0x1785, () => new CollectionNotFoundError());
createErrorFromNameLookup.set('CollectionNotFound', () => new CollectionNotFoundError());
class AlreadyVerifiedError extends Error {
    constructor() {
        super('Collection item is already verified.');
        this.code = 0x1786;
        this.name = 'AlreadyVerified';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AlreadyVerifiedError);
        }
    }
}
exports.AlreadyVerifiedError = AlreadyVerifiedError;
createErrorFromCodeLookup.set(0x1786, () => new AlreadyVerifiedError());
createErrorFromNameLookup.set('AlreadyVerified', () => new AlreadyVerifiedError());
class AlreadyUnverifiedError extends Error {
    constructor() {
        super('Collection item is already unverified.');
        this.code = 0x1787;
        this.name = 'AlreadyUnverified';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AlreadyUnverifiedError);
        }
    }
}
exports.AlreadyUnverifiedError = AlreadyUnverifiedError;
createErrorFromCodeLookup.set(0x1787, () => new AlreadyUnverifiedError());
createErrorFromNameLookup.set('AlreadyUnverified', () => new AlreadyUnverifiedError());
class UpdateAuthorityIncorrectError extends Error {
    constructor() {
        super('Incorrect leaf metadata update authority.');
        this.code = 0x1788;
        this.name = 'UpdateAuthorityIncorrect';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UpdateAuthorityIncorrectError);
        }
    }
}
exports.UpdateAuthorityIncorrectError = UpdateAuthorityIncorrectError;
createErrorFromCodeLookup.set(0x1788, () => new UpdateAuthorityIncorrectError());
createErrorFromNameLookup.set('UpdateAuthorityIncorrect', () => new UpdateAuthorityIncorrectError());
class LeafAuthorityMustSignError extends Error {
    constructor() {
        super('This transaction must be signed by either the leaf owner or leaf delegate');
        this.code = 0x1789;
        this.name = 'LeafAuthorityMustSign';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, LeafAuthorityMustSignError);
        }
    }
}
exports.LeafAuthorityMustSignError = LeafAuthorityMustSignError;
createErrorFromCodeLookup.set(0x1789, () => new LeafAuthorityMustSignError());
createErrorFromNameLookup.set('LeafAuthorityMustSign', () => new LeafAuthorityMustSignError());
class CollectionMustBeSizedError extends Error {
    constructor() {
        super('Collection Not Compatable with Compression, Must be Sized');
        this.code = 0x178a;
        this.name = 'CollectionMustBeSized';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionMustBeSizedError);
        }
    }
}
exports.CollectionMustBeSizedError = CollectionMustBeSizedError;
createErrorFromCodeLookup.set(0x178a, () => new CollectionMustBeSizedError());
createErrorFromNameLookup.set('CollectionMustBeSized', () => new CollectionMustBeSizedError());
class MetadataMintMismatchError extends Error {
    constructor() {
        super('Metadata mint does not match collection mint');
        this.code = 0x178b;
        this.name = 'MetadataMintMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MetadataMintMismatchError);
        }
    }
}
exports.MetadataMintMismatchError = MetadataMintMismatchError;
createErrorFromCodeLookup.set(0x178b, () => new MetadataMintMismatchError());
createErrorFromNameLookup.set('MetadataMintMismatch', () => new MetadataMintMismatchError());
class InvalidCollectionAuthorityError extends Error {
    constructor() {
        super('Invalid collection authority');
        this.code = 0x178c;
        this.name = 'InvalidCollectionAuthority';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidCollectionAuthorityError);
        }
    }
}
exports.InvalidCollectionAuthorityError = InvalidCollectionAuthorityError;
createErrorFromCodeLookup.set(0x178c, () => new InvalidCollectionAuthorityError());
createErrorFromNameLookup.set('InvalidCollectionAuthority', () => new InvalidCollectionAuthorityError());
class InvalidDelegateRecordError extends Error {
    constructor() {
        super('Invalid delegate record pda derivation');
        this.code = 0x178d;
        this.name = 'InvalidDelegateRecord';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidDelegateRecordError);
        }
    }
}
exports.InvalidDelegateRecordError = InvalidDelegateRecordError;
createErrorFromCodeLookup.set(0x178d, () => new InvalidDelegateRecordError());
createErrorFromNameLookup.set('InvalidDelegateRecord', () => new InvalidDelegateRecordError());
class CollectionMasterEditionAccountInvalidError extends Error {
    constructor() {
        super('Edition account doesnt match collection');
        this.code = 0x178e;
        this.name = 'CollectionMasterEditionAccountInvalid';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionMasterEditionAccountInvalidError);
        }
    }
}
exports.CollectionMasterEditionAccountInvalidError = CollectionMasterEditionAccountInvalidError;
createErrorFromCodeLookup.set(0x178e, () => new CollectionMasterEditionAccountInvalidError());
createErrorFromNameLookup.set('CollectionMasterEditionAccountInvalid', () => new CollectionMasterEditionAccountInvalidError());
class CollectionMustBeAUniqueMasterEditionError extends Error {
    constructor() {
        super('Collection Must Be a Unique Master Edition v2');
        this.code = 0x178f;
        this.name = 'CollectionMustBeAUniqueMasterEdition';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionMustBeAUniqueMasterEditionError);
        }
    }
}
exports.CollectionMustBeAUniqueMasterEditionError = CollectionMustBeAUniqueMasterEditionError;
createErrorFromCodeLookup.set(0x178f, () => new CollectionMustBeAUniqueMasterEditionError());
createErrorFromNameLookup.set('CollectionMustBeAUniqueMasterEdition', () => new CollectionMustBeAUniqueMasterEditionError());
class UnknownExternalErrorError extends Error {
    constructor() {
        super('Could not convert external error to BubblegumError');
        this.code = 0x1790;
        this.name = 'UnknownExternalError';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UnknownExternalErrorError);
        }
    }
}
exports.UnknownExternalErrorError = UnknownExternalErrorError;
createErrorFromCodeLookup.set(0x1790, () => new UnknownExternalErrorError());
createErrorFromNameLookup.set('UnknownExternalError', () => new UnknownExternalErrorError());
class DecompressionDisabledError extends Error {
    constructor() {
        super('Decompression is disabled for this tree.');
        this.code = 0x1791;
        this.name = 'DecompressionDisabled';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, DecompressionDisabledError);
        }
    }
}
exports.DecompressionDisabledError = DecompressionDisabledError;
createErrorFromCodeLookup.set(0x1791, () => new DecompressionDisabledError());
createErrorFromNameLookup.set('DecompressionDisabled', () => new DecompressionDisabledError());
class MissingCollectionMintAccountError extends Error {
    constructor() {
        super('Missing collection mint account');
        this.code = 0x1792;
        this.name = 'MissingCollectionMintAccount';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MissingCollectionMintAccountError);
        }
    }
}
exports.MissingCollectionMintAccountError = MissingCollectionMintAccountError;
createErrorFromCodeLookup.set(0x1792, () => new MissingCollectionMintAccountError());
createErrorFromNameLookup.set('MissingCollectionMintAccount', () => new MissingCollectionMintAccountError());
class MissingCollectionMetadataAccountError extends Error {
    constructor() {
        super('Missing collection metadata account');
        this.code = 0x1793;
        this.name = 'MissingCollectionMetadataAccount';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MissingCollectionMetadataAccountError);
        }
    }
}
exports.MissingCollectionMetadataAccountError = MissingCollectionMetadataAccountError;
createErrorFromCodeLookup.set(0x1793, () => new MissingCollectionMetadataAccountError());
createErrorFromNameLookup.set('MissingCollectionMetadataAccount', () => new MissingCollectionMetadataAccountError());
class CollectionMismatchError extends Error {
    constructor() {
        super('Collection mismatch');
        this.code = 0x1794;
        this.name = 'CollectionMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionMismatchError);
        }
    }
}
exports.CollectionMismatchError = CollectionMismatchError;
createErrorFromCodeLookup.set(0x1794, () => new CollectionMismatchError());
createErrorFromNameLookup.set('CollectionMismatch', () => new CollectionMismatchError());
class MetadataImmutableError extends Error {
    constructor() {
        super('Metadata not mutable');
        this.code = 0x1795;
        this.name = 'MetadataImmutable';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MetadataImmutableError);
        }
    }
}
exports.MetadataImmutableError = MetadataImmutableError;
createErrorFromCodeLookup.set(0x1795, () => new MetadataImmutableError());
createErrorFromNameLookup.set('MetadataImmutable', () => new MetadataImmutableError());
class PrimarySaleCanOnlyBeFlippedToTrueError extends Error {
    constructor() {
        super('Can only update primary sale to true');
        this.code = 0x1796;
        this.name = 'PrimarySaleCanOnlyBeFlippedToTrue';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PrimarySaleCanOnlyBeFlippedToTrueError);
        }
    }
}
exports.PrimarySaleCanOnlyBeFlippedToTrueError = PrimarySaleCanOnlyBeFlippedToTrueError;
createErrorFromCodeLookup.set(0x1796, () => new PrimarySaleCanOnlyBeFlippedToTrueError());
createErrorFromNameLookup.set('PrimarySaleCanOnlyBeFlippedToTrue', () => new PrimarySaleCanOnlyBeFlippedToTrueError());
class CreatorDidNotUnverifyError extends Error {
    constructor() {
        super('Creator did not unverify the metadata');
        this.code = 0x1797;
        this.name = 'CreatorDidNotUnverify';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CreatorDidNotUnverifyError);
        }
    }
}
exports.CreatorDidNotUnverifyError = CreatorDidNotUnverifyError;
createErrorFromCodeLookup.set(0x1797, () => new CreatorDidNotUnverifyError());
createErrorFromNameLookup.set('CreatorDidNotUnverify', () => new CreatorDidNotUnverifyError());
function errorFromCode(code) {
    const createError = createErrorFromCodeLookup.get(code);
    return createError != null ? createError() : null;
}
exports.errorFromCode = errorFromCode;
function errorFromName(name) {
    const createError = createErrorFromNameLookup.get(name);
    return createError != null ? createError() : null;
}
exports.errorFromName = errorFromName;
//# sourceMappingURL=index.js.map
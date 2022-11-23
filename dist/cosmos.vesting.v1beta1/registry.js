import { MsgCreatePermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreateVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
var msgTypes = [
    [
        "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
        MsgCreatePermanentLockedAccount
    ],
    [
        "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        MsgCreateVestingAccount
    ],
    [
        "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        MsgCreatePeriodicVestingAccount
    ]
];
export { msgTypes };

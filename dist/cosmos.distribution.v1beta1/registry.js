import { MsgSetWithdrawAddress } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawValidatorCommission } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgFundCommunityPool } from "./types/cosmos/distribution/v1beta1/tx";
var msgTypes = [
    [
        "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        MsgSetWithdrawAddress
    ],
    [
        "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        MsgWithdrawDelegatorReward
    ],
    [
        "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        MsgWithdrawValidatorCommission
    ],
    [
        "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        MsgFundCommunityPool
    ]
];
export { msgTypes };

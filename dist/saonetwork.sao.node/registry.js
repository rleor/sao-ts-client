import { MsgLogout } from "./types/sao/node/tx";
import { MsgLogin } from "./types/sao/node/tx";
import { MsgClaimReward } from "./types/sao/node/tx";
import { MsgReset } from "./types/sao/node/tx";
var msgTypes = [
    [
        "/saonetwork.sao.node.MsgLogout",
        MsgLogout
    ],
    [
        "/saonetwork.sao.node.MsgLogin",
        MsgLogin
    ],
    [
        "/saonetwork.sao.node.MsgClaimReward",
        MsgClaimReward
    ],
    [
        "/saonetwork.sao.node.MsgReset",
        MsgReset
    ]
];
export { msgTypes };

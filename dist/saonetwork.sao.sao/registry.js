import { MsgStore } from "./types/sao/sao/tx";
import { MsgCancel } from "./types/sao/sao/tx";
import { MsgReady } from "./types/sao/sao/tx";
import { MsgReject } from "./types/sao/sao/tx";
import { MsgComplete } from "./types/sao/sao/tx";
import { MsgTerminate } from "./types/sao/sao/tx";
var msgTypes = [
    [
        "/saonetwork.sao.sao.MsgStore",
        MsgStore
    ],
    [
        "/saonetwork.sao.sao.MsgCancel",
        MsgCancel
    ],
    [
        "/saonetwork.sao.sao.MsgReady",
        MsgReady
    ],
    [
        "/saonetwork.sao.sao.MsgReject",
        MsgReject
    ],
    [
        "/saonetwork.sao.sao.MsgComplete",
        MsgComplete
    ],
    [
        "/saonetwork.sao.sao.MsgTerminate",
        MsgTerminate
    ]
];
export { msgTypes };

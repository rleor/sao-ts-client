import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgTerminate } from "./types/sao/sao/tx";
import { MsgCancel } from "./types/sao/sao/tx";
import { MsgStore } from "./types/sao/sao/tx";
import { MsgComplete } from "./types/sao/sao/tx";
import { MsgReject } from "./types/sao/sao/tx";
import { MsgReady } from "./types/sao/sao/tx";
import { MsgRenew } from "./types/sao/sao/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/saonetwork.sao.sao.MsgTerminate", MsgTerminate],
    ["/saonetwork.sao.sao.MsgCancel", MsgCancel],
    ["/saonetwork.sao.sao.MsgStore", MsgStore],
    ["/saonetwork.sao.sao.MsgComplete", MsgComplete],
    ["/saonetwork.sao.sao.MsgReject", MsgReject],
    ["/saonetwork.sao.sao.MsgReady", MsgReady],
    ["/saonetwork.sao.sao.MsgRenew", MsgRenew],
    
];

export { msgTypes }
import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAddBinding } from "./types/sao/did/tx";
import { MsgUpdateAccountAuths } from "./types/sao/did/tx";
import { MsgUnbinding } from "./types/sao/did/tx";
import { MsgAddAccountAuth } from "./types/sao/did/tx";
import { MsgUpdateSidDocument } from "./types/sao/did/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/saonetwork.sao.did.MsgAddBinding", MsgAddBinding],
    ["/saonetwork.sao.did.MsgUpdateAccountAuths", MsgUpdateAccountAuths],
    ["/saonetwork.sao.did.MsgUnbinding", MsgUnbinding],
    ["/saonetwork.sao.did.MsgAddAccountAuth", MsgAddAccountAuth],
    ["/saonetwork.sao.did.MsgUpdateSidDocument", MsgUpdateSidDocument],
    
];

export { msgTypes }
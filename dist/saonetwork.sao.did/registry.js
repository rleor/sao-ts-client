import { MsgAddAccountAuth } from "./types/sao/did/tx";
import { MsgAddBinding } from "./types/sao/did/tx";
import { MsgUpdateSidDocument } from "./types/sao/did/tx";
import { MsgUnbinding } from "./types/sao/did/tx";
import { MsgAddPastSeed } from "./types/sao/did/tx";
import { MsgUpdateAccountAuths } from "./types/sao/did/tx";
var msgTypes = [
    [
        "/saonetwork.sao.did.MsgAddAccountAuth",
        MsgAddAccountAuth
    ],
    [
        "/saonetwork.sao.did.MsgAddBinding",
        MsgAddBinding
    ],
    [
        "/saonetwork.sao.did.MsgUpdateSidDocument",
        MsgUpdateSidDocument
    ],
    [
        "/saonetwork.sao.did.MsgUnbinding",
        MsgUnbinding
    ],
    [
        "/saonetwork.sao.did.MsgAddPastSeed",
        MsgAddPastSeed
    ],
    [
        "/saonetwork.sao.did.MsgUpdateAccountAuths",
        MsgUpdateAccountAuths
    ]
];
export { msgTypes };

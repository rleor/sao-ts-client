import { MsgAddBinding } from "./types/sao/did/tx";
import { MsgUpdateAccountAuths } from "./types/sao/did/tx";
import { MsgUnbinding } from "./types/sao/did/tx";
import { MsgAddAccountAuth } from "./types/sao/did/tx";
import { MsgUpdateSidDocument } from "./types/sao/did/tx";
var msgTypes = [
    [
        "/saonetwork.sao.did.MsgAddBinding",
        MsgAddBinding
    ],
    [
        "/saonetwork.sao.did.MsgUpdateAccountAuths",
        MsgUpdateAccountAuths
    ],
    [
        "/saonetwork.sao.did.MsgUnbinding",
        MsgUnbinding
    ],
    [
        "/saonetwork.sao.did.MsgAddAccountAuth",
        MsgAddAccountAuth
    ],
    [
        "/saonetwork.sao.did.MsgUpdateSidDocument",
        MsgUpdateSidDocument
    ]
];
export { msgTypes };

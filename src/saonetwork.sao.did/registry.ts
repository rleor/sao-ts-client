import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAddAccountAuth } from "./types/sao/did/tx";
import { MsgUpdateAccountAuths } from "./types/sao/did/tx";
import { MsgResetStore } from "./types/sao/did/tx";
import { MsgAddPastSeed } from "./types/sao/did/tx";
import { MsgUnbinding } from "./types/sao/did/tx";
import { MsgAddBinding } from "./types/sao/did/tx";
import { MsgCleanupSidDocuments } from "./types/sao/did/tx";
import { MsgUpdateSidDocument } from "./types/sao/did/tx";
import { MsgCleanupPastSeeds } from "./types/sao/did/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/saonetwork.sao.did.MsgAddAccountAuth", MsgAddAccountAuth],
    ["/saonetwork.sao.did.MsgUpdateAccountAuths", MsgUpdateAccountAuths],
    ["/saonetwork.sao.did.MsgResetStore", MsgResetStore],
    ["/saonetwork.sao.did.MsgAddPastSeed", MsgAddPastSeed],
    ["/saonetwork.sao.did.MsgUnbinding", MsgUnbinding],
    ["/saonetwork.sao.did.MsgAddBinding", MsgAddBinding],
    ["/saonetwork.sao.did.MsgCleanupSidDocuments", MsgCleanupSidDocuments],
    ["/saonetwork.sao.did.MsgUpdateSidDocument", MsgUpdateSidDocument],
    ["/saonetwork.sao.did.MsgCleanupPastSeeds", MsgCleanupPastSeeds],
    
];

export { msgTypes }
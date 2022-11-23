import { MsgVote } from "./types/cosmos/gov/v1/tx";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1/tx";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1/tx";
var msgTypes = [
    [
        "/cosmos.gov.v1.MsgVote",
        MsgVote
    ],
    [
        "/cosmos.gov.v1.MsgVoteWeighted",
        MsgVoteWeighted
    ],
    [
        "/cosmos.gov.v1.MsgDeposit",
        MsgDeposit
    ],
    [
        "/cosmos.gov.v1.MsgSubmitProposal",
        MsgSubmitProposal
    ]
];
export { msgTypes };

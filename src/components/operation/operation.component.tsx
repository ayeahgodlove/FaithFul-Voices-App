import { Space } from "antd";
import React from "react";
import { BiHeart, BiShareAlt, BiDotsHorizontal, BiAddToQueue} from "react-icons/bi"
import { PRIMARY_COLOR } from "../../utils/utilities";

export const Operation: React.FC = () => {
    return <div style={OperationStyle}>
        <Space> 
            <BiHeart size={20} color={PRIMARY_COLOR} /> 
            <BiShareAlt size={20}  color={PRIMARY_COLOR} /> 
            <BiDotsHorizontal size={20} color={PRIMARY_COLOR} />
            <BiAddToQueue size={20} color={PRIMARY_COLOR} />
        </Space>
    </div>
}

const OperationStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
}
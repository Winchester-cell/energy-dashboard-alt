import { useCallback } from "react";
import { Position, Handle } from '@xyflow/react';

export function TextUpdaterNode(props) {

    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node bg-gray-500  rounded-xl text-[10px] w-[120px] h-[20px] py-3 ps-5">
            <div className="w-full h-full flex items-center">
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} />
            </div>
            <Handle type="source" position={Position.Top} />
            <Handle type="target" position={Position.Bottom} />
        </div>
    );
}
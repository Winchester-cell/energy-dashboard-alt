import React from 'react'
import { Position, Handle } from '@xyflow/react';


export default function DeviceSerialNode() {
    return (
        <div>
            <div className='py-5 px-10 text-[var(--colTextB)] bg-[var(--colBg)] text-sm rounded-full'>سریال دستگاه : SN002</div>
            {/* Top Handle: input */}
            <Handle type="target" position={Position.Top} id="top" />
            {/* Bottom Handle: output */}
            <Handle type="source" position={Position.Bottom} id="bottom" />
            {/* Left Handle: input */}
            <Handle type="target" position={Position.Left} id="left" />
            {/* Right Handle: output */}
            <Handle type="source" position={Position.Right} id="right" />
        </div>
    )
}

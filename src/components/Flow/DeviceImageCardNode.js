import { Position, Handle } from '@xyflow/react';
import React from 'react'
import { BiSolidCameraHome } from "react-icons/bi";


export default function DeviceImageCardNode() {


    return (
        <div className='p-5 bg-[var(--colBg)] rounded-2xl'>
            <BiSolidCameraHome className='text-[var(--colTextB)] w-[200px] h-[200px]' />
            {/* Top Handle: input */}
            <Handle type="target" position={Position.Top} id="top" />
            {/* Bottom Handle: output */}
            <Handle type="source" position={Position.Bottom} id="bottom" />
            {/* Left Handle: input */}
            <Handle type="target" position={Position.Left} className='top-[20%]' id="left-0" />
            <Handle type="target" position={Position.Left} className='top-[50%]' id="left-1" />
            <Handle type="target" position={Position.Left} className='top-[80%]' id="left-2" />
            {/* Right Handle: output */}
            <Handle type="source" position={Position.Right} id="right" />
        </div>
    )
}



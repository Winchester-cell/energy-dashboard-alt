'use client'
import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Controls, MiniMap, Background } from '@xyflow/react';
import { TextUpdaterNode } from '@/components/Flow/TextUpdaterNode';
import DeviceImageCardNode from '@/components/Flow/DeviceImageCardNode';
import DeviceNameCardNode from '@/components/Flow/DeviceNameCardNode';
import DeviceSerialNode from '@/components/Flow/DeviceSerialNode';


const nodeTypes = {
    textUpdater: TextUpdaterNode,
    deviceImage: DeviceImageCardNode,
    deviceName: DeviceNameCardNode,
    deviceSerial: DeviceSerialNode,
};


const initialNodes = [
    {
        id: 'node-1',
        type: 'deviceImage',
        position: { x: 0, y: 0 },
        draggable: true
    },
    {
        id: 'node-2',
        type: 'deviceName',
        position: { x: 0, y: 70 },
        draggable: true
    },
    {
        id: 'node-3',
        type: 'textUpdater',
        position: { x: 0, y: 140 },
        draggable: true
    },
    {
        id: 'node-4',
        type: 'deviceSerial',
        position: { x: 0, y: 140 },
        draggable: true
    },
];


export default function Flow() {

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);

    const onNodesChange = useCallback(
        (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    // const onConnect = useCallback((params) => {
    //     // اجازه میده هر هندل به هر هندل وصل بشه
    //     setEdges((eds) => addEdge({ ...params, type: 'default' }, eds));
    // }, []);


    const getPose = () => {
        console.log(nodes);
        console.log(edges);
    }

    return (
        <div className='p-5'>
            <div className='w-full h-[84dvh] rounded-2xl relative'>
                <button onClick={getPose} className='absolute z-50 top-5 left-5 bg-[var(--colBg)] p-5'>GET Pose</button>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onConnect={onConnect}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    proOptions={{ hideAttribution: true }}
                    connectionMode={'Loose'}
                    // fitView
                    // onMoveEnd={(evt, viewport) => {
                    //     console.log("Zoom:", viewport.zoom);
                    //     console.log("Position:", viewport.x, viewport.y);
                    // }}
                    // defaultViewport={defaultViewport}
                >
                    <Background style={{ padding: 20, borderRadius: 20 }} bgColor='var(--colCard)' className='shadow-lg' />
                    <Controls />
                    <MiniMap nodeColor={'var(--colCard)'} maskColor='transparent' />
                </ReactFlow>
            </div>
        </div>
    );
}
'use client'
import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Controls, MiniMap, Background } from '@xyflow/react';
import { TextUpdaterNode } from '@/components/Flow/TextUpdaterNode';


const nodeTypes = {
    textUpdater: TextUpdaterNode,
};


const initialNodes = [
    {
        id: 'node-1',
        type: 'textUpdater',
        position: { x: 0, y: 0 },
        draggable: true
    },
    {
        id: 'node-2',
        type: 'textUpdater',
        position: { x: 0, y: 70 },
        draggable: true
    },
    {
        id: 'node-3',
        type: 'textUpdater',
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

    return (
        <div className='p-5'>
            <div className='w-full h-[84dvh] rounded-2xl'>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onConnect={onConnect}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    proOptions={{ hideAttribution: true }} 
                    fitView
                >
                    <Background style={{padding:20 , borderRadius:20}} bgColor='var(--colCard)' className='shadow-lg'/>
                    <Controls/>
                    <MiniMap nodeColor={'var(--colCard)'} maskColor='transparent'/>
                </ReactFlow>
            </div>
        </div>
    );
}
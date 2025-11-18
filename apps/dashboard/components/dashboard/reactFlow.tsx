"use client"
import React, { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { IconFileText } from '@tabler/icons-react';
import { he } from 'zod/locales';


const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const initialNodes = [
  {
    id: '1',
    position: { x: 900, y: 150 },
    data: { label:<span className='text-black'>handler</span> },
    ...nodeDefaults,
  },
  {
    id: '2',
    position: { x: 250, y: 0 },
    data: { label: <span className='text-black flex items-center gap-2'>Node 14 <IconFileText size={20} /></span>},
    ...nodeDefaults,
  },
  {
    id: '3',
    position: { x: 250, y: 150 },
    data: { label: <span  className='text-black flex items-center gap-2'>Node 11 <IconFileText size={20} /></span> },
    ...nodeDefaults,
  },
  {
    id: '4',
    position: { x: 250, y: 300 },
     style: {
      backgroundColor: "grey",
      color: "white",
      border: "2px solid black",
      borderRadius: "8px",
      padding: 10,
      width: "100px",
      height: "300px"

    },
    data: { label: <span  className='text-black flex items-center gap-2'>Node 12 <IconFileText size={20} /></span>},
    ...nodeDefaults,
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '2',
    target: '1',
    animated: true,
  },
  {
    id: 'e1-3',
    source: '3',
    target: '1',
    animated:true,
  },
  {
    id: 'e1-4',
    source: '4',
    target: '1',
  },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    [],
  );

  return (
   <div className='w-full h-[100%]'> 
     <ReactFlow
     
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <Controls  className='dark:text-zinc-800'/>
      <MiniMap />
    </ReactFlow>
   </div>
  );
};

export default Flow;

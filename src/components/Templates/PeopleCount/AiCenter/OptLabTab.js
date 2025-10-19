import AiSimMapNode from '@/components/FlowNodes/AiSimMapNode';
import { toPersianDigits } from '@/utils/formaters/toPersianDigits';
import { addEdge } from '@xyflow/react';
import { applyEdgeChanges, applyNodeChanges, Background, Controls, MiniMap, ReactFlow } from '@xyflow/react';
import React, { useCallback, useEffectEvent, useState } from 'react'


const nodeTypes = {
  aiSimNode: AiSimMapNode,
};


const initialNodes = [
  {
    "id": "node-1",
    "type": "aiSimNode",
    "data": {
      "name": "🅿️🚘 پارکینگ یک",
      "percent": 90
    },
    "position": {
      "x": 80,
      "y": 358
    },
    "draggable": true,
    "measured": {
      "width": 250,
      "height": 94
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "node-2",
    "type": "aiSimNode",
    "data": {
      "name": "🅿️🚘 پارکینگ دو",
      "percent": 80
    },
    "position": {
      "x": 398,
      "y": 352
    },
    "draggable": true,
    "measured": {
      "width": 250,
      "height": 94
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "node-3",
    "type": "aiSimNode",
    "data": {
      "name": "🅿️🚘 پارکینگ سه",
      "percent": 70
    },
    "position": {
      "x": 713,
      "y": 344
    },
    "draggable": true,
    "measured": {
      "width": 250,
      "height": 94
    },
    "selected": true,
    "dragging": false
  },
  {
    "id": "node-4",
    "type": "aiSimNode",
    "data": {
      "name": "🧋🍴 کافه و رستوران",
      "percent": 70
    },
    "position": {
      "x": 402,
      "y": 59
    },
    "draggable": true,
    "measured": {
      "width": 250,
      "height": 94
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "node-5",
    "type": "aiSimNode",
    "data": {
      "name": "🏢 ساختمان مرکزی",
      "percent": 70
    },
    "position": {
      "x": 411,
      "y": 200
    },
    "draggable": true,
    "measured": {
      "width": 250,
      "height": 94
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "node-6",
    "type": "aiSimNode",
    "data": {
      "name": "🏢 ساختمان شرقی",
      "percent": 70
    },
    "position": {
      "x": 710,
      "y": 202
    },
    "draggable": true,
    "measured": {
      "width": 250,
      "height": 94
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "node-7",
    "type": "aiSimNode",
    "data": {
      "name": "🏢 ساختمان غربی",
      "percent": 70
    },
    "position": {
      "x": 77,
      "y": 202
    },
    "draggable": true,
    "measured": {
      "width": 250,
      "height": 94
    },
    "selected": false,
    "dragging": false
  }
]


export default function OptLabTab() {

  const [rangeValue, setRangeValue] = useState(70)
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

  const resetPose = () => {
    setNodes(initialNodes)
  }

  return (
    <div className='p-5 bg-[var(--colCard)] rounded-2xl'>

      <div className='bg-[var(--colBg)] p-5 rounded-2xl shadow-inner'>
        <h2 className='text-xl font-bold'>🔬 آزمایشگاه بهینه‌سازی</h2>
        <p className='text-[var(--colTextB)] mt-3'>شبیه‌سازی و بهینه‌سازی چیدمان فضا با هوش مصنوعی</p>
      </div>

      <div className='flex gap-5 mt-5'>

        {/* flow section */}
        <div className='bg-[var(--colBg)] p-5 w-[calc(100%-290px)] rounded-2xl shadow-inner relative'>
          <div></div>
          <button onClick={resetPose} className='absolute z-50 top-10 left-10 bg-[var(--colBg)] px-5 py-2 rounded-full'>Reset</button>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            proOptions={{ hideAttribution: true }}
            connectionMode={'Loose'}
          >
            <Background style={{ padding: 20, borderRadius: 20 }} bgColor='var(--colCard)' className='shadow-lg' />
            <Controls />
            <MiniMap nodeColor={'var(--colCard)'} maskColor='transparent' />
          </ReactFlow>
        </div>

        {/* senario test section */}
        <div className='bg-[var(--colBg)] p-5 w-[290px] rounded-2xl shadow-inner flex flex-col gap-4'>
          <h2 className='bg-[var(--colCard)] font-semibold shadow-md p-3 rounded-xl'>🎯 سناریوی "چه می‌شود اگر؟"</h2>
          <div className='bg-[var(--colCard)] shadow-md p-3 rounded-xl flex flex-col gap-2'>
            <div>افزایش تردد</div>
            <input value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} type="range" min={0} max={100} className='block w-full accent-blue-500' />
            <div className='flex items-center justify-between text-[var(--colTextB)]'>
              <span>0%</span>
              <span className='text-blue-500'>{rangeValue}%</span>
              <span>100%</span>
            </div>
          </div>
          <div className='bg-[var(--colCard)] shadow-md p-3 rounded-xl'>
            <div>نوع رویداد</div>
            <select className='block w-full rounded-xl p-2 bg-[var(--colCard)] mt-2'>
              <option>روز عادی</option>
              <option>حراج ویژه</option>
              <option>تعطیلات</option>
            </select>
          </div>
          <button className='bg-blue-600 shadow-md p-3 rounded-xl text-white'>🚀 اجرای شبیه‌سازی</button>

          <div className='bg-[var(--colCard)] shadow-md px-3 py-5 flex flex-col gap-5 rounded-xl'>
            <h2 className='font-semibold mb-3'>📊 نتایج پیش‌بینی</h2>

            <div className='w-full px-2'>
              <div className='flex items-center justify-between'>
                <span className='text-[var(--colTextB)]'>بهبود جریان:</span>
                <span className='text-emerald-500'>{toPersianDigits('+12%')}</span>
              </div>
              <div className='w-full h-[10px] bg-gray-400 rounded-full overflow-hidden mt-2'>
                <div className='h-full w-[12%] bg-emerald-600' />
              </div>
            </div>

            <div className='w-full px-2'>
              <div className='flex items-center justify-between'>
                <span className='text-[var(--colTextB)]'>کاهش ازدحام:</span>
                <span className='text-blue-500'>{toPersianDigits('-8%')}</span>
              </div>
              <div className='w-full h-[10px] bg-gray-400 rounded-full overflow-hidden mt-2'>
                <div className='h-full w-[12%] bg-blue-600' />
              </div>
            </div>

            <div className='w-full px-2'>
              <div className='flex items-center justify-between'>
                <span className='text-[var(--colTextB)]'>افزایش فروش:</span>
                <span className='text-purple-500'>{toPersianDigits('+5%')}</span>
              </div>
              <div className='w-full h-[10px] bg-gray-400 rounded-full overflow-hidden mt-2'>
                <div className='h-full w-[12%] bg-purple-600' />
              </div>
            </div>

            <div className='w-full px-2'>
              <div className='flex items-center justify-between'>
                <span className='text-[var(--colTextB)]'>رضایت مشتری:</span>
                <span className='text-orange-500'>{toPersianDigits('+15%')}</span>
              </div>
              <div className='w-full h-[10px] bg-gray-400 rounded-full overflow-hidden mt-2'>
                <div className='h-full w-[12%] bg-orange-600' />
              </div>
            </div>

          </div>


        </div>
      </div>

      <div className='bg-[var(--colBg)] p-5 rounded-2xl shadow-inner mt-5'>

        <h2 className='font-semibold text-xl'>🤖 توصیه‌های هوش مصنوعی</h2>

        <div className='grid grid-cols-3 gap-5 mt-5'>

          <div className='bg-[var(--colCard)] shadow-lg p-5 rounded-2xl'>
            <h2 className='text-lg font-semibold drop-shadow-md'>💡 بهینه‌سازی مسیرمصنوعی</h2>
            <p className='text-[var(--colTextB)] mt-3'>انتقال کافه به نزدیکی ورودی می‌تواند تردد را 18% افزایش دهد.</p>
          </div>

          <div className='bg-[var(--colCard)] shadow-lg p-5 rounded-2xl'>
            <h2 className='text-lg font-semibold drop-shadow-md'>⚡ کاهش صف</h2>
            <p className='text-[var(--colTextB)] mt-3'>افزودن یک صندوق اضافی می‌تواند زمان انتظار را 25% کاهش دهد.</p>
          </div>

          <div className='bg-[var(--colCard)] shadow-lg p-5 rounded-2xl'>
            <h2 className='text-lg font-semibold drop-shadow-md'>🎯 نقطه تمرکز</h2>
            <p className='text-[var(--colTextB)] mt-3'>ایجاد یک نقطه جذب در مرکز فضا می‌تواند توزیع تردد را بهبود بخشد.</p>
          </div>

        </div>

      </div>


      <div className='flex'>
        <div className='w-1/2'>
          <button draggable></button>
        </div>
        <div className='w-1/2'>

        </div>
      </div>



    </div>
  )
}

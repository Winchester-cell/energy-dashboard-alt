import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { factories } from "@/data/fakeData";
import TreeCard from "../../Cards/TreeCard";

const renderNode = (node) => (
    <TreeNode
        label={
            <TreeCard />
        }
        key={node.id}
    >
        {node.children &&
            node.children.map((child) => renderNode(child))}
    </TreeNode>
);


const FactoryTree = () => {
    return (
        <div className="w-full h-full overflow-y-auto overflow-x-auto ">
            <div className="scale-[0.5] origin-top-left">
                {factories.map((factory) => (
                    <Tree
                        lineWidth="2px"
                        lineColor="var(--colTextA)"
                        key={factory.id}
                        label={
                            <TreeCard />
                        }
                    >
                        {factory.children &&
                            factory.children.map((child) => renderNode(child))}
                    </Tree>
                ))}
            </div>
        </div>
    );
};



export default FactoryTree;

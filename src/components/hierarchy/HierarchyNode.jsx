import React from 'react'
import './hierarchy-chart.scss'

/**
 * HierarchyNode component - renders individual nodes in the hierarchy chart
 * @param {Object} props
 * @param {Object} props.node - The node data
 * @param {string} props.direction - 'vertical' or 'horizontal'
 * @param {Function} props.renderNode - Function to render the node content
 * @param {boolean} props.hasParent - Whether this node has a parent
 */
export const HierarchyNode = ({ node, direction, renderNode, hasParent = false }) => {
  const hasChildren = node.childs && node.childs.length > 0

  return (
    <div className={`react-hierarchy-node-container react-hierarchy-node-container-${direction}`}>
      <div className={`react-hierarchy-node react-hierarchy-node-${direction}`}>
        {/* Parent connection line */}
        {hasParent && (
          <div className={`node-line node-line-${direction}`} />
        )}
        
        {/* Node content */}
          {renderNode(node)}
        
        {/* Child connection line */}
        {hasChildren && (
          <div className={`node-line node-line-${direction}`} />
        )}
      </div>
      
      {/* Children nodes */}
      {hasChildren && (
        <div className={`react-hierarchy-children react-hierarchy-children-${direction}`}>
          {node.childs.map((child, index) => {
            const isLastChild = index === node.childs.length - 1
            
            return (
              <div 
                className={`children-container children-container-${direction}`} 
                key={`HierarchyNodeChild${child.key || Date.now()}`}
              >
                {/* Connection lines */}
                <div className={`lines-container lines-container-${direction}`}>
                  <div className="lines" />
                  <div className="m-line" />
                  <div className="lines" />
                </div>
                
                {/* Recursive child node */}
                <HierarchyNode 
                  node={child} 
                  direction={direction} 
                  renderNode={renderNode} 
                  hasParent={true} 
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

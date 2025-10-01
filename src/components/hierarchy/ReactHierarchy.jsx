import React from 'react'
import { HierarchyNode } from './HierarchyNode'
import './hierarchy-chart.scss'

/**
 * ReactHierarchy component - main component for rendering hierarchy charts
 * @param {Object} props
 * @param {Array} props.nodes - Array of root nodes
 * @param {string} props.direction - 'vertical' or 'horizontal'
 * @param {Function} props.renderNode - Function to render node content
 */
export const ReactHierarchy = ({ nodes, direction = 'vertical', renderNode }) => {
  return (
    <div className="react-hierarchy-container" key={Date.now()}>
      {nodes.map((node, index) => (
        <div
          className={`react-hierarchy-root-${direction}`}
          key={`HierarchyNodeP${node.key || Date.now()}`}
        >
          <HierarchyNode
            node={node}
            direction={direction}
            renderNode={renderNode}
          />
        </div>
      ))}
    </div>
  )
}

// Export with the original library's name for compatibility
export const ReactHierarchyChart = ReactHierarchy

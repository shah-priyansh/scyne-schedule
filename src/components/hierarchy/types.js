/**
 * Node interface for hierarchy chart
 */
export const NodeShape = {
  key: String,
  cssClass: String,
  childs: Array
}

/**
 * Props for HierarchyNode component
 */
export const HierarchyNodeProps = {
  node: Object,
  direction: String, // 'vertical' | 'horizontal'
  renderNode: Function,
  hasParent: Boolean
}

/**
 * Props for ReactHierarchy component
 */
export const ReactHierarchyProps = {
  nodes: Array,
  direction: String, // 'vertical' | 'horizontal'
  renderNode: Function
}

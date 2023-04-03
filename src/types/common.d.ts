interface Props extends Record<string, unknown> {
  children?: Block[]
}

interface Block {
  /**
   * The name of the block / module.
   */
  name?: string
  /**
   * The props associated with said block / module.
   * These are treated as component props.
   */
  props?: Props
}

interface Page extends Record<string, unknown> {
  /**
   * An array of blocks / modules associated with a page.
   */
  blocks?: Block[]
}

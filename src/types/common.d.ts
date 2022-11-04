interface Props extends Record<string, unknown> {
  children?: Block[]
}

interface Block {
  name?: string
  props?: Props
}

interface Page extends Record<string, unknown> {
  blocks?: Block[]
}

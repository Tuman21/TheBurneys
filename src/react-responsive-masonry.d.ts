declare module 'react-responsive-masonry' {
  import type { ReactNode } from 'react'

  interface MasonryProps {
    columnsCount?: number
    gutter?: string
    children?: ReactNode
  }

  export default function Masonry(props: MasonryProps): ReactNode
}

import { Content, Trigger, Root, Arrow } from '@radix-ui/react-tooltip'
import { FunctionComponent } from "react";
import * as styles from './Tooltip.css'

// @ts-expect-error
const TooltipContent: typeof Content = function ({ children, className = '', ...props }) {
  return (
    <Content {...props} className={`${styles.content} ${className}`}>
      <Arrow fill='white' />
      {children}
    </Content>

  )
}

type TooltipType = typeof Root & {
  Content: typeof Content
  Trigger: typeof Trigger
}

// @ts-expect-error
export const Tooltip: TooltipType = Root

Tooltip.Content = TooltipContent
Tooltip.Trigger = Trigger

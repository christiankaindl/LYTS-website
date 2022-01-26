import { Stack, Row, Clamp, Columns, Grid } from '@christiankaindl/lyts'
import React, { FunctionComponent } from 'react'
import IconChild from './IconBox'
import * as styles from './Icons.css'

interface IconProps {
  small?: boolean
}

export const StackIcon: FunctionComponent<IconProps> = function StackIcon ({ small }) {
  const gap = small ? '4px' : '6px'
  return (
    <Stack gap={gap} expandChildren className={`${styles.stack} ${small && styles.small}`}>
      <IconChild />
      <IconChild />
      <IconChild />
    </Stack>
  )
}

export const RowIcon: FunctionComponent<IconProps> = function StackIcon ({ small }) {
  const gap = small ? '4px' : '6px'
  return (
    <Row gap={gap} expandChildren className={`${styles.row} ${small && styles.small}`} style={{ alignItems: 'stretch' }}>
      <IconChild />
      <IconChild />
      <IconChild />
    </Row>
  )
}

export const ClampIcon: FunctionComponent<IconProps> = function StackIcon ({ small }) {
  const clamp = small ? '15px' : '32px'
  return (
    <Clamp clamp={[clamp, clamp]} className={`${styles.clamp} ${small && styles.small}`}>
      <IconChild style={{ height: '100%' }} />
    </Clamp>
  )
}

export const ColumnsIcon: FunctionComponent<IconProps> = function StackIcon ({ small }) {
  const gap = small ? '4px' : '6px'
  return (
    <Columns gap={gap} ratio='1/2' className={`${styles.columns} ${small && styles.small}`}>
      <IconChild />
      <IconChild />
    </Columns>
  )
}

export const GridIcon: FunctionComponent<IconProps> = function StackIcon ({ small = false }) {
  const gap = small ? '3px' : '6px'
  const gridItemMinWidth = small ? '3px' : '7px'
  return (
    <Grid gap={gap} gridItemMinWidth={gridItemMinWidth} className={`${styles.grid} ${small && styles.small}`}>
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
    </Grid>
  )
}

export const iconMappings = {
  stack: StackIcon,
  row: RowIcon,
  clamp: ClampIcon,
  columns: ColumnsIcon,
  grid: GridIcon
}

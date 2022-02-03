import { Row, RowProps, Stack } from '@christiankaindl/lyts'
import { mauve } from '@radix-ui/colors'
import { FunctionComponent, useState } from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { lyts } from 'utils'
import * as Collapsible from '@radix-ui/react-collapsible'
import DebugProvider from '../DebugProvider/DebugProvider'
import { Check, ChevronsDownUp, ChevronsUpDown, Copy } from 'lucide-react'
import * as styles from './CodeEditor.css'
import { useCopyToClipboard } from 'react-use'

interface Props {
  code: string
  defaultExpanded: boolean
}
const CodeEditor: FunctionComponent<Props> = function ({ code, defaultExpanded = false }) {
  const [isOpen, setIsOpen] = useState(defaultExpanded)
  const [{ value }, copyToClipboard] = useCopyToClipboard()
  return (
    <LiveProvider
      scope={lyts}
      code={`// Edit the live code below\n${code}`}
    >
      <Collapsible.Root asChild open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
        <Stack gap={0.25}>
          <LivePreview
            // @ts-expect-error
            Component={({ children }) => {
              return (
                <Stack>
                  <DebugProvider>
                    {children}
                  </DebugProvider>
                </Stack>
              )
            }}
          />
          <Row gap={0.5} bleedBottom={isOpen ? undefined : 6} bleedLeft={6}>
            <Collapsible.Trigger asChild>
              <Button>
                {isOpen ? <ChevronsDownUp size={16} /> : <ChevronsUpDown size={16} />}
                <span>{isOpen ? 'Hide' : 'Show'} code</span>
              </Button>
            </Collapsible.Trigger>
            {isOpen && (
              <Button onClick={() => copyToClipboard(code)}>
                {value ? <Check size={16} /> : <Copy size={16} />}
                <span>{value ? 'Copied!' : 'Copy code'}</span>
              </Button>
            )}
          </Row>
          <Collapsible.Content
            style={{
              backgroundColor: mauve.mauve12,
              borderRadius: 12,
              padding: 12,
              caretColor: 'white'
            }}
          >
            <LiveEditor />
          </Collapsible.Content>
          <LiveError />
        </Stack>
      </Collapsible.Root>
    </LiveProvider>
  )
}

export default CodeEditor

const Button: FunctionComponent<RowProps> = function ({ children, ...props }) {
  return (
    <Row asChild gap={0.25} {...props}>
      <button className={styles.button}>
        {children}
      </button>
    </Row>
  )
}

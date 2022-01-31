import { FunctionComponent } from "react";
import { ComponentDoc } from 'react-docgen-typescript'
import { Row, Stack } from '@christiankaindl/lyts'
import * as style from './PropsTable.css'
import { Info } from "lucide-react";
import * as Popover from '@radix-ui/react-popover'
import ReactMarkdown from 'react-markdown'
import { mauve } from "@radix-ui/colors";

const PropsTable: FunctionComponent<ComponentDoc> = function ({ props }) {
  return (
    <>
      <h2>Props API</h2>
      <table className={style.propsTable}>
        <colgroup>
            <col style={{ width: '35%' }} />
            <col style={{ width: '35%' }} />
            <col style={{ width: '20%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default value</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: '0.9em' }}>
          {Object.entries(props).map(([name, test]) => {
            return (
              <tr key={name}>
                <td>
                  <InfoPopover propName={name} text={test.description} />
                </td>
                <td><code style={{ color: mauve.mauve11 }}>{test.type.name}</code></td>
                <td style={{ color: mauve.mauve11 }}>
                  {test.defaultValue?.value && <code style={{ color: mauve.mauve11 }}>{test.defaultValue?.value}</code>}
                  {!test.defaultValue?.value && '—'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default PropsTable

const InfoPopover: FunctionComponent<{ text: string, propName: string }> = function ({ text, propName }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild title="Click to view description">
        <Row gap={0.5} xAlign='start'>
          <code>{propName}</code>
          <Info size={16} />
        </Row>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Content
        align="start"
        style={{
          backgroundColor: 'white',
          borderRadius: 9,
          padding: 12,
          fontSize: '0.8em',
          boxShadow: 'rgba(0 0 0 / 0.2) 0px 4px 22px -4px, rgba(0 0 0 / 0.2) 0px 0px 6px -3px',
          maxWidth: 'min(calc(100vw - 60px), 50ch)',
          width: '100%',
        }}
      >
        <Popover.Arrow fill="white" offset={12} />
        <Stack>
          <ReactMarkdown>
            {text}
          </ReactMarkdown>
        </Stack>
      </Popover.Content>
    </Popover.Root>
  )
}

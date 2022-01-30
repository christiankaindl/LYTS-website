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
                  <Row gap={0.5} xAlign='start'>
                    <code>{name}</code>
                    <InfoPopover text={test.description} />
                  </Row>
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

const InfoPopover: FunctionComponent<{ text: string }> = function ({ text }) {
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <Info size={16} />
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Content
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '15px',
            fontSize: '0.8em',
            boxShadow: 'rgba(0 0 0 / 0.2) 0px 5px 20px -4px, rgba(0 0 0 / 0.15) 0px 0px 7px -4px',
            maxWidth: '50ch'
          }}
        >
          {/* <Popover.Close /> */}
          <Popover.Arrow />
          <Stack>
            <ReactMarkdown>
              {text}
            </ReactMarkdown>
          </Stack>
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}

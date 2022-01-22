import { FunctionComponent } from "react";
import { ComponentDoc } from 'react-docgen-typescript'
import { Stack } from '@christiankaindl/lyts'
import * as style from './PropsTable.css'
import { mauve } from "@radix-ui/colors";

const PropsTable: FunctionComponent<ComponentDoc> = function ({ props }) {
  return (
    <>
      <h2>Props API</h2>
      <table className={style.propsTable}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: '0.9em' }}>
          {Object.entries(props).map(([name, test]) => {
            return (
              <tr key={name}>
                <td>
                  <Stack gap={0.5} xAlign='start'>
                    <code>{name}</code>
                    <span
                      style={{
                        color: mauve.mauve11,
                        fontSize: '0.95em'
                      }}
                    >
                      {test.type.name}
                    </span>
                  </Stack>
                </td>
                <td>{test.defaultValue?.value}</td>
                <td>
                  <p>
                    {test.description}
                  </p>
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

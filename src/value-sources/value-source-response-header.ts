import { VariableDefinition } from '../custom-header-format/variable-definition/variable-definition'
import { ResponseHookContext } from '../insomnia/types/response-hook-context'
import { ValueSource } from './value-source'

export const valueSourceResponseHeader: ValueSource = {
  type: 'responseHeader',
  displayName: 'Response Header',
  canBeExtracted: false,
  argumentName: 'Header Name',
  extractFromResponse: async (
    variableDefinition: VariableDefinition,
    context: ResponseHookContext,
  ): Promise<string | null | undefined> => {
    const header = context.response.getHeader(variableDefinition.sourceArg ?? '')
    if (Array.isArray(header)) {
      return header[0]
    } else {
      return header
    }
  },
}

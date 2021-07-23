export type TemplateTagArg = {
  displayName: string | ((args: TemplateTagArgWithValue[]) => string)
  description?: string
  defaultValue: string | number | boolean
  type: 'string' | 'number' | 'enum' | 'model' | 'boolean'
  hide?: (args: Array<TemplateTagArg & { value: unknown }>) => boolean
}

export type TemplateTagArgWithValue = TemplateTagArg & {
  value: unknown
}

export type TemplateTagStringArg = TemplateTagArg & {
  type: 'string'
  placeholder?: string
}

export type TemplateTagNumberArg = TemplateTagArg & {
  type: 'number'
}

export type TemplateTagModelArg = TemplateTagArg & {
  type: 'model'
  modelType?: string
}

export type TemplateTagEnumArg = TemplateTagArg & {
  type: 'enum'
  options?: Array<{
    displayName: string
    value: string
    description?: string
    placeholder?: string
  }>
}

export type TemplateTagBooleanArg = TemplateTagArg & {
  type: 'boolean'
}

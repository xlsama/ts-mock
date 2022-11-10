import path from 'path'
import fs, { readFileSync } from 'fs'
import * as TJS from 'typescript-json-schema'
import { JSONSchemaFaker, Schema } from 'json-schema-faker'

const genSchemaFromTs = (tsFilePath: string) => {
  const settings = {
    required: true,
    // topRef: true,
    refs: true
  }

  const compilerOptions = {
    strictNullChecks: true
  }

  const basePath = process.cwd()

  const program = TJS.getProgramFromFiles(
    [path.resolve(tsFilePath)],
    compilerOptions,
    basePath
  )

  const generator = TJS.buildGenerator(program, settings)
  const symbols = generator?.getUserSymbols()

  const schema = generator?.getSchemaForSymbols(symbols || [])

  fs.writeFileSync('schema.json', JSON.stringify(schema), 'utf-8')
  return schema
}

const genMockData = (schema: TJS.Definition) =>
  JSONSchemaFaker.generate(schema as Schema)

const schema = genSchemaFromTs('interface/WebcastOpenManagementService.ts')

// if (schema) {
//   const data = genMockData(schema)
//   console.log(data)
//   fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8')
// }

// const mock = (tsFilePath, interfaces) => {}

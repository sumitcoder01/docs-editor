import { DocumentMeta } from "../../../interfaces/document"


export type DocumentCardProps={
  documentData:DocumentMeta
}

export const DocumentCard=({documentData}:DocumentCardProps)=> {
    return (
      <div>
        document -{documentData.title}
      </div>
    )
  }
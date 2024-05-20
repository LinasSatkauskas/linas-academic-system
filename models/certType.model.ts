import { model, models, Schema } from "mongoose"

export interface ICertType {
  id: String
  title: String
}

const CertTypeSchema = new Schema<ICertType>(
  {
    title: String,
  },
  {
    timestamps: false,
    collection: "cert_types",
    strict: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret.id
        delete ret.id
      },
    },
  }
)
export const CertType = models.CertType || model("CertType", CertTypeSchema)

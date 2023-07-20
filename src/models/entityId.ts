import { ObjectId } from "mongodb"

interface EntityId {
    _id: ObjectId | undefined
}

export {
    EntityId
}
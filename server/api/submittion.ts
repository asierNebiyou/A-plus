import { Consultation } from "~/server/models/submittion.model";

export default defineEventHandler(async (event) => {  
  const method = event.node.req.method
  const query = getQuery(event)

  try {
    switch (method) {
      case "GET":
        if (query.id) {
          const consultation = await Consultation.findById(query.id)
          if (!consultation) {
            throw createError({
              statusCode: 404,
              message: "Consultation not found"
            })
          }
          return consultation
        } else {
          // Support pagination and filtering
          const page = parseInt(query.page) || 1
          const limit = parseInt(query.limit) || 10
          const status = query.status
          
          const filterQuery = status ? { status } : {}
          
          const consultations = await Consultation.find(filterQuery)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit)
          
          const total = await Consultation.countDocuments(filterQuery)
          
          return {
            consultations,
            pagination: {
              total,
              page,
              pages: Math.ceil(total / limit)
            }
          }
        }

      case "POST":
        const createBody = await readBody(event)
        const newConsultation = await Consultation.create(createBody)
        return {
          success: true,
          data: newConsultation
        }

      case "PUT":
        const updateBody = await readBody(event)
        const { _id, ...updateData } = updateBody

        if (!_id) {
          throw createError({
            statusCode: 400,
            message: "ID is required for updating"
          })
        }

        const updatedConsultation = await Consultation.findByIdAndUpdate(
          _id,
          { $set: updateData },
          { new: true, runValidators: true }
        )

        if (!updatedConsultation) {
          throw createError({
            statusCode: 404,
            message: "Consultation not found"
          })
        }

        return {
          success: true,
          data: updatedConsultation
        }

      case "DELETE":
        const deleteBody = await readBody(event)
        const { id: deleteId } = deleteBody

        if (!deleteId) {
          throw createError({
            statusCode: 400,
            message: "ID is required for deletion"
          })
        }

        const deletedConsultation = await Consultation.findByIdAndDelete(deleteId)

        if (!deletedConsultation) {
          throw createError({
            statusCode: 404,
            message: "Consultation not found"
          })
        }

        return {
          success: true,
          message: "Consultation deleted successfully"
        }

      default:
        throw createError({
          statusCode: 405,
          message: "Method not allowed"
        })
    }
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    })
  }
})
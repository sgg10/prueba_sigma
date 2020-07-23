import joi from '@hapi/joi'

function validationHandler(data, schema){
    const { error } = joi.object(schema).validate(data)
    return error ? error : true
}

export { validationHandler }

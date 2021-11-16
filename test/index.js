function getRequestBodyFromValues(formValues) {

    var a = formValues.forEach(function (values){
        return `'${values.field}': '${values.value}'`
    })
    return a;

}

console.log(getRequestBodyFromValues([{ field: 'name', value: 'Sơn Đặng' }]))


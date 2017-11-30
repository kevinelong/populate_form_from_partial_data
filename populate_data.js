var POPULATE_DATA = function () {

    /***
     * POPULATE_DATA.applyData
     * @param fieldParent
     * @param data
     * @param data_field_map
     */
    function applyData(fieldParent, data, data_field_map) {

        if (
            fieldParent === undefined ||
            data === undefined ||
            data_field_map === undefined
        ) {
            console.log('USAGE: POPULATE_DATA.applyData(fieldParent, data, data_field_map);');
            return false;
        }


        function applyField(field) {

            const INPUT = 'INPUT';
            const TEXTAREA = 'TEXTAREA';
            const SELECT = 'SELECT';

            //Try looking for name
            var element = fieldParent.querySelector("[name='" + field.target_field + "']");

            //Try looking for id
            if (element === undefined) {
                console.log("Unknown element name. Trying id...", field)
                element = fieldParent.querySelector("#" + field.target_field);
            }

            //handle not found name nor id
            if (element === undefined) {
                console.log("Unknown element name or id.", field)
                return false;
            }

            var value = "";

            if (!Array.isArray(field.source_field)) {
                //SIMPLE VALUE
                value = data[field.source_field];
            } else {
                //COMPOUND VALUE
                var output = [];
                field.source_field.forEach(function (sourcePart) {
                    output.push(data[sourcePart]);
                });
                value = output.join(' ');
            }

            if (element.tagName === undefined) {
                return false;
            }

            if (
                element.tagName === INPUT
                ||
                element.tagName === SELECT
            ) {
                element.value = value;
            } else if (element.tagName === TEXTAREA) {
                element.innerText = value;
            } else {
                console.log("Unknown field element type.", field)
            }

        }

        data_field_map.forEach(applyField);

        return fieldParent;
    }

    return {
        applyData: applyData
    }
}();
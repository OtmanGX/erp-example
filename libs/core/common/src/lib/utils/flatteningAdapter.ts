
export function flattenObj(objtoAdapt, parent?, res = {}) {
    for (var key of Object.keys(objtoAdapt)) {
        if ((key == "__typename")) continue;

        let newKey = parent ? parent + '_' + key : key || '';
        if (typeof objtoAdapt[key] == 'object' && objtoAdapt[key] !== null) {
            flattenObj(objtoAdapt[key], newKey, res);
        } else {
            res[newKey] = objtoAdapt[key];
        }
    }
    console.log(res)
    return res;
}
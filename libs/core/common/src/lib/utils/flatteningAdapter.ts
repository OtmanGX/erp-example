
export function flattenObj(objtoAdapt ,res={}) {
     
    for (var key of Object.keys(objtoAdapt)) {
        if ((key == "__typename")) continue;
        if (typeof objtoAdapt[key] == 'object' && objtoAdapt[key] !== null) {
            flattenObj(objtoAdapt[key], res);
        } else {
            res[key] = objtoAdapt[key];
        }
    }
    return res;
}


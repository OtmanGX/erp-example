
export function flattenObj(objtoAdapt ,res={}) {
     
    for (var key of Object.keys(objtoAdapt)) {
<<<<<<< HEAD
        if ((key == "__typename" )) continue;

        let newKey = parent ? parent + '_' + key : key || '';
=======
        if ((key == "__typename")) continue;
>>>>>>> de2f65f (adding common libs)
        if (typeof objtoAdapt[key] == 'object' && objtoAdapt[key] !== null) {
            flattenObj(objtoAdapt[key], res);
        } else {
            res[key] = objtoAdapt[key];
        }
    }
    return res;
}




export function flattenObj(objtoAdapt ,old='',res={}) {

    for (var key of Object.keys(objtoAdapt)) {
        if ((key == "__typename")) continue;
        if (typeof objtoAdapt[key] == 'object' && objtoAdapt[key] !== null) {
            old=key
            flattenObj(objtoAdapt[key],old, res);
        } else {
            if(Object.keys(res).includes(key)&& objtoAdapt[key] !== null ){ 
            console.log(key);
            res[old+'_'+key] = objtoAdapt[key];
            res[key]
        }
            else if (objtoAdapt[key] !== null) res[key] = objtoAdapt[key];
        }
        
    }
    return res;
}



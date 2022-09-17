export const getObjectValue = (_obj: {[key: string]: any},path: string) => {
    try{
        return eval("obj."+path);
    } catch(e) {
        return undefined;
    }
}
export const getObjectValue = (_obj: {[key: string]: any},path: string) => {
    try{
        return eval("obj."+path);
    } catch(e) {
        return undefined;
    }
}

export const calculatePriceRange = (inputs: number[], factor: number) => inputs.map(num => factor * num / 100)
export const priceToPercentage = (inputs: number[], factor: number) => inputs.map((num: number) => (num / factor) * 100)
export const formatCurrency = (amount: number) => {
    if (typeof amount !== 'number' ) return amount;
    return Intl.NumberFormat('en', { notation: 'compact' }).format(amount)
}
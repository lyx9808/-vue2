/**
 * 判断变量的数据类型
 * @param {any} val 变量值
 * @returns {string} 数据类型
 */
export function getType(val) {
    return Object.prototype.toString
        .call(val)
        .replace(/\[object\s(\w+)\]/, "$1")
        .toLowerCase();
}

/**
 * 判断变量是否有具体定义，即非null,非undefined,非空字符串
 * @param {any} val 变量值
 * @returns {boolean} 变量是否有具体定义
 */
export function isDefined(val) {
    const type = getType(val);
    return type !== "null" && type !== "undefined" && val !== "";
}

export function isObject(val) {
    return getType(val) === "object";
}

export function isArray(val) {
    return getType(val) === "array";
}

export function isNumber(val) {
    return typeof val === "number";
}

export function isString(val) {
    return typeof val === "string";
}

export function isBool(val) {
    return typeof val === "boolean";
}

export function isUndefined(val) {
    return typeof val === "undefined";
}

export function isNull(val) {
    return val === null;
}

export function isBasicType(val) {
    return isNumber(val) || isString(val) || isBool(val) || isUndefined(val) || isNull(val);
}

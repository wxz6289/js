// 判断值是否是null
export default function isNull(value){
    return !value && typeof value === "object";
}
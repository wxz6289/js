export default function isNaN(v){
    return typeof v === 'number' && v !== v;
}
export default function coordsValidator(inputValue) {
    if(/^\[?[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)\]?$/gm.test(inputValue)) {
        return true;
    } else {
        return false;
    }
}
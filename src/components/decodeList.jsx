function decodeList(props) {

    const procBosses = (bosses) => {
        if (bosses.length == 1) {
            return parseInt(bosses);
        } else {
            const toRet = {};
            const toRet2 = {};
            for (let i = 0; i < bosses.length; i++) {
                let curNum = parseInt(bosses.charAt(i))
                let dark = curNum >= 2;
                let reg = curNum % 2 == 1;
                toRet[`reg${i}`] = reg;
                toRet2[`dark${i}`] = dark;
            }
            return {...toRet, ...toRet2};
        }
    }

    const procCharacters = (chars) => {
        if (chars == null) return null;
        const toRet = {};
        for (let i = 0; i < chars.length; i++) {
            toRet[`char${i}`] = chars.charAt(i) != '0';
        }
        return toRet;
    }

    return {
        ...props,
        targets: procBosses(props.targets),
        char01: procCharacters(props.char01),
        char02: procCharacters(props.char02),
        char03: procCharacters(props.char03),
    }
}
export default decodeList;
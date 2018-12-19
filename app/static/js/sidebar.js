// 获取随机HSL
function randomHSL(){
    let H = Math.random();
    let S = Math.random();
    let L = Math.random();
    return [H, S, L];
}

// 获取HSL数组
function getHSLArray(length){
    let HSL = [];
    for (let i = 0; i < length; i++){
        let hsl = randomHSL();

        // 颜色相邻颜色差异须大于0.25
        if (i > 0 && Math.abs(hsl[0] - HSL[i-1][0]) < 0.25){
            i--;
            continue;
        }
        hsl[1] = 0.7 + (hsl[1] * 0.2); // [0.7 - 0.9] 排除过灰颜色
        hsl[2] = 0.4 + (hsl[2] * 0.4); // [0.4 - 0.8] 排除过亮过暗色

        // 数据转化到小数点后两位
        hsl = hsl.map(function (item) {
          return parseFloat(item.toFixed(2));
        });
        HSL.push(hsl);
    }
    return HSL;
}

// HSL转RGB
function HSL2RGB(H, S, L){
    let R, G, B;
    if (+S === 0){
        R = G = B = L;
    } else {
        let hue2Rgb = function (p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };
        let Q = L < 0.5 ? L * (1 + S) : L + S - L * S;
        let P = 2 * L - Q;
        R = hue2Rgb(P, Q, H + 1/3);
        G = hue2Rgb(P, Q, H);
        B = hue2Rgb(P, Q, H - 1/3);
    }
    return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
}


$(document).ready(function () {
    let a = $(".card-body > a");
    let HSL = getHSLArray(a.length);
    for (let i = 0; i < a.length; i++){
        let RGB = HSL2RGB(HSL[i][0], HSL[i][1], HSL[i][2]);
        $(a[i]).css("font-size", "14px");
        $(a[i]).css("margin-left", "15px");
        $(a[i]).css("margin-bottom", "15px");
        //console.log('rgb(' + RGB.toString() + ')');
        $(a[i]).css("background-color", 'rgb(' + RGB.toString() + ')');
    }
});

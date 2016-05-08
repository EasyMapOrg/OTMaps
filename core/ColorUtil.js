/**
 * @author ��ΰ��
 * @version 1.0
 * @date 2016-05-08
 * @description ɫ�ʹ���
 */

function ColorUtil() {
}

// ��rgb��ʾ��ʽת��Ϊhex��ʾ��ʽ("rgb(21,12,150)")
ColorUtil.prototype.rgb2hex = function (rgb) {
    var _this = rgb;
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
        var aColor = _this.replace(/(?:(|)|rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            hex = hex < 10 ? 0 + '' + hex : hex;// ��֤ÿ��rgb��ֵΪ2λ
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = _this;
        }
        return strHex;
    } else if (reg.test(_this)) {
        var aNum = _this.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return _this;
        } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    } else {
        return _this;
    }
}

// ��hex��ʾ��ʽת��Ϊrgb��ʾ��ʽ(���ﷵ��rgb����ģʽ)
ColorUtil.prototype.hex2rgb = function (hex) {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var hex = sColor.toLowerCase();
    if (hex && reg.test(hex)) {
        if (hex.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(hex.slice(i, i + 1));
            }
            hex = sColorNew;
        }
        //������λ����ɫֵ
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return sColorChange;
    } else {
        return hex;
    }
};

// ��ȡһ�齥��ɫ(#1abc9c,#333fff,5)
ColorUtil.prototype.getGradientColor = function(startColor, endColor, step) {
    startRGB = this.hex2rgb(startColor);//ת��Ϊrgb����ģʽ
    startR = startRGB[0];
    startG = startRGB[1];
    startB = startRGB[2];

    endRGB = this.hex2rgb(endColor);
    endR = endRGB[0];
    endG = endRGB[1];
    endB = endRGB[2];

    sR = (endR - startR) / step;//�ܲ�ֵ
    sG = (endG - startG) / step;
    sB = (endB - startB) / step;

    var colorArr = [];
    for (var i = 0; i < step; i++) {
        //����ÿһ����hexֵ
        var hex = this.rgb2hex('rgb(' + parseInt((sR * i + startR)) + ',' + parseInt((sG * i + startG)) + ',' + parseInt((sB * i + startB)) + ')');
        colorArr.push(hex);
    }
    return colorArr;
}


import { createBaseLayerStyles, createOpacity, cssColor } from './layerStyles';
const createTextTransform = (transform) => {
    if (transform === 'none') {
        return {};
    }
    else {
        return {
            textTransform: transform
        };
    }
};
const createTextBorders = (borders) => {
    if (borders.length > 0 && borders[0].enabled) {
        const { thickness, color } = borders[0];
        return {
            WebkitTextStrokeColor: cssColor(color),
            WebkitTextStrokeWidth: `${thickness * 2}px`,
            MozTextStrokeColor: cssColor(color),
            MozTextStrokeWidth: `${thickness * 2}px`
        };
    }
    else {
        return {};
    }
};
const createTextShadow = (sketchTextShadow) => {
    const { x, y, blur, color } = sketchTextShadow;
    const textShadow = `${x}px ${y}px ${blur}px ${cssColor(color)}`;
    return {
        textShadow
    };
};
const createTextShadows = (shadows) => {
    if (shadows.length > 0) {
        const textShadows = shadows.map((shadow) => {
            if (shadow.enabled) {
                const textShadow = createTextShadow(shadow);
                return textShadow.textShadow;
            }
        });
        return {
            textShadow: textShadows.join(', ')
        };
    }
    else {
        return {};
    }
};
const createTextDecoration = (textStrikethrough, textUnderline) => {
    if (textStrikethrough) {
        return {
            textDecoration: 'line-through'
        };
    }
    else if (textUnderline) {
        return {
            textDecoration: 'underline'
        };
    }
    else {
        return {};
    }
};
const createLetterSpacing = (kerning) => {
    if (kerning !== null) {
        return {
            letterSpacing: `${kerning}px`
        };
    }
    else {
        return {};
    }
};
const createFontFamily = (fontFamily) => {
    return {
        fontFamily: fontFamily
    };
};
const createFontWeight = (fontWeight) => {
    const sketchRatio = fontWeight / 12;
    const domScale = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    const weight = domScale[Math.round(sketchRatio * domScale.length)];
    return {
        fontWeight: weight
    };
};
const createFontSize = (fontSize) => {
    return {
        fontSize: `${fontSize}px`
    };
};
const createFontStretch = (fontStretch) => {
    switch (fontStretch) {
        case 'compressed':
            return {
                fontStretch: 'extra-condensed'
            };
        case 'condensed':
            return {
                fontStretch: 'condensed'
            };
        case 'narrow':
            return {
                fontStretch: 'semi-condensed'
            };
        case 'expanded':
            return {
                fontStretch: 'expanded'
            };
        case 'poser':
            return {
                fontStretch: 'extra-expanded'
            };
        default:
            return {};
    }
    ;
};
const createFontColor = (color) => {
    return {
        color: cssColor(color)
    };
};
const createLineHeight = (lineHeight) => {
    if (lineHeight !== null) {
        return {
            lineHeight: `${lineHeight}px`
        };
    }
    else {
        return {};
    }
};
const createParagraphSpacing = (paragraphSpacing, lastChild) => {
    if (lastChild || paragraphSpacing === 0) {
        return {};
    }
    else {
        return {
            paddingBottom: `${paragraphSpacing}px`
        };
    }
};
const createTextAlign = (alignment) => {
    switch (alignment) {
        case 'left':
            return {
                textAlign: 'left'
            };
        case 'right':
            return {
                textAlign: 'right'
            };
        case 'center':
            return {
                textAlign: 'center'
            };
        case 'justified':
            return {
                textAlign: 'justify'
            };
    }
};
const createFontStyle = (fontStyle) => {
    if (fontStyle === 'italic') {
        return {
            fontStyle: 'italic'
        };
    }
    else {
        return {};
    }
};
const createVerticalAlignment = (alignment) => {
    switch (alignment) {
        case 'top':
            return {
                justifyContent: 'flex-start'
            };
        case 'center':
            return {
                justifyContent: 'center'
            };
        case 'bottom':
            return {
                justifyContent: 'flex-end'
            };
        default:
            return {
                justifyContent: 'flex-start'
            };
    }
};
export const textContainerStyles = (layer) => {
    const baseStyles = createBaseLayerStyles(layer);
    const verticalAlignment = createVerticalAlignment(layer.style.verticalAlignment);
    return Object.assign(Object.assign({}, baseStyles), verticalAlignment);
};
export const paragraphSpacing = (layer, lastChild) => {
    const { style } = layer;
    const paragraphSpacing = createParagraphSpacing(style.paragraphSpacing, lastChild);
    return Object.assign({}, paragraphSpacing);
};
export const textStyles = (layer) => {
    const { style } = layer;
    const textTransform = createTextTransform(style.textTransform);
    const fontFamily = createFontFamily(style.fontFamily);
    const fontSize = createFontSize(style.fontSize);
    const fontWeight = createFontWeight(style.fontWeight);
    const fontStyle = createFontStyle(style.fontStyle);
    const color = createFontColor(style.textColor);
    const lineHeight = createLineHeight(style.lineHeight);
    const opacity = createOpacity(style.opacity);
    const textDecoration = createTextDecoration(style.textStrikethrough, style.textUnderline);
    const fontStretch = createFontStretch(style.fontStretch);
    const textAlign = createTextAlign(style.alignment);
    const borders = createTextBorders(style.borders);
    const shadows = createTextShadows(style.shadows);
    const letterSpacing = createLetterSpacing(style.kerning);
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, textTransform), textAlign), fontFamily), fontSize), fontWeight), fontStretch), fontStyle), color), lineHeight), opacity), textDecoration), borders), shadows), letterSpacing);
};
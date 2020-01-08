import React from 'react';
import Layers from './Layers';
import Selection from './Selection';
import Hover from './Hover';
import artboardStyles from '../styles/artboardStyles';
const Artboard = (props) => {
    const { artboard, images, svgs, setAppState, appState, zoom } = props;
    const { selection, hover } = appState;
    const onClick = () => {
        props.setAppState({
            selection: ''
        });
    };
    const onMouseOver = () => {
        props.setAppState({
            hover: props.artboard
        });
    };
    return (React.createElement("div", { className: 'c-artboard', style: Object.assign(Object.assign({}, artboardStyles(artboard)), { transform: `scale(${zoom})` }) },
        React.createElement(Layers, { layers: artboard.layers, images: images, svgs: svgs, setAppState: setAppState, appState: appState, style: {
                width: `${artboard.frame.width}px`,
                height: `${artboard.frame.height}px`
            } }),
        selection
            ? React.createElement(Selection, { selection: selection, hover: hover, artboard: artboard, zoom: zoom })
            : null,
        hover
            ? React.createElement(Hover, { hover: hover, selection: selection, artboard: artboard, zoom: zoom })
            : null,
        React.createElement("div", { className: 'c-artboard__click-area', onClick: onClick, onMouseOver: onMouseOver })));
};
export default Artboard;

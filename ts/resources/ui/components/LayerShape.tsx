import React from 'react';
import shapeStyles from '../styles/shapeStyles';

interface LayerShapeProps {
  layer: srm.Shape;
  images: srm.ImgAsset[];
  svgs: srm.SvgAsset[];
  onClick(): void;
  onMouseOver(): void;
  onMouseOut(): void;
}

const LayerShape = (props: LayerShapeProps) => {
  const { layer, svgs, onClick, onMouseOver, onMouseOut } = props;
  return (
    <div
      id={layer.id}
      className='c-layer c-layer--shape'
      style={shapeStyles(layer, svgs)}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut} />
  );
}

export default LayerShape;
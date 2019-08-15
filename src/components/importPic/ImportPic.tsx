/**
 * 图片组件，为防止引入太多而增加，如果图片上还有其他的事件或属性建议还是不使用此组件，使用require引入更好
 */
import React from 'react';

const ImportPic: React.FC<any> = (props) => {
  const src = require("../../assets/images/" + props.src);
  return (
    <img src={src} className={props.className} alt=""/>
  )
}

export default ImportPic

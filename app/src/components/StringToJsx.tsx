import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface StringToJsxType extends TextProps {
  /** 文字列 */
  text: string
}

/**
 * 文字列 → 改行されているJSXに変換するコンポーネント
 * 
 * 改行コード: "\n" | "\r" | "\r\n"
 */
const StringToJsx: React.FC<StringToJsxType> = (props) => {
  const texts = props.text.split(/(?:\r\n|\r|\n)/g);

  return (
    <>
      {texts.map((text, ind) => {
        return (
          <Text display="block" {...props} key={`txt-${ind}`}>
            {text || '　'}
          </Text>
        );
      })}
    </>
  );
};
export default StringToJsx;
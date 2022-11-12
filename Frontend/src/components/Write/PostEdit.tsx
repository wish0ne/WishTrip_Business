import styled from 'styled-components';
import palette from '../../lib/palette';
import Title from './Title';
import Button from './Button';
import Input from './Input';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const EditBlock = styled.div`
  width: 50%;
  height: 100%;
  padding: 8rem 3.2rem;
  position: relative;
  & > h2 {
    font-family: 'Medium';
    font-size: 1.2rem;
    color: ${palette.default1};
    margin-bottom: 0.4rem;
  }
  & > input[type='file'] {
    display: none;
  }
  & > label[for='inputFile'] {
    background-color: ${palette.primary3};
    border-radius: 0.6rem;
    color: white;
    font-family: 'Medium';
    font-size: 1.4rem;
    line-height: 2rem;
    padding: 1rem 2.4rem;
    margin-bottom: 2.4rem;
    display: inline-block;
  }
  & > textarea {
    width: 100%;
    background-color: ${palette.inversed1};
    height: 18rem;
    padding: 1.6rem;
    font-family: 'Medium';
    font-size: 1.3rem;
    line-height: 2rem;
    color: ${palette.default2};
    resize: none;
    border-radius: 1.2rem;
  }
`;

const PostEdit = () => {
  const [title, setTitle] = useState('');
  return (
    <EditBlock>
      <Title>포스트를 작성하세요</Title>
      <h2>사진 추가</h2>
      <label htmlFor="inputFile">파일 업로드</label>
      <input type="file" id="inputFile" />
      <h2>포스트 내용 작성</h2>
      <textarea />
      <Button active={title !== ''}>다음</Button>
    </EditBlock>
  );
};

export default PostEdit;

import styled from 'styled-components';
import palette from '../../lib/palette';
import Title from '../common/Title';
import Button from '../common/Button';
import { useRef, useState } from 'react';
import { start } from 'repl';

const PanelBlock = styled.div`
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
`;

const ButtonContainer = styled.div`
  margin-bottom: 2.4rem;
`;

const SelectBtn = styled.button<{ selected: boolean }>`
  padding: 1rem 2.4rem;
  border-radius: 0.6rem;
  font-family: Medium;
  font-size: 1.4rem;
  line-height: 2rem;
  background-color: ${(props) =>
    props.selected ? palette.primary3 : palette.inversed2};
  color: ${(props) => (props.selected ? 'white' : palette.default1)};
  margin-right: 0.8rem;
`;

const Line = styled.div`
  width: 12rem;
  height: 0.1rem;
  background-color: ${palette.inversed2};
  margin: 2.4rem 0;
`;

const Text = styled.div`
  font-family: Medium;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${palette.primary3};
`;

const Bold = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${palette.primary3};
  font-family: SemiBold;
`;

const Container = styled.div`
  padding: 1.6rem;
  border-radius: 1.2rem;
  background-color: ${palette.inversed1};
  width: 14rem;
  display: flex;
  font-family: Medium;
  font-size: 1.3rem;
  line-height: 2rem;
  color: ${palette.default2};
  & > input {
    font-family: Medium;
    font-size: 1.3rem;
    line-height: 2rem;
    width: 90%;
    color: ${palette.default2};
    background-color: ${palette.inversed1};
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Margin = styled.div`
  margin-bottom: 2.4rem;
`;

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
`;

function toStringByFormatting(source: Date, delimiter = '.') {
  const year = source.getFullYear();
  const month = source.getMonth() + 1;
  const day = source.getDate();

  return [year, month, day].join(delimiter);
}

const getDateDiff = (date1: Date, date2: Date) => {
  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
};

const Panel = () => {
  const [type, setType] = useState<string>('budget');
  const [budget, setBudget] = useState<string>('');
  const [date, setDate] = useState<Date>();

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const removedCommaValue: number = Number(value.replaceAll(',', ''));
    setBudget(removedCommaValue.toLocaleString());
  };
  return (
    <PanelBlock>
      <Title>광고 기간 또는 예산을 선택하세요.</Title>
      <ButtonContainer>
        <SelectBtn
          selected={type === 'budget'}
          onClick={() => setType('budget')}
        >
          예산 선택
        </SelectBtn>
        <SelectBtn
          selected={type === 'period'}
          onClick={() => setType('period')}
        >
          기간 선택
        </SelectBtn>
      </ButtonContainer>
      {type === 'budget' && (
        <>
          <h2>예산 입력</h2>
          <Container>
            <input type="text" value={budget} onChange={handleInput}></input>
            <span>원</span>
          </Container>
          <h2>시작일 선택</h2>
          <Container>
            <input
              type="date"
              onChange={(e) => setDate(new Date(e.target.value))}
            ></input>
          </Container>
          <Line />
          <Text>
            입력하신 예산에 따른 예상 광고 기간은 <Bold>약 14일</Bold>입니다.
          </Text>
          {date && (
            <Text>{`(${toStringByFormatting(date)} ~ ${toStringByFormatting(
              new Date(date.setDate(date.getDate() + 14)),
            )})`}</Text>
          )}
        </>
      )}
      {type === 'period' && (
        <>
          <h2>광고 기간 선택</h2>
          <DateContainer>
            <Container>
              <input
                type="date"
                onChange={(e) => setStartDate(new Date(e.target.value))}
              ></input>
            </Container>
            <span>~</span>
            <Container>
              <input
                type="date"
                onChange={(e) => setEndDate(new Date(e.target.value))}
              ></input>
            </Container>
          </DateContainer>
          {startDate && endDate && (
            <Text>
              {`입력하신 광고 기간(${getDateDiff(
                startDate,
                endDate,
              )}일)에 따른 예산은 `}
              <Bold>300,000원</Bold>입니다.
            </Text>
          )}
          <Line />
        </>
      )}
      <Margin />
      <Bold>계속 진행하시려면 다음 버튼을 눌러주세요.</Bold>
      <Button active={false}>다음</Button>
    </PanelBlock>
  );
};

export default Panel;

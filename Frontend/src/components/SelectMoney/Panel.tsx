import styled from 'styled-components';
import palette from '../../lib/palette';
import Title from '../common/Title';
import Button from '../common/Button';
import { useState } from 'react';
import PayPanel from './PayPanel';
import SmallButton from './Button';
import { useRecoilValue } from 'recoil';
import { selectRadius } from '../../recoil/atom';

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
    margin-top: 0.4rem;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
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
  const month = (source.getMonth() + 1).toString().padStart(2, '0');
  const day = source.getDate().toString().padStart(2, '0');

  return [year, month, day].join(delimiter);
}

const getDateDiff = (date1: Date, date2: Date) => {
  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // ???????????? * ??? * ??? * ??? = ???
};

const Panel = () => {
  const [type, setType] = useState<string>('budget');
  const [budget, setBudget] = useState<string>('');
  const [date, setDate] = useState<Date>();

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const [pay, setPay] = useState(false);

  const radius = useRecoilValue(selectRadius);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const removedCommaValue: number = Number(value.replaceAll(',', ''));
    setBudget(removedCommaValue.toLocaleString());
  };

  if (pay) {
    return (
      <PayPanel
        pay={
          type === 'budget'
            ? Number(budget.replaceAll(',', ''))
            : getDateDiff(startDate!, endDate!) * radius
        }
      />
    );
  }
  return (
    <PanelBlock>
      <Title>?????? ?????? ?????? ????????? ???????????????.</Title>
      <ButtonContainer>
        <SmallButton
          selected={type === 'budget'}
          handleClick={() => setType('budget')}
        >
          ?????? ??????
        </SmallButton>
        <SmallButton
          selected={type === 'period'}
          handleClick={() => setType('period')}
        >
          ?????? ??????
        </SmallButton>
      </ButtonContainer>
      {type === 'budget' && (
        <>
          <h2>?????? ??????</h2>
          <Container>
            <input type="text" value={budget} onChange={handleInput}></input>
            <span>???</span>
          </Container>
          <h2>????????? ??????</h2>
          <Container>
            <input
              type="date"
              value={date ? toStringByFormatting(date, '-') : ''}
              onChange={(e) => setDate(new Date(e.target.value))}
            ></input>
          </Container>
          <Line />

          {date && (
            <>
              <Text>
                ???????????? ????????? ?????? ?????? ?????? ?????????
                <Bold>
                  {' '}
                  ??? {Math.floor(Number(budget.replaceAll(',', '')) / radius)}???
                </Bold>
                ?????????.
              </Text>
              <Text>{`(${toStringByFormatting(date)} ~ ${toStringByFormatting(
                new Date(date.setDate(date.getDate() + 14)),
              )})`}</Text>
              <Margin />
              <Bold>?????? ?????????????????? ?????? ????????? ???????????????.</Bold>
            </>
          )}
        </>
      )}
      {type === 'period' && (
        <>
          <h2>?????? ?????? ??????</h2>
          <DateContainer>
            <Container>
              <input
                type="date"
                value={startDate ? toStringByFormatting(startDate, '-') : ''}
                onChange={(e) => setStartDate(new Date(e.target.value))}
              ></input>
            </Container>
            <span>~</span>
            <Container>
              <input
                type="date"
                value={endDate ? toStringByFormatting(endDate, '-') : ''}
                onChange={(e) => setEndDate(new Date(e.target.value))}
              ></input>
            </Container>
          </DateContainer>
          {startDate && endDate && (
            <>
              <Text>
                {`???????????? ?????? ??????(${getDateDiff(
                  startDate,
                  endDate,
                )}???)??? ?????? ????????? `}
                <Bold>{getDateDiff(startDate, endDate) * radius}???</Bold>?????????.
              </Text>
              <Margin />
              <Bold>?????? ?????????????????? ?????? ????????? ???????????????.</Bold>
            </>
          )}
        </>
      )}
      <Margin />

      <Button
        active={
          (type === 'budget' && budget !== '' && date !== undefined) ||
          (type === 'period' &&
            startDate !== undefined &&
            endDate !== undefined)
        }
        onClick={() => setPay(true)}
      >
        ??????
      </Button>
    </PanelBlock>
  );
};

export default Panel;

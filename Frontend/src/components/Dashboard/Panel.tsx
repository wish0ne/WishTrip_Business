import styled from 'styled-components';
import palette from '../../lib/palette';
import { Link } from 'react-router-dom';
import { ReactComponent as Plus } from '../../assets/images/earth_plus.svg';
import Info from './Info';
import { dashboardInfoData } from '../../mock/data';
import { clickInfo } from '../../recoil/atom';
import { useRecoilState, useSetRecoilState } from 'recoil';

const PanelBlock = styled.div`
  background-color: white;
  width: 30%;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  padding: 2.8rem 1.2rem;
  & > h3 {
    font-family: 'Medium';
    color: ${palette.default1};
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const AddButton = styled(Link)`
  font-family: 'Medium';
  color: ${palette.primary3};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: ${palette.inversed1};
  padding: 1.4rem 1.6rem;
  margin-bottom: 1.6rem;
  border-radius: 0.8rem;
`;

const InfoPadding = styled.div<{ clicked: boolean }>`
  padding: 1.4rem 1.6rem;
  background-color: ${palette.inversed1};
  border-radius: 1rem;
  border: 0.2rem solid ${palette.primary3};
  border-color: ${(props) => !props.clicked && 'transparent'};
`;

const Panel = () => {
  const [clicked, setClicked] = useRecoilState(clickInfo);
  return (
    <PanelBlock>
      <h3>광고 시작하기</h3>
      <AddButton to="../Write">
        <Plus width="2rem" height="2rem" />새 광고 만들기
      </AddButton>
      <h3>최근 광고</h3>
      {dashboardInfoData.map((info, idx) => {
        return (
          <InfoPadding
            key={info.id}
            onClick={() => setClicked(idx)}
            clicked={idx === clicked}
          >
            <Info
              image={info.img}
              title={info.title}
              location={info.location}
              radius={info.radius}
              status={info.status}
            />
          </InfoPadding>
        );
      })}
    </PanelBlock>
  );
};

export default Panel;

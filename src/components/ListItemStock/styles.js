import styled from 'styled-components/native';
import { TextLastUpdated } from 'components/TextLastUpdated';
import { TextDiffFeedback } from 'components/TextDiffFeedback';

export const Card = styled.View`
  background-color: ${({ theme }) => theme.primaryDark};
  margin-vertical: 4;
  margin-horizontal: 5;
  padding-top: 6;
  padding-horizontal: 6;
  height: 85;
  border-radius: 5;
  border-width: 2;
  border-color: ${({ error, theme }) =>
    error ? theme.red : theme.primaryDark};
  elevation: 3;
`;

export const Sections = styled.View`
  flex: 3;
  flex-direction: row;
`;

export const LeftSection = styled.View`
  flex: 4;
  justify-content: space-between;
`;

export const RightSection = styled.View`
  flex: 3;
`;

export const BottomSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1;
  border-top-width: 1;
  border-top-color: ${({ theme }) => theme.secondaryAccent};
`;

export const StockPrice = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const CompanyName = styled.Text`
  color: ${({ theme }) => theme.primaryAccent};
  font-weight: bold;
  font-size: 16;
  flex-wrap: wrap;
`;

export const CompanySymbol = styled.Text`
  color: ${({ theme }) => theme.secondaryAccent};
  font-size: 14;
  letter-spacing: 1;
`;

export const SecondaryText = styled.Text`
  color: ${({ theme }) => theme.primaryAccent};
  font-size: 13;
`;

export const LastUpdatedText = styled(TextLastUpdated)`
  color: ${({ theme }) => theme.secondaryDark};
  font-size: 13;
`;

export const FeedBackText = styled(TextDiffFeedback)`
  font-size: 13;
`;

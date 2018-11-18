import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BottomSection,
  Card,
  CompanyName,
  CompanySymbol,
  FeedBackText,
  LastUpdatedText,
  LeftSection,
  RightSection,
  RsiText,
  SecondaryText,
  Sections,
  StockPrice
} from './styles';

export class ListItemStock extends PureComponent {
  render() {
    const {
      companyName,
      symbol,
      rsi,
      price,
      lastUpdated,
      diff,
      error
    } = this.props;

    const dateUpdated = new Date(lastUpdated);
    const [upperLimit, lowerLimit] = [70, 30];

    return (
      <Card error={error}>
        <Sections>
          <LeftSection>
            <CompanyName>{companyName}</CompanyName>
          </LeftSection>
          <RightSection>
            <RsiText upperLimit={upperLimit} lowerLimit={lowerLimit}>
              {rsi.toFixed(1)}
            </RsiText>
          </RightSection>
        </Sections>
        <BottomSection>
          <CompanySymbol>{symbol}</CompanySymbol>
          <StockPrice>
            <SecondaryText>{`${price.toFixed(2)} USD`}</SecondaryText>
            <FeedBackText diff={diff} />
          </StockPrice>
          <LastUpdatedText date={dateUpdated} />
        </BottomSection>
      </Card>
    );
  }
}

ListItemStock.propTypes = {
  companyName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rsi: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  diff: PropTypes.number.isRequired,
  error: PropTypes.bool
};

ListItemStock.defaultProps = { error: false };

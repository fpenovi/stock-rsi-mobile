import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { preventNotPresent } from 'helpers/formatting';
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
  static getItemHeight = () => 85;

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

    const dateUpdated = lastUpdated && new Date(lastUpdated);
    const [upperLimit, lowerLimit] = [70, 30];

    return (
      <Card error={error}>
        <Sections>
          <LeftSection>
            <CompanyName>{companyName}</CompanyName>
          </LeftSection>
          <RightSection>
            <RsiText upperLimit={upperLimit} lowerLimit={lowerLimit}>
              {preventNotPresent(rsi, rsi => rsi.toFixed(1))}
            </RsiText>
          </RightSection>
        </Sections>
        <BottomSection>
          <CompanySymbol>{symbol}</CompanySymbol>
          <StockPrice>
            <SecondaryText>
              {`${preventNotPresent(price, price => price.toFixed(2))} USD`}
            </SecondaryText>
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
  rsi: PropTypes.number,
  price: PropTypes.number,
  lastUpdated: PropTypes.string,
  diff: PropTypes.number,
  error: PropTypes.bool
};

ListItemStock.defaultProps = { error: false };

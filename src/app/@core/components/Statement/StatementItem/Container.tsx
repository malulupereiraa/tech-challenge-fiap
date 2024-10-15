'use client';

import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export default styled(Container)`
  background: #FFFFFF;
  min-width: 255px;
  margin: 0px;
  padding: 0px;

  .row {
    margin: 0px;
    padding: 0px;
  }

  .row .col {
    padding: 0px;
  }

  .row .col:first-child {
    border-bottom: 1px solid #47A138;
    padding-bottom: 6px;
  }

  .statement-item-title {
    font-weight: 400;
  }

  .statement-item-amount {
    font-weight: 600;
  }

  .statement-item-positive-amount {
    color: #4575FF;
  }

  .statement-item-negative-amount {
    color: #FF7545;
  }

  .statement-item-date {
    color: #8B8B8B;
    text-align: right;
    font-size: 13px;
  }
`;

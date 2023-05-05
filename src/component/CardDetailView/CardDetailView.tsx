import React from "react";
import Style from "./CardDetailViewStyled";

import {
  BACKGROUND,
  DEFAULT_COMPANY,
  PLACE_HOLDER,
  STRING,
} from "../../abstract/constants";
import { ThemeProvider } from "styled-components";
import { CardCompany } from "../../types/card";

interface CardDetailViewProps {
  cardNumberHidden: string;
  cardDate: string;
  cardOwnerName: string;
  cardCompany: CardCompany;
}

function CardDetailView({
  cardNumberHidden,
  cardDate,
  cardOwnerName,
  cardCompany,
}: CardDetailViewProps) {
  const theme = {
    background: BACKGROUND[cardCompany],
  };
  return (
    <ThemeProvider theme={theme}>
      <Style.CreditCard>
        {cardCompany === DEFAULT_COMPANY ? (
          <Style.CompanyHint>카드사를 선택하세요</Style.CompanyHint>
        ) : (
          <Style.Company>{cardCompany}</Style.Company>
        )}
        <Style.ICDiv />
        <Style.CardNumberSection>
          <Style.CardNumber>
            {cardNumberHidden.replaceAll(STRING.DASH, " ")}
          </Style.CardNumber>
        </Style.CardNumberSection>
        <Style.CardInfoSection>
          <Style.CardInfo>
            {cardOwnerName ? cardOwnerName : PLACE_HOLDER.NAME}
          </Style.CardInfo>
          <Style.CardInfo>
            {cardDate ? cardDate : PLACE_HOLDER.MM_YY}
          </Style.CardInfo>
        </Style.CardInfoSection>
      </Style.CreditCard>
    </ThemeProvider>
  );
}

export default React.memo(CardDetailView);

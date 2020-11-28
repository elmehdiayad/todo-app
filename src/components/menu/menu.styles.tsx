import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, MOBILE_BREAKPOINT } from "../../assets/styles";

export default {
  Container: styled.div`
    min-width: 255px;
    padding-top: 69px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.09);
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      display: none;
    }
  `,
  MenuItem: {
    Container: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 49px;
      height: 48px;
      background: linear-gradient(
        89.98deg,
        rgba(235, 81, 78, 0.41) 0.02%,
        rgba(255, 255, 255, 0.41) 99.98%
      );
    `,
    Text: styled(Link)`
      font-family: ${FONTS.SEGOE_UI};
      font-size: 16px;
      line-height: 21px;
      color: ${COLORS.NIMBLE_RED};
      text-decoration: none;
    `,
    Icon: styled.img`
      margin-right: 19px;
      width: 18.01px;
      height: 17.37px;
    `,
  },
};

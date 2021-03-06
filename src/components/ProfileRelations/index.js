import styled from "styled-components";
import Box from "../Box";
import isShowingMoreItems from '../../../pages/index'
export const ProfileRelationsBoxWrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr; 
    max-height: ${(props) => (props.isShowingMoreItems ? '' : '220px')};
    list-style: none;
    overflow: hidden;
  }
  li a:hover {
    border: 4px solid rgba(255,255,255,0.7);
    border-radius: 8px;
    transition: 0.5s;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
      transition: 0.5s;
    }
    
  }

  .toggleButton {
    background: #555555;
    padding: 8px;
    font-size: 14px;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
  }
`;
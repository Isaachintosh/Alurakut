import styled from 'styled-components';

const Forms = styled.div `
    margin-bottom: 16px;
    .formArea {
        margin-bottom: 8px;
    }
    box, input {
        background: rgba(255,255,255, 0.15);
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
    }
    input:hover {
        background-color: rgba(255,255,255, 0.3);
        transition: 0.5s;
    }
    input:focus {
        background-color: rgba(0,0,0, 0.3);
        border: 1px solid rgba(225, 225, 255, 0.6205);
        transition: 0.5s;
        outline-style: none;
    }
`


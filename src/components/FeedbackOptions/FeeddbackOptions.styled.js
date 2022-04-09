import styled from "@emotion/styled";

export const Button = styled.button`
    background-color: teal;
    color: white;
    border-radius: 4px;
    width: 75px;
    cursor: pointer;
    :hover {
        background-color: blue;
    }
    :not(:last-child){
    margin-right: 10px;
    }`;
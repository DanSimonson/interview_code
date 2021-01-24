import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
let originalArray = [
  {
    firstName: "john",
    lastName: "johnson",
    score: 100,
  },
  {
    firstName: "aron",
    lastName: "aronson",
    score: 90,
  },
  {
    firstName: "tommy",
    lastName: "tomson",
    score: 80,
  },
  {
    firstName: "danny",
    lastName: "danielson",
    score: 110,
  },
];

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonDisplay = styled.button`
  -moz-box-shadow: inset 0px 1px 0px 0px #ffffff;
  -webkit-box-shadow: inset 0px 1px 0px 0px #ffffff;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #ffffff),
    color-stop(1, #f6f6f6)
  );
  background: -moz-linear-gradient(center top, #ffffff 5%, #f6f6f6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f6f6f6');
  background-color: #ffffff;
  -webkit-border-top-left-radius: 6px;
  -moz-border-radius-topleft: 6px;
  border-top-left-radius: 6px;
  -webkit-border-top-right-radius: 6px;
  -moz-border-radius-topright: 6px;
  border-top-right-radius: 6px;
  -webkit-border-bottom-right-radius: 6px;
  -moz-border-radius-bottomright: 6px;
  border-bottom-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -moz-border-radius-bottomleft: 6px;
  border-bottom-left-radius: 6px;
  text-indent: 0;
  border: 1px solid #dcdcdc;
  display: inline-block;
  color: #666666;
  font-family: arial;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  height: 50px;
  line-height: 50px;
  text-decoration: none;
  text-align: center;
  text-shadow: 0px 1px 0px #ffffff;
`;

function Sort() {
  const [sort, setSort] = useState(originalArray);
  const [ascSort, setAscSort] = useState(false);
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  //const prevCount = 0prevCountRef.current;
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  const prevCount = prevCountRef.current;
  const equals = (a, b) => {
    a.length === b.length && a.every((v, i) => v === b[i]);
  };
  const toggleSort = () => {
    setAscSort(!ascSort);
    //keep track of even or odd click counts
    if (count === 0) {
      //count clicked first time, so set to 0
      setCount(count + 1);
    } else {
      //increment count on each click
      setCount(count + 1);
      console.log("prevCount: ", prevCount);
      console.log("count: ", count);
    }
  };

  /*let prepareArray = (arr) => {
    let tempArray = [];
    arr.map((elem) => {
      if (typeof elem === "object" && elem !== null) {
        tempArray.push(JSON.stringify(elem));
      } else {
        tempArray.push(elem);
      }
    });
    return tempArray;
  };*/
  const lna = () => {
    let sorted = [...sort];
    let remainder = count % 2;
    console.log("remainder: ", remainder);
    if (remainder === 0) {
      console.log("count is 0 or even");
      sorted.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
      setSort(sorted);
      setAscSort(true);
      setCount(count + 1);
    } else {
      console.log("count is odd");
      setSort(originalArray);
      setAscSort(false);
      setCount(count + 1);
    }
    //let arrayTemp = prepareArray(sorted);
    //sorted.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
    //setSort(sorted);
    /*let arraysSame = equals(sorted, originalArray);
    if (arraysSame) {
      sorted.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
      setSort(sorted);
    } else {
      setSort(originalArray);
    }*/
    //toggleSort();
    return sorted;
  };
  return (
    <ContainerDiv>
      <ButtonDisplay onClick={lna}>Toggle Ascending Sort</ButtonDisplay>
      {ascSort ? <label>sorted array</label> : <label>pre sorted array</label>}
      {sort.map((person, index) => (
        <p key={index}>{person.lastName}</p>
      ))}
    </ContainerDiv>
  );
}

export default Sort;

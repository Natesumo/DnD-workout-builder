import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';

const Container = styled.div`
html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    font-family: sans-serif;
    color: 'white';
    margin: 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    padding: 10px;
  }

  li{
      color: white;
  }
  
  nav {
    background-color: '#181A1B';
    border: 3px solid #038EAC;
  }
  
  a {
    color: #038EAC;
    text-decoration: none;
    padding: 20px 5px;
  }
  
  .flex-nav {
    width: 100%;
  }
  
  .flex-nav ul {
    display: flex;
    justify-content: space-between;
  }
  
  .flex-nav li {
    flex: 2;
    display: flex;
    flex-basis: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

export default function Header() {
        return(
        <Container className='wrapper'>
        <nav className="flex-nav">
            <ul>
                <li>DnD Workout Builder</li>
                <li>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar" target="blank">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></li>
            </ul>
        </nav>
        </Container>
        )
}
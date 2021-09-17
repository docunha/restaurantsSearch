/* eslint-disable camelcase */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg'



import { Container, Search, Logo, Title, Carousel, Wrapper, CarouselTitle } from './styles';

const Home = () => {

  const [inputValue, setinputValue] = useState('');


  return (
    <Wrapper>
      <Container>  
        <Search>
          <Logo src={logo} alt='Logo Restaurant Finder'/>
          <TextField
            outlined
            label="Pesquisar"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => {setinputValue(e.target.value)} }
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
        </Search>


      </Container>
    </Wrapper>
  );
};

export default Home;

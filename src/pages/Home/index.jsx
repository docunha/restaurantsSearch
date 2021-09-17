/* eslint-disable camelcase */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import {
  Card,
} from '../../components';

import { Container, Search, Logo, Title, Carrossel, Wrapper, CarrosselTitle } from './styles';

const Home = () => {

  const [inputValue, setinputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };



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
          <CarrosselTitle>Na sua Área</CarrosselTitle>
          <Carrossel {...settings} >
            <Card photo={restaurante} title='Nome restaurante 01' />
            <Card photo={restaurante} title='Nome restaurante 02' />
            <Card photo={restaurante} title='Nome restaurante 03' />
            <Card photo={restaurante} title='Nome restaurante 04' />
            <Card photo={restaurante} title='Nome restaurante 05' />
            <Card photo={restaurante} title='Nome restaurante 06' />
            <Card photo={restaurante} title='Nome restaurante 07' />
            <Card photo={restaurante} title='Nome restaurante 08' />

          </Carrossel>
        </Search>


      </Container>
    </Wrapper>
  );
};

export default Home;

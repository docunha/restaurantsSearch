/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import {
  Card, RestaurantCard, Modal, Map
} from '../../components';

import { Container, Search, Logo, Title, Carrossel, Wrapper, CarrosselTitle } from './styles';

const Home = () => {

  const [inputValue, setValue] = useState('');
  //const [inputValue, setValue] = useState('');
  const [modalOpened, setmodalOpened] = useState(false);
  const [query, setQuery] = useState('');
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);




  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };
  //Campo busca restaurantes
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    //console.log('tecla apertada', e.key)

    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
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
            
            <Input type="text" value={inputValue} onKeyPress={handleKeyPress} onChange={handleChange} />
          </TextField>
          <CarrosselTitle>Na sua Área</CarrosselTitle>
          <Carrossel {...settings} >
            {restaurants.map((restaurant) => (
              <Card
              key={restaurant.place_id}
              photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon}
              title={restaurant.name}/>
            ))}
          </Carrossel>
        </Search>
        {restaurants.map((restaurant) => (
        <RestaurantCard restaurant={restaurant}/>
        ))}
        

        <Modal open={modalOpened} onClose={() => setmodalOpened(false)} />
      </Container>
      <Map query={query}/>
    </Wrapper>
  );
};

export default Home;

/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import Slider from 'react-slick';

import logo from '../../assets/logo.svg';

import {
  Card, RestaurantCard, Modal, Map, Loader, Skeleton
} from '../../components';

import { Container, Search, Logo, Title, Carrossel, Wrapper, CarrosselTitle } from './styles';

const Home = () => {

  const [inputValue, setValue] = useState('');
  //const [inputValue, setValue] = useState('');
  const [modalOpened, setmodalOpened] = useState(false);
  const [placeId, setPlaceId] = useState(null);
  const [query, setQuery] = useState('');
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);



  //Configurações do Carrossel
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
  const handleOpenModal = (placeId) => {
    setPlaceId(placeId);
    setmodalOpened(true);
  } 
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
          {restaurants.length > 0 ? (
            <>            
              <CarrosselTitle>Na sua Área</CarrosselTitle>
              <Carrossel {...settings} >
                {restaurants.map((restaurant) => (
                  <Card
                  key={restaurant.place_id}
                  photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon}
                  title={restaurant.name}/>
                ))}
              </Carrossel>
            </>
          ) : (<Loader/>)}
        </Search>
        {restaurants.map((restaurant) => (
        <RestaurantCard onClick={() => { handleOpenModal(restaurant.place_id)}} restaurant={restaurant}/>
        ))}
        

        <Modal open={modalOpened} onClose={() => setmodalOpened(false)}>
          {restaurantSelected ? (
            <>
          <p>{restaurantSelected?.name}</p>
          <p>{restaurantSelected?.formatted_phone_number}</p>
          <p>{restaurantSelected?.formatted_address}</p>
          <p>
                {restaurantSelected?.opening_hours?.isOpen
                  ? 'Aberto agora :)'
                  : 'Fechado neste momento :('}
          </p>
            </>
          ) : (
            <>
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
            </>
          )}

        </Modal>
      </Container>
      <Map query={query} placeId={placeId}/>
    </Wrapper>
  );
};

export default Home;

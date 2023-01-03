import {
  Heading,
  Text,
  Stack,
  VStack,
  Button,
  Image,
  HStack,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import { home } from './home.css';
import introVideo from '../../assets/videos/intro.mp4';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing="6"
          >
            <Heading children="Welcome to my course" size={'2xl'} />
            <Text
              fontFamily={'cursive'}
              textAlign={['center', 'left']}
              children="Find Valuble Content At Reasonable Price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme={'yellow'}>
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'green.300'}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop={'5px'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          controls
          controlsList="nodownload"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};
export { Home };

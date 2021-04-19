import React from 'react';
import { Col, Row } from 'reactstrap';
import { Button } from 'reactstrap';
import ItemBanner from './ItemBanner';
import Weather from './Weather';
import g from '../../../assets/img/logos/g.png';
import hp from '../../../assets/img/logos/hp.png';
import team2 from '../../../assets/img/team/5.jpg';
import generic4 from '../../../assets/img/generic/gradient1.jpg';
import apple from '../../../assets/img/logos/apple.png';
import weather from '../../../data/dashboard/weather';

const ProfileBanner = () => (
  <ItemBanner>
    <ItemBanner.Header avatarSrc={team2} coverSrc={generic4} />
    <ItemBanner.Body
      name="Tony Stark"
      verified
      headline="Married to Pepper Potts"
      location="New York, NY"
      noOfFollowers={330}
      previousJobs={[
        { institution: 'Google', src: g },
        { institution: 'Apple', src: apple },
        { institution: 'Hewlett Packard', src: hp }
      ]}
    >

      
    </ItemBanner.Body>
  </ItemBanner>
);

export default ProfileBanner;

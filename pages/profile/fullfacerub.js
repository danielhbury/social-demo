import React, { useEffect } from 'react';
import { useStore } from '@/hooks/useStore';
import Card from '../../src/app/Card';
import Avatar from '../../src/app/Avatar';
import dayjs from 'dayjs';

const Profile = () => {
  const {
    getProfileData,
    profileData,
    // getFeedData,
    // feedData,
  } = useStore();

  useEffect(() => {
    getProfileData('@fullfacerub')
    // getFeedData('@fullfacerub');
  }, [])

  if (!profileData.handle) {
    return <p>...Loading</p>
  }

  return (
  <div style={{
    display: 'flex',
  }}>
    <Card
      style={{
        width: '400px'
      }}>
        <Avatar />
        <p
          style={{
            fontWeight: 'bold'
          }}
        >
          {`${profileData.firstName} ${profileData.lastName}`}
        </p>
        <p>
          {profileData.handle}
        </p>
        <p>
          Member since: {dayjs(profileData.memberSince).format('MM/DD/YYYY')}
        </p>
      </Card>
    <Card
      style={{
        marginRight: '15px'
      }}
    >
      Feed
      {/* {feedData.map((item) => {
        <FeedItem item={item} />
      })} */}
    </Card>
  </div>
  )
}

export default Profile;

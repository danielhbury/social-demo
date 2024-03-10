import React from 'react';
import { useRouter } from 'next/router';

const Profile = (props) => {
  const router = useRouter();
  console.log('hit', router);

  return <div>Profile</div>
}

export default Profile;

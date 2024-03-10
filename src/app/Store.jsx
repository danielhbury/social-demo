import React, { createContext, useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import getProfileData from '../requests/getProfileData';

export const StoreContext = createContext({});

const Store = ({ children }) => {
  const [profileData, setProfileData] = useState({});
  // const [feedData, setFeedData] = useState([]);

  const context = useMemo(() => ({
    profileData,
    getProfileData: getProfileData(setProfileData),
    // feedData,
    // getFeedData: getFeedData(setFeedData),
  }), [
    profileData,
    // feedData,
  ])

  return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
}

export default Store;